import type { NextPage } from "next";
import styles from "./index.module.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const cardData = [
    {
      id: 1,
      title: "Концерт “Верь в себя”",
      location: "ул. Марксистов",
      image: "/public/korz/frame-1000003361@2x.png",
      pinIcon: "/public/korz/pin-icon.svg",
      ratingIcon: "/public/korz/rating-icon.svg",
      heartIcon: "/public/korz/heart.svg",
      rating: "4.8",
      price: "500"
    },
    {
      id: 2,
      title: "10 лет на сцене!",
      location: "ул. Красная",
      image: "/public/korz/frame-1000003361@2x.png",  // assuming the same image, change if different
      pinIcon: "/public/korz/pin-icon.svg",
      ratingIcon: "/public/korz/rating-icon-1.svg",
      heartIcon: "/public/korz/heart.svg",
      rating: "4.8",
      price: "1000"
    }
  ];
  export const Purchase1: NextPage = () => {
    const [checkState, setCheckState] = useState([false, false, false]); // Initial state of all checkboxes

    const handleMasterToggle = () => {
      const newCheckState = [...checkState];
      const masterState = !checkState[0]; // Toggle the state of the first checkbox
      newCheckState[0] = masterState;
      newCheckState[1] = masterState; // Set the following checkboxes to the same state as the first
      newCheckState[2] = masterState;
      setCheckState(newCheckState);
    };
  
    const handleToggle = (index) => {
      const newCheckState = [...checkState];
      newCheckState[index] = !newCheckState[index];
      setCheckState(newCheckState);
    };
    const navigate = useNavigate(); // for react-router-dom v6

  // Handler to navigate to /pocup
  const handleNavigateToPurchases = () => {
    navigate('/oplataitog');
  };
  return (
    <div className={styles.purchase4}>
      <section className={styles.container}>
        <div className={styles.mobileParent}>
       
          <div className={styles.secondaryButtonWrapper}>
            <div className={styles.secondaryButton}>
              <div className={styles.button}>
              <Link to="/infocard"><img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/public/korz/svg.svg"
                /></Link>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div}>Корзина</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pinIconContainer}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.checkboxParent}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={checkState[0]}
              onChange={handleMasterToggle}
            />
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={checkState[1]}
              onChange={() => handleToggle(1)}
            />
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={checkState[2]}
              onChange={() => handleToggle(2)}
            />
          </div>
          <div className={styles.streetLabel}>
            <div className={styles.checkboxesParent}>
              <div className={styles.checkboxes}>
                <div className={styles.div1}>Выбрать все</div>
              </div>
             
      
      {cardData.map((card) => (
        <div key={card.id} className={styles.frameContainer}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt={card.title}
            src={card.image}
          />
          <div className={styles.divider}>
            <div className={styles.addressField}>
              <div className={styles.placeName}>
                {card.title}
              </div>
              <div className={styles.streetMarker}>
                <div className={styles.pinContainer}>
                  <div className={styles.mapBackground}>
                    <div className={styles.currencySymbol}>
                      <img
                        className={styles.pinIcon}
                        loading="lazy"
                        alt=""
                        src={card.pinIcon}
                      />
                    </div>
                    <div className={styles.div2}>{card.location}</div>
                  </div>
                </div>
                <div className={styles.amountField}>
                  <div className={styles.ratingIconWrapper}>
                    <img
                      className={styles.ratingIcon}
                      loading="lazy"
                      alt=""
                      src={card.ratingIcon}
                    />
                  </div>
                  <div className={styles.trashBin}>{card.rating}</div>
                </div>
              </div>
            </div>
            <div className={styles.heartContainer}>
              <div className={styles.heartLabel}>
                <div className={styles.div3}>
                  <b>{`${card.price} `}</b>
                  <span className={styles.span}>₽</span>
                </div>
                <div className={styles.favouriteButton}>
                  <div className={styles.checkmarkIconParent}>
                    <div className={styles.checkmarkIcon}>
                      {/* Assuming same favorite icon used for simplicity */}
                      <img
                        className={styles.solartrashBinMinimalisticLIcon}
                        loading="lazy"
                        alt=""
                        src="/public/korz/solartrashbinminimalisticlineduotone.svg"
                      />
                    </div>
                    <div className={styles.favoriteIcon}>
                      <div className={styles.favoriteIconChild} />
                      <img
                        className={styles.heartIcon}
                        loading="lazy"
                        alt=""
                        src={card.heartIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div></div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.goToCart}>
        <div className={styles.totalCost}>
          <div className={styles.currencySymbol1}>
            <div className={styles.div7}>
              <b>1 500</b>
              <span> ₽</span>
            </div>
          </div>
          <button className={styles.totalCostInner} onClick={handleNavigateToPurchases}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frame}>
                <div className={styles.div8}>Перейти к оформлению</div>
              </div>
            </div>
          </button>
        </div> 
      </section>
    </div>
  );
};


