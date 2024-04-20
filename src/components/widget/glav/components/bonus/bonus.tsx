
import React, { useState } from 'react';
import styles from './index.module.css';

// Define a type for the card object
type Card = {
  id: number;
  title: string;
  imageSrc: string;
  isSelected: boolean;
};

const Bon: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [cards, setCards] = useState<Card[]>([
    { id: 1, title: "Delhi", imageSrc: "/public/left-card-small-bg@2x.png", isSelected: false },
    { id: 2, title: "Афиша", imageSrc: "/public/main-card-small-bg@2x.png", isSelected: false },
    { id: 3, title: "Парки", imageSrc: "/public/right-1-card-small-bg@2x.png", isSelected: false },
    { id: 4, title: "Пляжи", imageSrc: "/public/right-2-card-small-bg@2x.png", isSelected: false },
    { id: 5, title: "Концерты", imageSrc: "/public/right-5-card-small-bg@2x.png", isSelected: false },
    { id: 6, title: "Lucknow", imageSrc: "/public/right-4-card-small-bg@2x.png", isSelected: false }  ]);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleCardClick = (id: number): void => {
    const updatedCards = cards.map(card => ({
      ...card,
      isSelected: card.id === id ? !card.isSelected : card.isSelected,
    }));
    setCards(updatedCards);
  };

  return (
    <section className={styles.frameSection}>
      {cards.map(card => (
        card.isSelected ? (
          <div className={styles.dataAggregator} key={card.id} onClick={() => handleCardClick(card.id)}>
            <div className={styles.mainCardSmall}>
              <img className={styles.mainCardSmallBg} alt="" src={card.imageSrc} />
              <div className={styles.div2}>{card.title}</div>
            </div>
            <div className={styles.articleCrown} />
          </div>
        ) : (
          <div className={styles.right1CardSmallWrapper} key={card.id} onClick={() => handleCardClick(card.id)}>
            <div className={styles.right1CardSmall}>
              <img className={styles.right1CardSmallBg} alt="" src={card.imageSrc} />
              <div className={styles.div3}>{card.title}</div>
            </div>
          </div>
        )
      ))}
    </section>
  );
};

export default Bon;
