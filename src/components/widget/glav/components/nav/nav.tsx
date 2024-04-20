
import React, { useState } from 'react';
import styles from "./index.module.css";
import type { NextPage } from "next";

const Nav: NextPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

  
    // Обработчик изменений в поле ввода
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
    // Здесь можно реализовать функцию поиска, например, фильтрацию данных

  
    
  
  
    const data = [
      {
        greeting: "Привет!",
        firstName: "Сергей",
        lastName: "Мельников",
        imageSrc: "/public/frame-1000000873@2x.png"
      }
    ];
    const temperatureData = [
      { temperature: "21.7 °C" }
    ];
  
    return (
<section className={styles.mainInner}>
<div className={styles.frameParent}>
  <div className={styles.frameGroup}>
  <div className={styles.frameContainer}>
<img
  className={styles.frameChild}
  loading="lazy"
  alt=""
  src={data[0].imageSrc}
/>
<div className={styles.parent}>
  <div className={styles.div}>{data[0].greeting}</div>
  <div className={styles.div1}>
    <p className={styles.p}>{data[0].firstName}</p>
    <p className={styles.p1}>{data[0].lastName}</p>
  </div>
</div>
</div>

    <img
      className={styles.solarbellBingLinearIcon}
      loading="lazy"
      alt=""
      src="/public/solarbellbinglinear.svg"
    />
  </div>
  <div className={styles.frameDiv}>
    <div className={styles.frameWrapper}>
      <div className={styles.group}>
        <h2 className={styles.h2}>Куда отправимся?</h2>
        <div className={styles.solarcloudRainOutlineParent}>
          <img
            className={styles.solarcloudRainOutlineIcon}
            loading="lazy"
            alt=""
            src="/public/solarcloudrainoutline.svg"
          />
         <div className={styles.c}>{temperatureData[0].temperature}</div>
        </div>
      </div>
    </div>
    <div className={styles.search}>
<div className={styles.frameParent1}>
  <div className={styles.iconlylightOutlinesearchParent}>
    <img
      className={styles.iconlylightOutlinesearch}
      loading="lazy"
      alt=""
      src="/public/iconlylightoutlinesearch@2x.png"
    />
    <input
      className={styles.input}
      placeholder="Поиск"
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  </div>
  <img
    className={styles.lucidescanLineIcon}
    loading="lazy"
    alt=""
    src="/public/lucidescanline.svg"
  />
</div>
</div>
  </div>
</div>
</section>
  );
};

export default Nav;