import type { NextPage } from "next";
import React, { useState } from 'react';
import styles from "./index.module.css";
import { Link } from 'react-router-dom';

export const Purchase: NextPage = () => {
    const [activeTab, setActiveTab] = useState('history'); // default to 'history'

    const getTabClass = (tabName) => {
        return activeTab === tabName ? `${styles.container} ${styles.activeTab}` : styles.container;
    };
    
    // Separate card data by tab
    const tabCardData = {
        history: [
            {
                id: 1,
                title: "Концерт “Верь в себя”",
                location: "ул. Марксистов",
                image: "/public/pocup/frame-1000003361@2x.png",
                pinIcon: "/public/pocup/pin-icon.svg",
                ratingIcon: "/public/pocup/rating-icon.svg",
                heartIcon: "/public/pocup/heart.svg",
                rating: "4.8",
                price: "500",
                date: "22:06 22.05.2023"
            },
            // More history cards
        ],
        current: [
            {
                id: 2,
                title: "Событие “Живи сейчас”",
                location: "парк Культуры",
                image: "/public/pocup/frame-1000003361@2x.png",
                pinIcon: "/public/pocup/pin-icon.svg",
                ratingIcon: "/public/pocup/rating-icon.svg",
                heartIcon: "/public/pocup/heart.svg",
                rating: "4.9",
                price: "600",
                date: "15:00 15.06.2023"
            },
            {
                id: 4,
                title: "Мастер-класс “Создай своё”",
                location: "студия на Невском",
                image: "/public/pocup/frame-1000003361@2x.png",
                pinIcon: "/public/pocup/pin-icon.svg",
                ratingIcon: "/public/pocup/rating-icon.svg",
                heartIcon: "/public/pocup/heart.svg",
                rating: "5.0",
                price: "800",
                date: "10:00 01.07.2023"
            },
            // More current cards
        ],
        cart: [
            {
                id: 3,
                title: "Мастер-класс “Создай своё”",
                location: "студия на Невском",
                image: "/public/pocup/frame-1000003361@2x.png",
                pinIcon: "/public/pocup/pin-icon.svg",
                ratingIcon: "/public/pocup/rating-icon.svg",
                heartIcon: "/public/pocup/heart.svg",
                rating: "5.0",
                price: "800",
                date: "10:00 01.07.2023"
            },
            // More cart cards
        ]
    };

    return (
        <div className={styles.purchase1}>
            <header className={styles.mobile}>
                {/* Header content omitted for brevity */}
            </header>
            <div className={styles.purchase1Inner}>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
          <Link to="/lk"> <img
              className={styles.svgIcon}
              loading="lazy"
              alt=""
              src="/public/pocup/svg.svg"
            /> </Link>
          </div>
          <div className={styles.wrapper}>
            <h2 className={styles.h2}>Мои покупки</h2>
          </div>
        
      </div>            </div>
            <section className={styles.purchase1Child}>
                <div className={styles.frameParent}>
                    <div className={styles.frameWrapper}>
                        <div className={styles.frameGroup}>
                            <button className={getTabClass('history')} onClick={() => setActiveTab('history')}>
                                <div className={styles.div}>История</div>
                            </button>
                            <button className={getTabClass('current')} onClick={() => setActiveTab('current')}>
                                <div className={styles.div}>Актуальные</div>
                            </button>
                            <button className={getTabClass('cart')} onClick={() => setActiveTab('cart')}>
                                <div className={styles.div}>Корзина</div>
                            </button>
                        </div>
                    </div>
                    {/* Displaying cards based on active tab */}
                    <div className={styles.frameParent1}>
                    {tabCardData[activeTab].map((card) => (
    <div className={styles.frameParent2} key={card.id}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt={card.title}
        src={card.image}
      />
      <div className={styles.frameParent3}>
        <div className={styles.frameParent4}>
          <div className={styles.frameWrapper2}>
            <div className={styles.placeNameParent}>
              <div className={styles.placeName}>
                {card.title}
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.pinIconWrapper}>
                  <img
                    className={styles.pinIcon}
                    loading="lazy"
                    alt="Location pin"
                    src={card.pinIcon}
                  />
                </div>
                <div className={styles.wrapper2}>
                  <div className={styles.div4}>{card.location}</div>
                </div>
                <div className={styles.ratingIconWrapper}>
                  <img
                    className={styles.ratingIcon}
                    loading="lazy"
                    alt="Rating"
                    src={card.ratingIcon}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.favoriteIconWrapper}>
              <div className={styles.favoriteIcon}>
                <div className={styles.favoriteIconChild} />
                <img
                  className={styles.heartIcon}
                  loading="lazy"
                  alt="Heart icon"
                  src={card.heartIcon}
                />
              </div>
            </div>
            <div className={styles.div5}>{card.rating}</div>
          </div>
        </div>
        <div className={styles.learnTheArtOfGameDev}>
          <div className={styles.div6}>
            <b>{`${card.price} `}</b>
            <span className={styles.span}>₽</span>
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.button1}>{card.date}</div>
          </div>
        </div>
      </div>
    </div>
  ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
