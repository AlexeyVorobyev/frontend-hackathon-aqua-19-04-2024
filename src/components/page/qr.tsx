import React, { useRef, useState, useEffect } from 'react';
import jsQR from 'jsqr';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './QrScanner.module.css'; 
export const QrScanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrRawContent, setQrRawContent] = useState<string>('');  // Для хранения сырых данных QR кода (URL)
  const [displayContent, setDisplayContent] = useState<string>('');

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
  const fetchWithSkipWarning = async (url) => {
    const response = await fetch(url, {
        headers: {
            'ngrok-skip-browser-warning': 'true'
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const contentType = response.headers.get('content-type');
    if (!contentType.includes('text/html')) {
        throw new Error('Invalid content type: Expected text/html');
    }
    return await response.text();  // Возвращаем HTML как текст
};

const fetchQrContent = async (encodedUrl) => {
  const urlPath = new URL(encodedUrl).pathname.split('/').pop();
  try {
      const htmlText = await fetchWithSkipWarning(`https://2000-46-18-203-145.ngrok-free.app/fetch-content?path=${urlPath}`);
      const content = parseHtmlContent(htmlText);  // Используем DOMParser для разбора HTML и извлечения нужного текста
      setDisplayContent(content);
  } catch (error) {
      console.error('Не удалось загрузить содержимое QR', error);
      setDisplayContent('Не удалось загрузить содержимое QR');
  }
};

const parseHtmlContent = (htmlText) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, 'text/html');
  const paragraphs = doc.querySelectorAll("p");
  let content = '';
  paragraphs.forEach(p => {
      content += p.textContent + ' ';  // Собираем текст всех абзацев
  });
  return content.trim();  // Убираем лишние пробелы по краям
};

return (
  <div className={styles.qrScanner}>
    <video ref={videoRef} />
    <canvas ref={canvasRef} style={{ display: 'none' }} />
    <div className={styles.scanText}>Остканируйте QR код</div>
    <Link to="/"><img className={styles.backButton} loading="lazy" alt="" src="/public/korz/svg.svg" /></Link>
    {displayContent && (
      <div className={styles.modal}>
        <div dangerouslySetInnerHTML={{ __html: displayContent }}></div>
      </div>
    )}
  </div>
);
};

export default QrScanner;