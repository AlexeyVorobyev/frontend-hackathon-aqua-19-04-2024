
import React, { useState } from 'react';
import styles from "./index.module.css";
import type { NextPage } from "next";

const Infost: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = category => {
      setActiveCategory(category);
  };
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
  const [cards, setCards] = useState(initialCards);
  const [isActive, setIsActive] = useState(false);


  const dataArray1 = [
    {
        id: 1,
        rectangleImageUrl: "/public/glav/rectangle-992-2@2x.png",
        rating: 9.3,
        maxRating: 10,
        placeName: "Гранд Сапфир",
        iconUrl: "/public/glav/swm-icons--broken--trendingup.svg",
        dealType: "Hot Deal",
        category: "Спорт"
    },
    {
        id: 2,
        rectangleImageUrl: "/public/glav/rectangle-992-3@2x.png",
        rating: 8.5,
        maxRating: 10,
        placeName: "Luxurious Aspen",
        iconUrl: "/public/glav/swm-icons--broken--trendingup.svg",
        dealType: "Hot Deal",
        category: "Дети"
    },
    {
      id: 3,
      rectangleImageUrl: "/public/glav/rectangle-992-2@2x.png",
      rating: 9.3,
      maxRating: 10,
      placeName: "Гранд Сапфир",
      iconUrl: "/public/glav/swm-icons--broken--trendingup.svg",
      dealType: "Hot Deal",
      category: "Спорт"
  },];
  
  
    return (
      <section className={styles.mainInner1}>
      <div className={styles.frameParent10}>
        <div className={styles.parent3}>
          <div className={styles.div20}>Инфраструктура</div>
          <div className={styles.seeAllWrapper1}>
            <div className={styles.seeAll3}>смотреть все</div>
          </div>
        </div>
<div className={styles.frameParent11}>
<button
                  className={`${styles.materialSymbolssportsTennisParent} ${styles.customButton}`}
                  onClick={() => handleCategoryClick('Спорт')}
              >
  <img
    className={styles.materialSymbolssportsTennisIcon}
    loading="lazy"
    alt=""
    src="/public/glav/material-symbols_sports-tennis-outline-rounded.svg"
  />
  <div className={styles.div22}>Спорт</div>
</button>

<button
                  className={`${styles.materialSymbolssportsTennisParent} ${styles.customButton}`}
                  onClick={() => handleCategoryClick('Дети')}
              >
  <img
    className={styles.solaremojiFunnySquareOutliIcon}
    loading="lazy"
    alt=""
    src="/public/glav/solaremojifunnysquareoutline.svg"
  />
  <div className={styles.div22}>Дети</div>
</button>

<button
                  className={`${styles.materialSymbolssportsTennisParent} ${styles.customButton}`}
                  onClick={() => handleCategoryClick('Парки')}
              >
  <img
    className={styles.lucidetreePalmIcon}
    loading="lazy"
    alt=""
    src="/public/glav/lucidetreepalm.svg"
  />
  <div className={styles.div23}>Парки</div>
  
</button>
<button
                  className={`${styles.materialSymbolssportsTennisParent} ${styles.customButton}`}
                  onClick={() => handleCategoryClick('Туалеты')}
              >
  <img
    className={styles.lucidetreePalmIcon}
    loading="lazy"
    alt=""
    src="/public/glav/lucidetreepalm.svg"
  />
  <div className={styles.div24}>Туалеты</div>
  
</button>
</div>
<div className={styles.frameParent12}>
              {dataArray1.filter(item => item.category === activeCategory).map(item => (
                  <div className={styles.frameParent8} key={item.id}>
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
    </section>  );
};

export default Infost;