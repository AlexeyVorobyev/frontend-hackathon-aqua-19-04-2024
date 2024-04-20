import type { NextPage } from "next";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // стандартные стили
import './MyCalendar.css';
import styles from "./index.module.css";
import { useNavigate } from 'react-router-dom';
export const Hotel: NextPage = () => {
 
      const MyCalendar: React.FC = () => {
        const [value, onChange] = React.useState(new Date());
      
        return (
          <div style={{ height: '37vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Calendar
              onChange={onChange}
              value={value}
              tileClassName={({ date, view }) => (view === 'month' && date.getDay() === 0 ? 'sunday' : null)}
            />
          </div>
        );
      };
      const textArray = [
        "Санаторий Голубая волна расположен на берегу живописного моря, окруженного густыми сосновыми лесами. Это идеальное место для тех,",
        "кто хочет отдохнуть от городской суеты и насладиться чистым воздухом и теплым солнцем."
      ];
     const [fullTextShown, setFullTextShown] = useState(false);
    
     const navigate = useNavigate(); // for react-router-dom v6

     // Handler to navigate to /pocup
     const handleNavigateToPurchases = () => {
       navigate('/korz');
     };
     // Function to toggle text display
     const toggleTextDisplay = () => {
       setFullTextShown(!fullTextShown);
     };
    const [value, onChange] = React.useState(new Date());
      return (
    <div className={styles.hotel}>
      <section className={styles.logicBranch}>
        <div className={styles.inputProcessor}>
          <img
            className={styles.inputProcessorChild}
            alt=""
            src="/public/hotel/rectangle-990@2x.png"
          />
          <div className={styles.outputFilter}>
            <div className={styles.patternMatcher}>
              <div className={styles.back}>
              <Link to="/"><img
                  className={styles.nestedLoopIcon}
                  loading="lazy"
                  alt=""
                  src="/public/hotel/vector.svg"
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
              className={styles.outputFilterChild}
              loading="lazy"
              alt=""
              src="/public/hotel/frame-1000003404.svg"
            />
          </div>
          <div className={styles.carouselWrapper}>
            
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.parent}>
            <h1 className={styles.h1}>Голубая волна</h1>
            <div className={styles.starParent}>
              <img
                className={styles.starIcon}
                loading="lazy"
                alt=""
                src="/public/hotel/star.svg"
              />
              <div className={styles.reviewsWrapper}>
                <div className={styles.reviews}>4.5 (355 Reviews)</div>
              </div>
            </div>
          </div>
          <div className={styles.loopControlParent}>
            <div className={styles.loopControl}>
              <img
                className={styles.iconoirseaWaves}
                loading="lazy"
                alt=""
                src="/public/hotel/iconoirseawaves.svg"
              />
              <div className={styles.div1}>700 м до моря</div>
            </div>
            <div className={styles.div2}>
              <span className={styles.span1}>{`от `}</span>
              <span className={styles.span2}>2 000</span>
              <span className={styles.span3}>{` `}</span>
              <span>₽</span>
              <span className={styles.span4}>/</span>
              <span>ночь</span>
            </div>
          </div>
        </div>
        <div className={styles.group}>
       
          <div className={styles.locationMarker}>
          <div className={styles.div3}>
            {fullTextShown ? textArray.join(" ") : textArray[0]}
          </div>
          <div className={styles.readMoreButton} onClick={toggleTextDisplay}>
            <div className={styles.div4}>
              <div className={styles.readMore}>{fullTextShown ? "Скрыть" : "Читать больше"}</div>
            </div>
            <img className={styles.downIcon} alt="" src={fullTextShown ? "/public/infocard/down@2x.png" : "/public/infocard/down@2x.png"} />
          </div>
        </div>
   
        </div>
      </section>
      <section className={styles.hotelInner}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <b className={styles.b}>Обзор</b>
            <div className={styles.imageParent}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/public/hotel/image@2x.png"
              />
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src="/public/hotel/image-1@2x.png"
              />
              <img
                className={styles.imageIcon2}
                loading="lazy"
                alt=""
                src="/public/hotel/image-2@2x.png"
              />
              <img
                className={styles.imageIcon3}
                loading="lazy"
                alt=""
                src="/public/hotel/image-3@2x.png"
              />
            </div>
          </div>
          <div className={styles.parent1}>
            <b className={styles.b1}>Удобства</b>
            <div className={styles.amenties}>
              <button className={styles.wifiParent}>
                <img className={styles.wifiIcon} alt="" src="/public/hotel/wifi.svg" />
                <div className={styles.heater}>1 Heater</div>
              </button>
              <div className={styles.foodParent}>
                <img
                  className={styles.foodIcon}
                  loading="lazy"
                  alt=""
                  src="/public/hotel/food.svg"
                />
                <div className={styles.dinner}>Dinner</div>
              </div>
              <div className={styles.bathTubParent}>
                <img
                  className={styles.bathTubIcon}
                  loading="lazy"
                  alt=""
                  src="/public/hotel/bath-tub.svg"
                />
                <div className={styles.tub}>1 Tub</div>
              </div>
              <div className={styles.frameParent1}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/public/hotel/frame.svg"
                />
                <div className={styles.pool}>Pool</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.hotelChild}>
        <div className={styles.downParent}>
        
          <div className={styles.frameParent2}>
            <div className={styles.parent2}>
              <b className={styles.b2}>Прайс лист услуг</b>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.dataAggregatorParent}>
                <div className={styles.dataAggregator}>
                  <div className={styles.div6}>Массаж</div>
                </div>
                <div className={styles.div7}>
                  <b>{`3 000 `}</b>
                  <span className={styles.span5}>
                    <span>₽</span>
                    <span className={styles.span6}>/</span>
                  </span>
                  <span className={styles.span7}>ночь</span>
                </div>
              </div>
              <div className={styles.frameChild} />
              <div className={styles.frameParent4}>
                <div className={styles.frame}>
                  <div className={styles.div8}>Массаж</div>
                </div>
                <div className={styles.div9}>
                  <b>{`3 000 `}</b>
                  <span className={styles.span8}>
                    <span>₽</span>
                    <span className={styles.span9}>/</span>
                  </span>
                  <span className={styles.span10}>ночь</span>
                </div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.frameParent5}>
                <div className={styles.wrapper1}>
                  <div className={styles.div10}>Массаж</div>
                </div>
                <div className={styles.div11}>
                  <b>{`3 000 `}</b>
                  <span className={styles.span11}>
                    <span>₽</span>
                    <span className={styles.span12}>/</span>
                  </span>
                  <span className={styles.span13}>ночь</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.outputFilter1}>
        <div className={styles.parent3}>
          <b className={styles.b3}>Выберите даты</b>
        
      <div>
      <div style={{ height: '37vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MyCalendar/>
    </div>

    </div>
    

        </div>
      </section>
      <section className={styles.regulator}>
        <div className={styles.accumulator}>
          <div className={styles.collectorWrapper}>
            <img
              className={styles.collectorIcon}
              loading="lazy"
              alt=""
              src="/public/hotel/frame-1000003361@2x.png"
            />
          </div>
          <div className={styles.consumer}>
            <div className={styles.producer}>
              <div className={styles.dataProcessor}>
                <div className={styles.placeName}>2-x местный стандарт</div>
                <div className={styles.favoriteIcon}>
                  <div className={styles.favoriteIconChild} />
                  <img
                    className={styles.heartIcon}
                    loading="lazy"
                    alt=""
                    src="/public/hotel/heart.svg"
                  />
                </div>
              </div>
              <div className={styles.errorHandler1}>
                <div className={styles.sequenceController}>
                  <div className={styles.dataCollector}>
                    <img
                      className={styles.pinIcon}
                      loading="lazy"
                      alt=""
                      src="/public/hotel/pin-icon.svg"
                    />
                  </div>
                  <div className={styles.div12}>ул. Красная</div>
                </div>
                <div className={styles.iterationManager}>
                  <div className={styles.databaseConnection}>
                    <img
                      className={styles.ratingIcon}
                      loading="lazy"
                      alt=""
                      src="/public/hotel/rating-icon.svg"
                    />
                  </div>
                  <div className={styles.outputGenerator}>4.8</div>
                </div>
              </div>
            </div>
            <div className={styles.decisionMaker}>
              <div className={styles.div13}>
                <b>{`3 000 `}</b>
                <span className={styles.span14}>
                  <span>₽</span>
                  <span className={styles.span15}>/</span>
                </span>
                <span className={styles.span16}>ночь</span>
              </div>
              <button className={styles.filteringUnit} onClick={handleNavigateToPurchases}>
                <div className={styles.solarcartLarge3LineDuotonParent}>
                  <img
                    className={styles.solarcartLarge3LineDuotonIcon}
                    alt=""
                    src="/public/hotel/solarcartlarge3lineduotone.svg"
                  />
                  <div className={styles.div14}>Добавить</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.accumulator1}>
          <div className={styles.accumulatorInner}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/public/hotel/frame-1000003361@2x.png"
            />
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.frameParent7}>
              <div className={styles.placeNameParent}>
                <div className={styles.placeName1}>2-x местный стандарт</div>
                <div className={styles.favoriteIcon1}>
                  <div className={styles.favoriteIconItem} />
                  <img
                    className={styles.heartIcon1}
                    loading="lazy"
                    alt=""
                    src="/public/hotel/heart.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent9}>
                  <div className={styles.pinIconWrapper}>
                    <img
                      className={styles.pinIcon1}
                      loading="lazy"
                      alt=""
                      src="/public/hotel/pin-icon.svg"
                    />
                  </div>
                  <div className={styles.div15}>ул. Красная</div>
                </div>
                <div className={styles.frameParent10}>
                  <div className={styles.ratingIconWrapper}>
                    <img
                      className={styles.ratingIcon1}
                      loading="lazy"
                      alt=""
                      src="/public/hotel/rating-icon.svg"
                    />
                  </div>
                  <div className={styles.div16}>4.8</div>
                </div>
              </div>
            </div>
            <div className={styles.parent4}>
              <div className={styles.div17}>
                <b>{`3 000 `}</b>
                <span className={styles.span17}>
                  <span>₽</span>
                  <span className={styles.span18}>/</span>
                </span>
                <span className={styles.span19}>ночь</span>
              </div>
              <button className={styles.frameWrapper} onClick={handleNavigateToPurchases}>
                <div className={styles.solarcartLarge3LineDuotonGroup}>
                  <img
                    className={styles.solarcartLarge3LineDuotonIcon1}
                    alt=""
                    src="/public/hotel/solarcartlarge3lineduotone.svg"
                  />
                  <div className={styles.div18}>Добавить</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.valueComparer}>
        <div className={styles.errorForwarder}>
          <div className={styles.dataConverter}>
            <b className={styles.b4}>Голубая волна</b>
            <img
              className={styles.solarcityBrokenIcon}
              loading="lazy"
              alt=""
              src="/public/hotel/solarcitybroken.svg"
            />
          </div>
          <div className={styles.outputProcessor}>
            <div className={styles.dataSaver}>
              <img
                className={styles.solarmedalStarCircleBoldDIcon}
                loading="lazy"
                alt=""
                src="/public/hotel/solarmedalstarcircleboldduotone.svg"
              />
              <div className={styles.inputFilter}>
                <div className={styles.div19}>Приветственные баллы</div>
                <div className={styles.div20}>
                  <b>300</b>
                  <span> баллов</span>
                </div>
              </div>
            </div>
            <img
              className={styles.dataMergerIcon}
              loading="lazy"
              alt=""
              src="/public/hotel/vector-1.svg"
            />
          </div>
        </div>
        <div className={styles.valueSplitter}>
          <div className={styles.dataTransformer}>
            <div className={styles.conditionHandler}>
              <div className={styles.inputValidator}>
                <b>10</b>
                <span className={styles.span20}>%</span>
              </div>
            </div>
            <div className={styles.div21}>Списание баллами</div>
          </div>
          <div className={styles.dataTransformer1}>
            <div className={styles.wrapper2}>
              <div className={styles.div22}>
                <b>3</b>
                <span className={styles.span21}>%</span>
              </div>
            </div>
            <div className={styles.div23}>Кешбэк</div>
          </div>
          <div className={styles.dataTransformer2}>
            <div className={styles.solarscannerBoldDuotoneWrapper}>
              <img
                className={styles.solarscannerBoldDuotoneIcon}
                loading="lazy"
                alt=""
                src="/public/hotel/solarscannerboldduotone.svg"
              />
            </div>
            <div className={styles.div24}>
              <p className={styles.p}>Код</p>
              <p className={styles.p1}>скидки</p>
            </div>
          </div>
        </div>
        <button className={styles.btn}>
          <div className={styles.div25}>Присоединиться</div>
        </button>
      </section>
    </div>
  );
};
