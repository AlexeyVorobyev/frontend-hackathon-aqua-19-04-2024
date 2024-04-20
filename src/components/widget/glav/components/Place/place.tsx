import React, { useState } from 'react';
import styles from "./index.module.css";

interface Card {
  id: number;
  title?: string;
  imageSrc: string;
  isSelected: boolean;
}

interface EventCard {
  id: number;
  eventName: string;
  location: string;
  imageUrl: string;
  rating: string;
  pinIconUrl: string;
  iconUrl: string;
}

const Place: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<Card | null>(null);

  const initialCards: Card[] = [
    { id: 1, title: "Delhi", imageSrc: "/public/left-card-small-bg@2x.png", isSelected: false },
    { id: 2, title: "Афиша", imageSrc: "/public/main-card-small-bg@2x.png", isSelected: false },
    { id: 3, title: "Парки", imageSrc: "/public/right-1-card-small-bg@2x.png", isSelected: false },
    { id: 4, title: "Пляжи", imageSrc: "/public/right-2-card-small-bg@2x.png", isSelected: false },
    { id: 5, title: "Концерты", imageSrc: "/public/right-5-card-small-bg@2x.png", isSelected: false },
    { id: 6, title: "Lucknow", imageSrc: "/public/right-4-card-small-bg@2x.png", isSelected: false }
  ];
  const [cards, setCards] = useState<Card[]>(initialCards);
  const [isActive, setIsActive] = useState<boolean>(false);

  const cards2: EventCard[] = [
    {
      id: 1,
      eventName: 'Санаторий Голубая волна',
      location: 'Bali, Indonesia',
      imageUrl: '/public/image-1@2x.png',
      rating: '4.8',
      pinIconUrl: '/public/pin-icon-2.svg',
      iconUrl: '/public/heart.svg',
    },
    {
      id: 2,
      eventName: 'Fagradalsfjall',
      location: 'Reykjavík, Iceland',
      imageUrl: '/public/image-3@2x.png',
      rating: '4.8',
      pinIconUrl: '/public/pin-icon-3.svg',
      iconUrl: '/public/heart.svg',
    },
  ];

  return (
    <section className={styles.listItemParent}>
      <div className={styles.parent1}>
        <div className={styles.div14}>Интересные места</div>
        <div className={styles.seeAllContainer}>
          <div className={styles.seeAll1}>смотреть все</div>
        </div>
      </div>
      <div className={styles.placeCardParent}>
        {cards2.map(card => (
          <div className={styles.placeCard} key={card.id}>
            <div className={styles.thumbnailParent}>
              <div className={styles.thumbnail}>
                <div className={styles.shadow} />
                <img className={styles.imageIcon} alt="" src={card.imageUrl} />
                <div className={styles.favoriteIcon}>
                  <div className={styles.favoriteIconChild} />
                  <img className={styles.heartIcon} loading="lazy" alt="" src={card.iconUrl} />
                </div>
              </div>
              <div className={styles.container1}>
                <div className={styles.placeNameParent}>
                  <div className={styles.placeName}>{card.eventName}</div>
                  <div className={styles.frameParent3}>
                    <div className={styles.locationWrapper}>
                      <div className={styles.location}>
                        <div className={styles.pinIconWrapper}>
                          <img className={styles.pinIcon} loading="lazy" alt="" src={card.pinIconUrl} />
                        </div>
                        <div className={styles.baliIndonesia}>{card.location}</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.ratingIconWrapper}>
                        <img className={styles.ratingIcon} loading="lazy" alt="" src="/public/rating-icon.svg" />
                      </div>
                      <div className={styles.div12}>{card.rating}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Place;
