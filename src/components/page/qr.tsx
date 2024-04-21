import React, { useRef, useState, useEffect } from 'react';
import jsQR from 'jsqr';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './QrScanner.module.css'; 
export const QrScanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrRawContent, setQrRawContent] = useState<string>('');  // To store the QR raw data (URL)
  const [displayContent, setDisplayContent] = useState<string>(''); // To store the content to be displayed

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        videoRef.current!.srcObject = stream;
        videoRef.current!.play();
        scanQrCode();
      } catch (error) {
        console.error('Error accessing the camera', error);
      }
    };
    startVideo();
  }, []);

  const scanQrCode = () => {
    const scan = () => {
      if (videoRef.current?.readyState === videoRef.current?.HAVE_ENOUGH_DATA) {
        canvasRef.current!.width = videoRef.current!.videoWidth;
        canvasRef.current!.height = videoRef.current!.videoHeight;
        const context = canvasRef.current!.getContext('2d')!;
        context.drawImage(videoRef.current!, 0, 0, canvasRef.current!.width, canvasRef.current!.height);
        const imageData = context.getImageData(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          setQrRawContent(code.data); // Store the raw QR content
          videoRef.current!.srcObject!.getTracks().forEach(track => track.stop());
        } else {
          requestAnimationFrame(scan);
        }
      } else {
        requestAnimationFrame(scan);
      }
    };
    requestAnimationFrame(scan);
  };

  useEffect(() => {
    if (qrRawContent.startsWith('https://get-qr.com/')) {
      const newUrl = qrRawContent.replace('https://get-qr.com/', 'https://get-qr.com/content/');
      fetchQrContent(newUrl);
    }
  }, [qrRawContent]); // Depend on the raw QR content

  const fetchQrContent = async (encodedUrl: string) => {
    // Extract the path from the full URL if necessary
    const urlPath = new URL(encodedUrl).pathname;
    const proxyUrl = `/api/proxy${urlPath}`;  // Ensure it starts from /api/proxy
    console.log("URL being requested:", proxyUrl);
    try {
        const response = await axios.get(proxyUrl);
        const content = parseHtmlContent(response.data);
        setDisplayContent(content);
    } catch (error) {
        console.error('Failed to fetch QR content', error);
        setDisplayContent('Failed to fetch QR content');
    }
};



  

  const parseHtmlContent = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const div = doc.querySelector("div");
    return div ? div.innerHTML : '';
  };

  return (
    <div className={styles.qrScanner}>
      <video ref={videoRef} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div className={styles.scanText}>Остканируйте QR код</div>
      
      <Link to="/"><img
                  className={styles.backButton}
                  loading="lazy"
                  alt=""
                  src="/public/korz/svg.svg"
                /></Link>
      {displayContent && (
        <div className={styles.modal}>
          <div dangerouslySetInnerHTML={{ __html: displayContent }}></div>
        </div>
      )}
    </div>
  );
};

export default QrScanner;