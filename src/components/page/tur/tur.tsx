import type { NextPage } from "next";
import styles from "./index.module.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Tour: NextPage = () => {
    const textArray = [
        "Санаторий Голубая волна расположен на берегу живописного моря, окруженного густыми сосновыми лесами. Это идеальное место для тех,",
        "кто хочет отдохнуть от городской суеты и насладиться чистым воздухом и теплым солнцем."
      ];
     const [fullTextShown, setFullTextShown] = useState(false);
    
    
     // Function to toggle text display
     const toggleTextDisplay = () => {
       setFullTextShown(!fullTextShown);
     };
    
  return (
    <div className={styles.tour}>
      <section className={styles.tourInner}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/public/tur/rectangle-990@2x.png"
            />
            <div className={styles.backParent}>
              <div className={styles.back}>
                <div className={styles.back1}>
                <Link to="/"> <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/public/tur/vector.svg"
                  /></Link>
                </div>
                <div className={styles.wrapper}>
                  <h3 className={styles.h3}>
                    <span>#</span>
                    <span className={styles.span}>Концерт</span>
                  </h3>
                </div>
              </div>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/public/tur/frame-1000003404.svg"
              />
            </div>
            <div className={styles.div}>
         
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <h1 className={styles.h1}>Голубая волна</h1>
              <div className={styles.container}>
                <div className={styles.div1}>
                  <span className={styles.span1}>{`от `}</span>
                  <span className={styles.span2}> 15 000</span>
                  <span className={styles.span3}>{` `}</span>
                  <span>₽</span>
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
            <img className={styles.downIcon} alt="" src={fullTextShown ? "/public/tur/down@2x.png" : "/public/tur/down@2x.png"} />
          </div>
        </div>
           
            </div>
          </div>
        </div>
      </section>
      <section className={styles.tourChild}>
        <div className={styles.frameDiv}>
          <h2 className={styles.h2}>{`Расписание `}</h2>
          <div className={styles.frameContainer}>
            <div className={styles.solarcalendarLineDuotoneParent}>
              <img
                className={styles.solarcalendarLineDuotoneIcon}
                alt=""
                src="/public/tur/solarcalendarlineduotone.svg"
              />
              <div className={styles.frame}>
                <div className={styles.div3}>12.06.2024 - 20.06.2024</div>
              </div>
            </div>
            <div className={styles.solarcalendarLineDuotoneGroup}>
              <img
                className={styles.solarcalendarLineDuotoneIcon1}
                alt=""
                src="/public/tur/solarcalendarlineduotone.svg"
              />
              <div className={styles.wrapper1}>
                <div className={styles.div4}>28.06.2024 - 04.07.2024</div>
              </div>
            </div>
            <div className={styles.solarcalendarLineDuotoneContainer}>
              <img
                className={styles.solarcalendarLineDuotoneIcon2}
                alt=""
                src="/public/tur/solarcalendarlineduotone.svg"
              />
              <div className={styles.wrapper2}>
                <div className={styles.div5}>28.07.2024 - 24.07.2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.parent1}>
          <h2 className={styles.h21}>Программа</h2>
          <div className={styles.parent2}>
            <h2 className={styles.h22}>1 день</h2>
            <div className={styles.placeParent}>
              <div className={styles.place}>
                <div className={styles.frameParent1}>
                  <div className={styles.divplandayactivityImageLraWrapper}>
                    <img
                      className={styles.divplandayactivityImageLraIcon}
                      loading="lazy"
                      alt=""
                      src="/public/tur/divplandayactivity-image--lraxo@2x.png"
                    />
                  </div>
                  <div className={styles.btn1}>
                    <div className={styles.frameParent2}>
                      <div
                        className={styles.divplandayactivityTopcaptionWrapper}
                      >
                        <div className={styles.divplandayactivityTopcaption}>
                          <div className={styles.div6}>5 мин • Парки</div>
                        </div>
                      </div>
                      <div className={styles.divplandayactivityTitleHnf}>
                        <h3
                          className={styles.h32}
                        >{`Столетний дуб в музее-заповеднике `}</h3>
                      </div>
                    </div>
                    <div className={styles.divplandayactivitySubtitle}>
                      <div className={styles.div7}>ул. Дольская, д. 1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.place1}>
                <div className={styles.dayActivityImageParent}>
                  <div className={styles.dayActivityImage}>
                    <img
                      className={styles.divplandayactivityImageLraIcon1}
                      loading="lazy"
                      alt=""
                      src="/public/tur/divplandayactivity-image--lraxo-1@2x.png"
                    />
                  </div>
                  <div className={styles.dayActivityTopCaption}>
                    <div className={styles.minutesInParks}>
                      <div className={styles.dayActivityTitle}>
                        <div className={styles.divplandayactivityTopcaption1}>
                          <div className={styles.div8}>5 мин • Парки</div>
                        </div>
                      </div>
                      <div className={styles.divplandayactivityTitleHnf1}>
                        <h3
                          className={styles.h33}
                        >{`Столетний дуб в музее-заповеднике `}</h3>
                      </div>
                    </div>
                    <div className={styles.divplandayactivitySubtitle1}>
                      <div className={styles.div9}>ул. Дольская, д. 1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.place2}>
                <div className={styles.anapaTourName}>
                  <div className={styles.scannerIcon}>
                    <img
                      className={styles.divplandayactivityImageLraIcon2}
                      loading="lazy"
                      alt=""
                      src="/public/tur/divplandayactivity-image--lraxo-2@2x.png"
                    />
                  </div>
                  <div className={styles.buyButton}>
                    <div className={styles.frameParent3}>
                      <div
                        className={styles.divplandayactivityTopcaptionContainer}
                      >
                        <div className={styles.divplandayactivityTopcaption2}>
                          <div className={styles.div10}>5 мин • Парки</div>
                        </div>
                      </div>
                      <div className={styles.divplandayactivityTitleHnf2}>
                        <h3
                          className={styles.h34}
                        >{`Столетний дуб в музее-заповеднике `}</h3>
                      </div>
                    </div>
                    <div className={styles.divplandayactivitySubtitle2}>
                      <div className={styles.div11}>ул. Дольская, д. 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.parent3}>
            <h2 className={styles.h23}>2 день</h2>
            <div className={styles.placeGroup}>
              <div className={styles.place3}>
                <div className={styles.frameParent4}>
                  <div className={styles.divplandayactivityImageLraContainer}>
                    <img
                      className={styles.divplandayactivityImageLraIcon3}
                      loading="lazy"
                      alt=""
                      src="/public/tur/divplandayactivity-image--lraxo-3@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.frameParent6}>
                      <div className={styles.divplandayactivityTopcaptionFrame}>
                        <div className={styles.divplandayactivityTopcaption3}>
                          <div className={styles.div12}>5 мин • Парки</div>
                        </div>
                      </div>
                      <div className={styles.divplandayactivityTitleHnf3}>
                        <h3
                          className={styles.h35}
                        >{`Столетний дуб в музее-заповеднике `}</h3>
                      </div>
                    </div>
                    <div className={styles.divplandayactivitySubtitle3}>
                      <div className={styles.div13}>ул. Дольская, д. 1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.place4}>
                <div className={styles.frameParent7}>
                  <div className={styles.divplandayactivityImageLraFrame}>
                    <img
                      className={styles.divplandayactivityImageLraIcon4}
                      loading="lazy"
                      alt=""
                      src="/public/tur/divplandayactivity-image--lraxo-4@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent8}>
                    <div className={styles.frameParent9}>
                      <div
                        className={styles.divplandayactivityTopcaptionWrapper1}
                      >
                        <div className={styles.divplandayactivityTopcaption4}>
                          <div className={styles.div14}>5 мин • Парки</div>
                        </div>
                      </div>
                      <div className={styles.divplandayactivityTitleHnf4}>
                        <h3
                          className={styles.h36}
                        >{`Столетний дуб в музее-заповеднике `}</h3>
                      </div>
                    </div>
                    <div className={styles.divplandayactivitySubtitle4}>
                      <div className={styles.div15}>ул. Дольская, д. 1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.place5}>
                <div className={styles.frameParent10}>
                  <div className={styles.divplandayactivityImageLraWrapper1}>
                    <img
                      className={styles.divplandayactivityImageLraIcon5}
                      loading="lazy"
                      alt=""
                      src="/public/tur/divplandayactivity-image--lraxo@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent11}>
                    <div className={styles.frameParent12}>
                      <div
                        className={styles.divplandayactivityTopcaptionWrapper2}
                      >
                        <div className={styles.divplandayactivityTopcaption5}>
                          <div className={styles.div16}>5 мин • Парки</div>
                        </div>
                      </div>
                      <div className={styles.divplandayactivityTitleHnf5}>
                        <h3
                          className={styles.h37}
                        >{`Столетний дуб в музее-заповеднике `}</h3>
                      </div>
                    </div>
                    <div className={styles.divplandayactivitySubtitle5}>
                      <div className={styles.div17}>ул. Дольская, д. 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frameParent13}>
        <div className={styles.parent4}>
          <h2 className={styles.h24}>Анапа Тур</h2>
          <div className={styles.frameParent14}>
            <div className={styles.solarmedalStarCircleBoldDParent}>
              <img
                className={styles.solarmedalStarCircleBoldDIcon}
                loading="lazy"
                alt=""
                src="/public/tur/solarmedalstarcircleboldduotone.svg"
              />
              <div className={styles.parent5}>
                <h2 className={styles.h25}>Приветственные баллы</h2>
                <div className={styles.div18}>
                  <b>200</b>
                  <span> баллов</span>
                </div>
              </div>
            </div>
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/public/tur/vector-1.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent15}>
          <div className={styles.btnParent}>
            <div className={styles.btn2}>
              <div className={styles.div19}>
                <b>10</b>
                <span className={styles.span4}>%</span>
              </div>
            </div>
            <h3 className={styles.h38}>Списание баллами</h3>
          </div>
          <div className={styles.frameParent16}>
            <div className={styles.wrapper3}>
              <div className={styles.div20}>
                <b>3</b>
                <span className={styles.span5}>%</span>
              </div>
            </div>
            <h3 className={styles.h39}>Кешбэк</h3>
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.solarscannerBoldDuotoneWrapper}>
              <img
                className={styles.solarscannerBoldDuotoneIcon}
                loading="lazy"
                alt=""
                src="/public/tur/solarscannerboldduotone.svg"
              />
            </div>
            <h3 className={styles.h310}>
              <p className={styles.p}>Код</p>
              <p className={styles.p1}>скидки</p>
            </h3>
          </div>
        </div>
        <button className={styles.btn3}>
          <div className={styles.div21}>Присоединиться</div>
        </button>
      </section>
    </div>
  );
};

