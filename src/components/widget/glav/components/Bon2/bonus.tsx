import React, { useState } from 'react';
import styles from './index.module.css';

interface QRImage {
  id: number;
  src: string;
  alt: string;
}

interface PointsData {
  id: number;
  points: string;
}

interface Card {
  id: number;
  title: string;
  imageSrc: string;
  isSelected: boolean;
}

const Bon2 = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const qrImages: QRImage[] = [
    { id: 1, src: "/public/glav/qrcode-1-1.svg", alt: "QR Code 1" },
    // Add other images here if necessary
  ];

  const pointsData: PointsData[] = [
    { id: 1, points: "5 000" }
  ];

  const initialCards: Card[] = [
    { id: 1, title: "Delhi", imageSrc: "/public/glav/left-card-small-bg@2x.png", isSelected: false },
    { id: 2, title: "Афиша", imageSrc: "/public/glav/main-card-small-bg@2x.png", isSelected: false },
    { id: 3, title: "Парки", imageSrc: "/public/glav/right-1-card-small-bg@2x.png", isSelected: false },
    { id: 4, title: "Пляжи", imageSrc: "/public/glav/right-2-card-small-bg@2x.png", isSelected: false },
    { id: 5, title: "Концерты", imageSrc: "/public/glav/right-5-card-small-bg@2x.png", isSelected: false },
    { id: 6, title: "Lucknow", imageSrc: "/public/glav/right-4-card-small-bg@2x.png", isSelected: false }
  ];
  const [cards, setCards] = useState<Card[]>(initialCards);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleFindClick = () => {
    console.log("Searching for companies..."); // Search logic can go here
  };

  return (
    <section className={styles.outputGenerator}>
      <div className={styles.errorHandler}>
        <div className={styles.parallelProcessorParent}>
          <div className={styles.parallelProcessor}>
            <div className={styles.div6}>Код скидки</div>
          </div>
          {qrImages.map(image => (
            <img
              key={image.id}
              className={styles.qrCode11}
              loading="lazy"
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.mingcutecoinFillParent}>
            <img
              className={styles.mingcutecoinFillIcon}
              loading="lazy"
              alt=""
              src="/public/glav/mingcutecoinfill@2x.png"
            />
            <div className={styles.div7}>
              {pointsData.map(item => (
                <span key={item.id}><b>{item.points}</b>
                  <span className={styles.span1}>баллов</span>
                </span>
              ))}
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div8}>Приветственные баллы</div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.div9}>Мои компании</div>
            <button className={styles.findButton} onClick={handleFindClick}>Добавить</button>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default Bon2;
