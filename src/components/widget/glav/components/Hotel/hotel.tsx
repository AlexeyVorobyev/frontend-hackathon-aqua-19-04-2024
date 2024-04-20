
import React, { useState } from 'react';
import styles from "./index.module.css";
import type { NextPage } from "next";
import { useNavigate } from 'react-router-dom';
const Hot: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  // Обработчик изменений в поле ввода
  // Здесь можно реализовать функцию поиска, например, фильтрацию данных
  const initialCards = [
    { id: 1, title: "Delhi", imageSrc: "/public/glav/left-card-small-bg@2x.png", isSelected: false },
    { id: 2, title: "Афиша", imageSrc: "/public/glav/main-card-small-bg@2x.png", isSelected: false },
    { id: 3, title: "Парки", imageSrc: "/public/glav/right-1-card-small-bg@2x.png", isSelected: false },
    { id: 4, title: "Пляжи", imageSrc: "/public/glav/right-2-card-small-bg@2x.png", isSelected: false },
    { id: 5, title: "Концерты", imageSrc: "/public/glav/right-5-card-small-bg@2x.png", isSelected: false },
    { id: 6, title: "Lucknow", imageSrc: "/public/glav/right-4-card-small-bg@2x.png", isSelected: false }
  ];
  const dataArray = [
    {
      id: 1,
      rectangleImageUrl: "/public/glav/rectangle-992@2x.png",
      rating: 9.3,
      maxRating: 10,
      placeName: "Гранд Сапфир",
      iconUrl: "/public/glav/swm-icons--broken--trendingup.svg",
      dealType: "Hot Deal"
    },
    {
      id: 2,
      rectangleImageUrl: "/public/glav/rectangle-992-1@2x.png",
      rating: 8.5,
      maxRating: 10,
      placeName: "Luxurious Aspen",
      iconUrl: "/public/glav/swm-icons--broken--trendingup.svg",
      dealType: "Hot Deal"
    },
    // Добавьте другие объекты данных по аналогии с вышеприведенными
  ];
  const [cards, setCards] = useState(initialCards);
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate('/hotel'); // Navigate to /infocard
  };

  
    return (
      <section className={styles.mainChild}>
        <div className={styles.frameParent6}>
          <div className={styles.parent2}>
            <div className={styles.div17}>Отели</div>
            <div className={styles.seeAllFrame}>
              <div className={styles.seeAll2}>смотреть все</div>
            </div>
          </div>
          <div className={styles.frameParent7}>
  {dataArray.map(item => (
    <div className={styles.frameParent8} key={item.id}
    onClick={handleCardClick} >
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src={item.rectangleImageUrl}
        />
        <div className={styles.frame}>
          <div className={styles.div18}>
            <span className={styles.span2}>{item.rating}</span>
            <span className={styles.span3}>/</span>
            <span className={styles.span4}>{item.maxRating}</span>
          </div>
        </div>
      </div>
      <div className={styles.div19}>{item.placeName}</div>
      <div className={styles.frameWrapper1}>
        <div className={styles.swmIconsBrokenTrendingParent}>
          <img
            className={styles.swmIconsBrokenTrending}
            loading="lazy"
            alt=""
            src={item.iconUrl}
          />
          <div className={styles.hotDeal}>{item.dealType}</div>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>
  );
};

export default Hot;