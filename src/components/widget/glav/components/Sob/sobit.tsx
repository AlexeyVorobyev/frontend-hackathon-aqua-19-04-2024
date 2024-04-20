import React, { useState } from 'react';
import styles from "./index.module.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
  iconUrl: string;
  pinIconUrl: string;
  rating: string;
}

const Sob: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<Card | null>(null);
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate('/infocard'); // Navigate to /infocard
  };


  const initialCards: Card[] = [
    { id: 1, title: "Delhi", imageSrc: "/public/glav/left-card-small-bg@2x.png", isSelected: false },
    { id: 2, title: "Афиша", imageSrc: "/public/glav/main-card-small-bg@2x.png", isSelected: false },
    { id: 3, title: "Парки", imageSrc: "/public/glav/right-1-card-small-bg@2x.png", isSelected: false },
    { id: 4, title: "Пляжи", imageSrc: "/public/glav/right-2-card-small-bg@2x.png", isSelected: false },
    { id: 5, title: "Концерты", imageSrc: "/public/glav/right-5-card-small-bg@2x.png", isSelected: false },
    { id: 6, title: "Lucknow", imageSrc: "/public/glav/right-4-card-small-bg@2x.png", isSelected: false }
  ];
  const [cards, setCards] = useState<Card[]>(initialCards);

  const cards1: EventCard[] = [
    {
      id: 1,
      eventName: "Концерт “Верь в себя”",
      location: "ул. Марксистов",
      imageUrl: "/public/glav/image@2x.png",
      iconUrl: "/public/glav/heart.svg",
      pinIconUrl: "/public/glav/pin-icon.svg",
      rating: "4.8"
    },
    {
      id: 2,
      eventName: "Концерт “Верь в себя”",
      location: "ул. Марксистов",
      imageUrl: "/public/glav/image-1@2x.png",
      iconUrl: "/public/glav/heart.svg",
      pinIconUrl: "/public/glav/pin-icon.svg",
      rating: "4.8"
    }
  ];
  const [isActive, setIsActive] = useState<boolean>(false);


  return (
    <section className={styles.listItemParent}>
      <div className={styles.listItem}>
        <div className={styles.div11}>Интересные события</div>
        <div className={styles.seeAllWrapper}>
          <Link to="/sob" className={styles.seeAll}>смотреть все</Link>
        </div>
      </div>
      <div className={styles.placeCardParent}>
        {cards1.map((card) => (
          <div
            className={styles.placeCard}
            key={card.id}
            onClick={handleCardClick} // Call handleCardClick when the card is clicked
          >
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
                        <img className={styles.ratingIcon} loading="lazy" alt="" src="/public/glav/rating-icon.svg" />
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

export default Sob;
