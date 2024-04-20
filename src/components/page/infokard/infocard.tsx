import type { NextPage } from "next";
import styles from "./index.module.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Infocard: NextPage = () => {
  const textArray = [
    "Милана с первого выхода своего музыкального клипа сразу попала в сердца юных поклонников. ⁣⁣С тех пор ее музыкальная карьера пошла на взлет!",
    "Продолжение истории Миланы и детали о ее творческом пути и личной жизни..."
  ];
 const [fullTextShown, setFullTextShown] = useState(false);

 // Function to toggle text display
 const toggleTextDisplay = () => {
   setFullTextShown(!fullTextShown);
 };
  return (
    <div className={styles.cardParent}>
      <main className={styles.card}>
        <section className={styles.mobileParent}>
          <header className={styles.mobile}>
            <div className={styles.statusBarmini}>
              <div className={styles.time}>9:41</div>
              <div className={styles.record}>
                <div className={styles.time1}>12:48</div>
              </div>
              <div className={styles.statusminiWrapper}>
                <div className={styles.statusmini}>
                  <img
                    className={styles.cellularIcon}
                    loading="lazy"
                    alt=""
                    src="/public/cellular.svg"
                  />
                  <img
                    className={styles.wifiIcon}
                    loading="lazy"
                    alt=""
                    src="/public/wifi.svg"
                  />
                  <img
                    className={styles.batteryminiIcon}
                    loading="lazy"
                    alt=""
                    src="/public/batterymini.svg"
                  />
                </div>
              </div>
              <div className={styles.cameraIndicator} />
            </div>
          </header>
          <div className={styles.topPanel}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/public/rectangle-990@2x.png"
              />
              <div className={styles.locationName}>
                <div className={styles.octoberOnPlaces}>
                  <div className={styles.back}>
                  <Link to="/">  <img
                      className={styles.solarClockIcon}
                      loading="lazy"
                      alt=""
                      src="/public/vector.svg"
                    /></Link>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.div}>
                      <span>#</span>
                      <span className={styles.span}>Концерт</span>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.locationNameChild}
                  loading="lazy"
                  alt=""
                  src="/public/frame-1000003404.svg"
                />
              </div>
              <div className={styles.carouselWrapper}>
                <img
                  className={styles.carouselIcon}
                  loading="lazy"
                  alt=""
                  src="/public/carousel.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mainVisual}>
          <div className={styles.placeNameLabel}>
            <div className={styles.venueTitle}>
              <div className={styles.backdropParent}>
                <div className={styles.backdrop}>
                  <b className={styles.placeName}>
                    10 лет на сцене!: Milana Star
                  </b>
                  <div className={styles.div1}>Октябрь, На 4 площадках</div>
                </div>
                <div className={styles.eventInfoParent}>
                  <div className={styles.eventInfo}>
                    <div className={styles.solarcalendarLineDuotoneParent}>
                      <img
                        className={styles.solarcalendarLineDuotoneIcon}
                        alt=""
                        src="/public/solarcalendarlineduotone.svg"
                      />
                      <div className={styles.div2}>22.10.2024</div>
                    </div>
                  </div>
                  <div className={styles.eventInfo1}>
                    <div className={styles.solarclockCircleLineDuotonParent}>
                      <img
                        className={styles.solarclockCircleLineDuotonIcon}
                        alt=""
                        src="/public/solarclockcirclelineduotone.svg"
                      />
                      <div className={styles.div3}>11:00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rubleSymbolParent}>
                <div className={styles.rubleSymbol}>
                  <img
                    className={styles.ratingIcon}
                    loading="lazy"
                    alt=""
                    src="/public/rating-icon.svg"
                  />
                </div>
                <div className={styles.div4}>4.8</div>
              </div>
            </div>
            <div className={styles.locationMarker}>
          <div className={styles.div5}>
            {fullTextShown ? textArray.join(" ") : textArray[0]}
          </div>
          <div className={styles.readMoreButton} onClick={toggleTextDisplay}>
            <div className={styles.readMoreWrapper}>
              <div className={styles.readMore}>{fullTextShown ? "Скрыть" : "Читать больше"}</div>
            </div>
            <img className={styles.downIcon} alt="" src={fullTextShown ? "/public/down@2x.png" : "/public/down@2x.png"} />
          </div>
        </div>
            <div className={styles.anapaUlMarxistsStreet}>
              <div className={styles.div6}>Местоположение:</div>
            </div>
            <div className={styles.screenCapture}>
              <div className={styles.appLogo}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/public/--20240419--1309-1@2x.png"
                />
                <img
                  className={styles.solarmapPointBoldIcon}
                  loading="lazy"
                  alt=""
                  src="/public/solarmappointbold.svg"
                />
              </div>
            </div>
            <div className={styles.div7}>Анапа, ул. Марксистов, 45</div>
          </div>
        </section>
        <section className={styles.anapaArena}>
          <div className={styles.locationMarker1}>
            <b className={styles.b}>Анапа Арена</b>
            <div className={styles.solarMedal}>
              <div className={styles.discountCoin}>
                <img
                  className={styles.solarmedalStarCircleBoldDIcon}
                  loading="lazy"
                  alt=""
                  src="/public/solarmedalstarcircleboldduotone.svg"
                />
                <div className={styles.joinButton}>
                  <div className={styles.div8}>Приветственные баллы</div>
                  <div className={styles.div9}>
                    <b>500</b>
                    <span> баллов</span>
                  </div>
                </div>
              </div>
              <img
                className={styles.anapaScreenshotIcon}
                alt=""
                src="/public/vector-1.svg"
              />
            </div>
            <div className={styles.discountPercentage}>
              <div className={styles.buttonInstance}>
                <div className={styles.solarscanner}>
                  <div className={styles.cashbackSymbol}>
                    <b>10</b>
                    <span className={styles.span1}>%</span>
                  </div>
                </div>
                <div className={styles.div10}>Списание баллами</div>
              </div>
              <div className={styles.buttonInstance1}>
                <div className={styles.container}>
                  <div className={styles.div11}>
                    <b>3</b>
                    <span className={styles.span2}>%</span>
                  </div>
                </div>
                <div className={styles.div12}>Кешбэк</div>
              </div>
              <div className={styles.buttonInstance2}>
                <div className={styles.solarscannerBoldDuotoneWrapper}>
                  <img
                    className={styles.solarscannerBoldDuotoneIcon}
                    loading="lazy"
                    alt=""
                    src="/public/solarscannerboldduotone.svg"
                  />
                </div>
                <div className={styles.div13}>
                  <p className={styles.p}>Код</p>
                  <p className={styles.p1}>скидки</p>
                </div>
              </div>
            </div>
            <button className={styles.btn}>
              <div className={styles.div14}>Присоединиться</div>
            </button>
          </div>
        </section>
        <section className={styles.addToWishlist}>
          <div className={styles.headerBackground}>
            <div className={styles.div15}>
              <b>1 000</b>
              <span> ₽</span>
            </div>
            <div className={styles.headerBackgroundInner}>
              <div className={styles.mingcutecoinFillParent}>
                <img
                  className={styles.mingcutecoinFillIcon}
                  loading="lazy"
                  alt=""
                  src="/public/mingcutecoinfill@2x.png"
                />
                <div className={styles.solarAppointment}>
                  <span className={styles.span3}>+</span>
                  <b className={styles.b1}>200</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.anapaLocation}>
            <button className={styles.cartButton}>
              <div className={styles.solarCalendar}>
                <img
                  className={styles.solarcartLarge3LineDuotonIcon}
                  alt=""
                  src="/public/solarcartlarge3lineduotone.svg"
                />
                <div className={styles.div16}>Добавить в корзину</div>
              </div>
            </button>
            <img
              className={styles.anapaLocationChild}
              loading="lazy"
              alt=""
              src="/public/frame-1000003371.svg"
            />
          </div>
        </section>
      </main>
    </div>
  );
};


