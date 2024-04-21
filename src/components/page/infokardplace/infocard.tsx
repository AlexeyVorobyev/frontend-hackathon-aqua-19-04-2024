import type { NextPage } from "next";
import styles from "./index.module.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
export const InfocardPlace: NextPage = () => {
  const textArray = [
    "Анапа - это настроящий турестический-IT бранд, не только Краснодраского края, но и ЮГА России",
    "Вместе с командой Avenir вы увидете Анапу на все 360 градусов..."
  ];
 const [fullTextShown, setFullTextShown] = useState(false);
 const navigate = useNavigate(); // for react-router-dom v6
 const MapComponent = () => {
  const position = [44.8908, 37.3239]; // координаты для центра карты

  return (
    <MapContainer center={position} zoom={13} style={{ height: '271px', width: '108%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Анапа <br /> -это маленький рай
        </Popup>
      </Marker>
    </MapContainer>
  );
};
  // Handler to navigate to /pocup
  const handleNavigateToPurchases = () => {
    navigate('/korz');
  };
 // Function to toggle text display
 const toggleTextDisplay = () => {
   setFullTextShown(!fullTextShown);
 };
  return (
    <div className={styles.cardParent}>
      <main className={styles.card}>
        <section className={styles.mobileParent}>
     
          <div className={styles.topPanel}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/public/glav/image-1@2x.png"
              />
              <div className={styles.locationName}>
                <div className={styles.octoberOnPlaces}>
                  <div className={styles.back}>
                  <Link to="/">  <img
                      className={styles.solarClockIcon}
                      loading="lazy"
                      alt=""
                      src="/public/infocard/vector.svg"
                    /></Link>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.div}>
                      <span>#</span>
                      <span className={styles.span}>Место</span>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.locationNameChild}
                  loading="lazy"
                  alt=""
                  src="/public/infocard/frame-1000003404.svg"
                />
              </div>
              <div className={styles.carouselWrapper}>
               
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
                        src="/public/infocard/solarcalendarlineduotone.svg"
                      />
                      <div className={styles.div2}>22.10.2024</div>
                    </div>
                  </div>
                  <div className={styles.eventInfo1}>
                    <div className={styles.solarclockCircleLineDuotonParent}>
                      <img
                        className={styles.solarclockCircleLineDuotonIcon}
                        alt=""
                        src="/public/infocard/solarclockcirclelineduotone.svg"
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
                    src="/public/infocard/rating-icon.svg"
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
            <img className={styles.downIcon} alt="" src={fullTextShown ? "/public/infocard/down@2x.png" : "/public/infocard/down@2x.png"} />
          </div>
        </div>
            <div className={styles.anapaUlMarxistsStreet}>
              <div className={styles.div6}>Местоположение:</div>
            </div>
            <div className={styles.screenCapture}>
              <div className={styles.appLogo}>
               <MapComponent />
              
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
                  src="/public/infocard/solarmedalstarcircleboldduotone.svg"
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
                src="/public/infocard/vector-1.svg"
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
                    src="/public/infocard/solarscannerboldduotone.svg"
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
                  src="/public/infocard/mingcutecoinfill@2x.png"
                />
                <div className={styles.solarAppointment}>
                 
                  <b className={styles.b1}>200</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.anapaLocation}>
            <button className={styles.cartButton} onClick={handleNavigateToPurchases}>
              <div className={styles.solarCalendar}>
                <img
                  className={styles.solarcartLarge3LineDuotonIcon}
                  alt=""
                  src="/public/infocard/solarcartlarge3lineduotone.svg"
                />
                <div className={styles.div16}>Добавить в корзину</div>
              </div>
            </button>
            <img
              className={styles.anapaLocationChild}
              loading="lazy"
              alt=""
              src="/public/infocard/frame-1000003371.svg"
            />
          </div>
        </section>
      </main>
    </div>
  );
};


