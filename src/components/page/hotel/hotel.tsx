import type { NextPage } from "next";
import styles from "./index.module.css";

export const Hotel: NextPage = () => {
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
                <img
                  className={styles.nestedLoopIcon}
                  loading="lazy"
                  alt=""
                  src="/public/hotel/vector.svg"
                />
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
            <img
              className={styles.carouselIcon}
              loading="lazy"
              alt=""
              src="/public/hotel/carousel.svg"
            />
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
          <div className={styles.div3}>
            Санаторий "Голубая волна" расположен на берегу живописного моря,
            окруженного густыми сосновыми лесами. Это идеальное место для тех,
            кто хочет отдохнуть от городской суеты и насладиться чистым воздухом
            и теплым солнцем.
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.container}>
              <div className={styles.div4}>Развернуть</div>
            </div>
            <img className={styles.downIcon} alt="" src="/public/hotel/down@2x.png" />
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
          <img
            className={styles.downIcon1}
            loading="lazy"
            alt=""
            src="/public/hotel/down@2x.png"
          />
          <div className={styles.frameParent2}>
            <div className={styles.parent2}>
              <b className={styles.b2}>Прайс лист услуг</b>
              <div className={styles.div5}>Развернуть</div>
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
          <div className={styles.calendarMonthVariants}>
            <div className={styles.spacer4}>
              <div className={styles.spacer04} />
            </div>
            <div className={styles.calendarpartsmonthYear}>
              <img
                className={styles.calendarNavIcon}
                loading="lazy"
                alt=""
                src="/public/hotel/calendar-nav.svg"
              />
              <div className={styles.conditionalOperator}>
                <div className={styles.monthYear}>
                  <b className={styles.month2038}>Июль 2024</b>
                </div>
              </div>
              <img
                className={styles.calendarNavIcon1}
                loading="lazy"
                alt=""
                src="/public/hotel/calendar-nav-1.svg"
              />
            </div>
            <div className={styles.spacer16}>
              <div className={styles.spacer161} />
            </div>
            <div className={styles.spacer8}>
              <div className={styles.spacer81} />
            </div>
            <div className={styles.variableContainer}>
              <div className={styles.calendarpartsdayOfWeek}>
                <div className={styles.dayOfWeek}>
                  <div className={styles.s}>S</div>
                  <div className={styles.m}>M</div>
                  <div className={styles.t}>T</div>
                  <div className={styles.w}>W</div>
                  <div className={styles.t1}>T</div>
                  <div className={styles.f}>F</div>
                  <div className={styles.s1}>S</div>
                </div>
                <div className={styles.divider}>
                  <div className={styles.divider1} />
                </div>
              </div>
              <div className={styles.calendarweeks}>
                <div className={styles.calendarweekWeek131}>
                  <div className={styles.day01Variants}>
                    <div className={styles.indicator} />
                    <div className={styles.date}>26</div>
                  </div>
                  <div className={styles.errorHandler}>
                    <div className={styles.day02Variants}>
                      <div className={styles.indicator1} />
                      <div className={styles.date1}>27</div>
                    </div>
                    <div className={styles.day03Variants}>
                      <div className={styles.indicator2} />
                      <div className={styles.date2}>28</div>
                    </div>
                    <div className={styles.day04Variants}>
                      <div className={styles.indicator3} />
                      <div className={styles.date3}>29</div>
                    </div>
                  </div>
                  <div className={styles.merger}>
                    <div className={styles.day05Variants}>
                      <div className={styles.indicator4} />
                      <div className={styles.date4}>30</div>
                    </div>
                    <div className={styles.day06Variants}>
                      <div className={styles.indicator5} />
                      <div className={styles.date5}>31</div>
                    </div>
                  </div>
                  <div className={styles.day07Variants}>
                    <div className={styles.tester}>
                      <div className={styles.indicator6} />
                      <div className={styles.date6}>1</div>
                    </div>
                  </div>
                  <div className={styles.day08Variants}>
                    <div className={styles.indicator7} />
                    <div className={styles.date7}>2</div>
                  </div>
                  <div className={styles.day09Variants}>
                    <div className={styles.indicator8} />
                    <div className={styles.date8}>3</div>
                  </div>
                  <div className={styles.day10Variants}>
                    <div className={styles.indicator9} />
                    <div className={styles.date9}>4</div>
                  </div>
                  <div className={styles.day11Variants}>
                    <div className={styles.indicator10} />
                    <div className={styles.date10}>5</div>
                  </div>
                  <div className={styles.day12Variants}>
                    <div className={styles.indicator11} />
                    <div className={styles.date11}>6</div>
                  </div>
                  <div className={styles.day13Variants}>
                    <div className={styles.indicator12} />
                    <div className={styles.date12}>7</div>
                  </div>
                </div>
                <div className={styles.calendarweekweek130}>
                  <div className={styles.day01Variants1}>
                    <div className={styles.indicator13} />
                    <div className={styles.date13}>25</div>
                  </div>
                  <div className={styles.day02Variants1}>
                    <div className={styles.indicator14} />
                    <div className={styles.date14}>26</div>
                  </div>
                  <div className={styles.day03Variants1}>
                    <div className={styles.indicator15} />
                    <div className={styles.date15}>27</div>
                  </div>
                  <div className={styles.day04Variants1}>
                    <div className={styles.indicator16} />
                    <div className={styles.date16}>28</div>
                  </div>
                  <div className={styles.day05Variants1}>
                    <div className={styles.indicator17} />
                    <div className={styles.date17}>29</div>
                  </div>
                  <div className={styles.day06Variants1}>
                    <div className={styles.indicator18} />
                    <div className={styles.date18}>30</div>
                  </div>
                  <div className={styles.day07Variants1}>
                    <div className={styles.indicator19} />
                    <div className={styles.date19}>1</div>
                  </div>
                  <div className={styles.day08Variants1}>
                    <div className={styles.indicator20} />
                    <div className={styles.date20}>2</div>
                  </div>
                  <div className={styles.day09Variants1}>
                    <div className={styles.indicator21} />
                    <div className={styles.date21}>3</div>
                  </div>
                  <div className={styles.day10Variants1}>
                    <div className={styles.indicator22} />
                    <div className={styles.date22}>4</div>
                  </div>
                  <div className={styles.day11Variants1}>
                    <div className={styles.indicator23} />
                    <div className={styles.date23}>5</div>
                  </div>
                  <div className={styles.day12Variants1}>
                    <div className={styles.indicator24} />
                    <div className={styles.date24}>6</div>
                  </div>
                  <div className={styles.day13Variants1}>
                    <div className={styles.indicator25} />
                    <div className={styles.date25}>7</div>
                  </div>
                </div>
                <div className={styles.calendarweekweek129Feb}>
                  <div className={styles.day01Variants2}>
                    <div className={styles.indicator26} />
                    <div className={styles.date26}>24</div>
                  </div>
                  <div className={styles.day02Variants2}>
                    <div className={styles.indicator27} />
                    <div className={styles.date27}>25</div>
                  </div>
                  <div className={styles.day03Variants2}>
                    <div className={styles.indicator28} />
                    <div className={styles.date28}>26</div>
                  </div>
                  <div className={styles.day04Variants2}>
                    <div className={styles.indicator29} />
                    <div className={styles.date29}>27</div>
                  </div>
                  <div className={styles.day05Variants2}>
                    <div className={styles.indicator30} />
                    <div className={styles.date30}>28</div>
                  </div>
                  <div className={styles.day06Variants2}>
                    <div className={styles.indicator31} />
                    <div className={styles.date31}>29</div>
                  </div>
                  <div className={styles.day07Variants2}>
                    <div className={styles.indicator32} />
                    <div className={styles.date32}>1</div>
                  </div>
                  <div className={styles.day08Variants2}>
                    <div className={styles.indicator33} />
                    <div className={styles.date33}>2</div>
                  </div>
                  <div className={styles.day09Variants2}>
                    <div className={styles.indicator34} />
                    <div className={styles.date34}>3</div>
                  </div>
                  <div className={styles.day10Variants2}>
                    <div className={styles.indicator35} />
                    <div className={styles.date35}>4</div>
                  </div>
                  <div className={styles.day11Variants2}>
                    <div className={styles.indicator36} />
                    <div className={styles.date36}>5</div>
                  </div>
                  <div className={styles.day12Variants2}>
                    <div className={styles.indicator37} />
                    <div className={styles.date37}>6</div>
                  </div>
                  <div className={styles.day13Variants2}>
                    <div className={styles.indicator38} />
                    <div className={styles.date38}>7</div>
                  </div>
                </div>
                <div className={styles.calendarweekweek128Feb}>
                  <div className={styles.day01Variants3}>
                    <div className={styles.indicator39} />
                    <div className={styles.date39}>23</div>
                  </div>
                  <div className={styles.day02Variants3}>
                    <div className={styles.indicator40} />
                    <div className={styles.date40}>24</div>
                  </div>
                  <div className={styles.day03Variants3}>
                    <div className={styles.indicator41} />
                    <div className={styles.date41}>25</div>
                  </div>
                  <div className={styles.day04Variants3}>
                    <div className={styles.indicator42} />
                    <div className={styles.date42}>26</div>
                  </div>
                  <div className={styles.day05Variants3}>
                    <div className={styles.indicator43} />
                    <div className={styles.date43}>27</div>
                  </div>
                  <div className={styles.day06Variants3}>
                    <div className={styles.indicator44} />
                    <div className={styles.date44}>28</div>
                  </div>
                  <div className={styles.day07Variants3}>
                    <div className={styles.indicator45} />
                    <div className={styles.date45}>1</div>
                  </div>
                  <div className={styles.day08Variants3}>
                    <div className={styles.indicator46} />
                    <div className={styles.date46}>2</div>
                  </div>
                  <div className={styles.day09Variants3}>
                    <div className={styles.indicator47} />
                    <div className={styles.date47}>3</div>
                  </div>
                  <div className={styles.day10Variants3}>
                    <div className={styles.indicator48} />
                    <div className={styles.date48}>4</div>
                  </div>
                  <div className={styles.day11Variants3}>
                    <div className={styles.indicator49} />
                    <div className={styles.date49}>5</div>
                  </div>
                  <div className={styles.day12Variants3}>
                    <div className={styles.indicator50} />
                    <div className={styles.date50}>6</div>
                  </div>
                  <div className={styles.day13Variants3}>
                    <div className={styles.indicator51} />
                    <div className={styles.date51}>7</div>
                  </div>
                </div>
                <div className={styles.calendarweekWeek2}>
                  <div className={styles.day01Variants4}>
                    <div className={styles.indicator52} />
                    <div className={styles.date52}>2</div>
                  </div>
                  <div className={styles.day02VariantsParent}>
                    <div className={styles.day02Variants4}>
                      <div className={styles.indicator53} />
                      <div className={styles.date53}>3</div>
                    </div>
                    <div className={styles.day03Variants4}>
                      <div className={styles.indicator54} />
                      <div className={styles.date54}>4</div>
                    </div>
                    <div className={styles.day04Variants4}>
                      <div className={styles.indicator55} />
                      <div className={styles.date55}>5</div>
                    </div>
                  </div>
                  <div className={styles.day05VariantsParent}>
                    <div className={styles.day05Variants4}>
                      <div className={styles.indicator56} />
                      <div className={styles.date56}>6</div>
                    </div>
                    <div className={styles.day06Variants4}>
                      <div className={styles.indicator57} />
                      <div className={styles.date57}>7</div>
                    </div>
                  </div>
                  <div className={styles.day07Variants4}>
                    <div className={styles.indicatorParent}>
                      <div className={styles.indicator58} />
                      <div className={styles.date58}>8</div>
                    </div>
                  </div>
                  <div className={styles.day08Variants4}>
                    <div className={styles.indicator59} />
                    <div className={styles.date59}>9</div>
                  </div>
                  <div className={styles.day09Variants4}>
                    <div className={styles.indicator60} />
                    <div className={styles.date60}>10</div>
                  </div>
                  <div className={styles.day10Variants4}>
                    <div className={styles.indicator61} />
                    <div className={styles.date61}>11</div>
                  </div>
                  <div className={styles.day11Variants4}>
                    <div className={styles.indicator62} />
                    <div className={styles.date62}>12</div>
                  </div>
                  <div className={styles.day12Variants4}>
                    <div className={styles.indicator63} />
                    <div className={styles.date63}>13</div>
                  </div>
                  <div className={styles.day13Variants4}>
                    <div className={styles.indicator64} />
                    <div className={styles.date64}>14</div>
                  </div>
                </div>
                <div className={styles.calendarweekWeek3}>
                  <div className={styles.day01Variants5}>
                    <div className={styles.indicator65} />
                    <div className={styles.date65}>9</div>
                  </div>
                  <div className={styles.day02VariantsGroup}>
                    <div className={styles.day02Variants5}>
                      <div className={styles.indicator66} />
                      <div className={styles.date66}>10</div>
                    </div>
                    <div className={styles.day03Variants5}>
                      <div className={styles.indicator67} />
                      <div className={styles.date67}>11</div>
                    </div>
                    <div className={styles.day04Variants5}>
                      <div className={styles.indicator68} />
                      <div className={styles.date68}>12</div>
                    </div>
                  </div>
                  <div className={styles.day05VariantsGroup}>
                    <div className={styles.day05Variants5}>
                      <div className={styles.indicator69} />
                      <div className={styles.date69}>13</div>
                    </div>
                    <div className={styles.day06Variants5}>
                      <div className={styles.indicator70} />
                      <div className={styles.date70}>14</div>
                    </div>
                  </div>
                  <div className={styles.day07Variants5}>
                    <div className={styles.indicator71} />
                    <div className={styles.date71}>15</div>
                  </div>
                  <div className={styles.day08Variants5}>
                    <div className={styles.indicator72} />
                    <div className={styles.date72}>16</div>
                  </div>
                  <div className={styles.day09Variants5}>
                    <div className={styles.indicator73} />
                    <div className={styles.date73}>17</div>
                  </div>
                  <div className={styles.day10Variants5}>
                    <div className={styles.indicator74} />
                    <div className={styles.date74}>18</div>
                  </div>
                  <div className={styles.day11Variants5}>
                    <div className={styles.indicator75} />
                    <div className={styles.date75}>19</div>
                  </div>
                  <div className={styles.day12Variants5}>
                    <div className={styles.indicator76} />
                    <div className={styles.date76}>20</div>
                  </div>
                  <div className={styles.day13Variants5}>
                    <div className={styles.indicator77} />
                    <div className={styles.date77}>21</div>
                  </div>
                </div>
                <div className={styles.calendarweekWeek4}>
                  <div className={styles.day01Variants6}>
                    <div className={styles.indicator78} />
                    <div className={styles.date78}>16</div>
                  </div>
                  <div className={styles.day02VariantsContainer}>
                    <div className={styles.day02Variants6}>
                      <div className={styles.indicator79} />
                      <div className={styles.date79}>17</div>
                    </div>
                    <div className={styles.day03Variants6}>
                      <div className={styles.indicator80} />
                      <div className={styles.date80}>18</div>
                    </div>
                    <div className={styles.day04Variants6}>
                      <div className={styles.indicator81} />
                      <b className={styles.date81}>19</b>
                    </div>
                  </div>
                  <div className={styles.day05VariantsContainer}>
                    <div className={styles.day05Variants6}>
                      <div className={styles.indicator82} />
                      <div className={styles.date82}>20</div>
                    </div>
                    <div className={styles.day06Variants6}>
                      <div className={styles.indicator83} />
                      <div className={styles.date83}>21</div>
                    </div>
                  </div>
                  <div className={styles.day07Variants6}>
                    <div className={styles.indicator84} />
                    <div className={styles.date84}>22</div>
                  </div>
                  <div className={styles.day08Variants6}>
                    <div className={styles.indicator85} />
                    <div className={styles.date85}>23</div>
                  </div>
                  <div className={styles.day09Variants6}>
                    <div className={styles.indicator86} />
                    <div className={styles.date86}>24</div>
                  </div>
                  <div className={styles.day10Variants6}>
                    <div className={styles.indicator87} />
                    <div className={styles.date87}>25</div>
                  </div>
                  <div className={styles.day11Variants6}>
                    <div className={styles.indicator88} />
                    <div className={styles.date88}>26</div>
                  </div>
                  <div className={styles.day12Variants6}>
                    <div className={styles.indicator89} />
                    <div className={styles.date89}>27</div>
                  </div>
                  <div className={styles.day13Variants6}>
                    <div className={styles.indicator90} />
                    <div className={styles.date90}>28</div>
                  </div>
                </div>
                <div className={styles.calendarweekWeek531}>
                  <div className={styles.day01Variants7}>
                    <div className={styles.indicator91} />
                    <div className={styles.date91}>23</div>
                  </div>
                  <div className={styles.day02VariantsParent1}>
                    <div className={styles.day02Variants7}>
                      <div className={styles.indicator92} />
                      <div className={styles.date92}>24</div>
                    </div>
                    <div className={styles.day03Variants7}>
                      <div className={styles.indicator93} />
                      <div className={styles.date93}>25</div>
                    </div>
                    <div className={styles.day04Variants7}>
                      <div className={styles.indicator94} />
                      <div className={styles.date94}>26</div>
                    </div>
                  </div>
                  <div className={styles.day05VariantsParent1}>
                    <div className={styles.day05Variants7}>
                      <div className={styles.indicator95} />
                      <div className={styles.date95}>27</div>
                    </div>
                    <div className={styles.day06Variants7}>
                      <div className={styles.indicator96} />
                      <div className={styles.date96}>28</div>
                    </div>
                  </div>
                  <div className={styles.day07Variants7}>
                    <div className={styles.indicator97} />
                    <div className={styles.date97}>29</div>
                  </div>
                  <div className={styles.day08Variants7}>
                    <div className={styles.indicator98} />
                    <div className={styles.date98}>30</div>
                  </div>
                  <div className={styles.day09Variants7}>
                    <div className={styles.indicator99} />
                    <div className={styles.date99}>31</div>
                  </div>
                  <div className={styles.day10Variants7}>
                    <div className={styles.indicator100} />
                    <div className={styles.date100}>1</div>
                  </div>
                  <div className={styles.day11Variants7}>
                    <div className={styles.indicator101} />
                    <div className={styles.date101}>2</div>
                  </div>
                  <div className={styles.day12Variants7}>
                    <div className={styles.indicator102} />
                    <div className={styles.date102}>3</div>
                  </div>
                  <div className={styles.day13Variants7}>
                    <div className={styles.indicator103} />
                    <div className={styles.date103}>4</div>
                  </div>
                </div>
                <div className={styles.calendarweekweek530}>
                  <div className={styles.day01Variants8}>
                    <div className={styles.indicator104} />
                    <div className={styles.date104}>23</div>
                  </div>
                  <div className={styles.day02Variants8}>
                    <div className={styles.indicator105} />
                    <div className={styles.date105}>24</div>
                  </div>
                  <div className={styles.day03Variants8}>
                    <div className={styles.indicator106} />
                    <div className={styles.date106}>25</div>
                  </div>
                  <div className={styles.day04Variants8}>
                    <div className={styles.indicator107} />
                    <div className={styles.date107}>26</div>
                  </div>
                  <div className={styles.day05Variants8}>
                    <div className={styles.indicator108} />
                    <div className={styles.date108}>27</div>
                  </div>
                  <div className={styles.day06Variants8}>
                    <div className={styles.indicator109} />
                    <div className={styles.date109}>28</div>
                  </div>
                  <div className={styles.day07Variants8}>
                    <div className={styles.indicator110} />
                    <div className={styles.date110}>29</div>
                  </div>
                  <div className={styles.day08Variants8}>
                    <div className={styles.indicator111} />
                    <div className={styles.date111}>30</div>
                  </div>
                  <div className={styles.day09Variants8}>
                    <div className={styles.indicator112} />
                    <div className={styles.date112}>1</div>
                  </div>
                  <div className={styles.day10Variants8}>
                    <div className={styles.indicator113} />
                    <div className={styles.date113}>2</div>
                  </div>
                  <div className={styles.day11Variants8}>
                    <div className={styles.indicator114} />
                    <div className={styles.date114}>3</div>
                  </div>
                  <div className={styles.day12Variants8}>
                    <div className={styles.indicator115} />
                    <div className={styles.date115}>4</div>
                  </div>
                  <div className={styles.day13Variants8}>
                    <div className={styles.indicator116} />
                    <div className={styles.date116}>5</div>
                  </div>
                </div>
                <div className={styles.calendarweekweek529Feb}>
                  <div className={styles.day01Variants9}>
                    <div className={styles.indicator117} />
                    <div className={styles.date117}>23</div>
                  </div>
                  <div className={styles.day02Variants9}>
                    <div className={styles.indicator118} />
                    <div className={styles.date118}>24</div>
                  </div>
                  <div className={styles.day03Variants9}>
                    <div className={styles.indicator119} />
                    <div className={styles.date119}>25</div>
                  </div>
                  <div className={styles.day04Variants9}>
                    <div className={styles.indicator120} />
                    <div className={styles.date120}>26</div>
                  </div>
                  <div className={styles.day05Variants9}>
                    <div className={styles.indicator121} />
                    <div className={styles.date121}>27</div>
                  </div>
                  <div className={styles.day06Variants9}>
                    <div className={styles.indicator122} />
                    <div className={styles.date122}>28</div>
                  </div>
                  <div className={styles.day07Variants9}>
                    <div className={styles.indicator123} />
                    <div className={styles.date123}>29</div>
                  </div>
                  <div className={styles.day08Variants9}>
                    <div className={styles.indicator124} />
                    <div className={styles.date124}>1</div>
                  </div>
                  <div className={styles.day09Variants9}>
                    <div className={styles.indicator125} />
                    <div className={styles.date125}>2</div>
                  </div>
                  <div className={styles.day10Variants9}>
                    <div className={styles.indicator126} />
                    <div className={styles.date126}>3</div>
                  </div>
                  <div className={styles.day11Variants9}>
                    <div className={styles.indicator127} />
                    <div className={styles.date127}>4</div>
                  </div>
                  <div className={styles.day12Variants9}>
                    <div className={styles.indicator128} />
                    <div className={styles.date128}>5</div>
                  </div>
                  <div className={styles.day13Variants9}>
                    <div className={styles.indicator129} />
                    <div className={styles.date129}>6</div>
                  </div>
                </div>
                <div className={styles.calendarweekweek528Feb}>
                  <div className={styles.day01Variants10}>
                    <div className={styles.indicator130} />
                    <div className={styles.date130}>23</div>
                  </div>
                  <div className={styles.day02Variants10}>
                    <div className={styles.indicator131} />
                    <div className={styles.date131}>24</div>
                  </div>
                  <div className={styles.day03Variants10}>
                    <div className={styles.indicator132} />
                    <div className={styles.date132}>25</div>
                  </div>
                  <div className={styles.day04Variants10}>
                    <div className={styles.indicator133} />
                    <div className={styles.date133}>26</div>
                  </div>
                  <div className={styles.day05Variants10}>
                    <div className={styles.indicator134} />
                    <div className={styles.date134}>27</div>
                  </div>
                  <div className={styles.day06Variants10}>
                    <div className={styles.indicator135} />
                    <div className={styles.date135}>28</div>
                  </div>
                  <div className={styles.day07Variants10}>
                    <div className={styles.indicator136} />
                    <div className={styles.date136}>1</div>
                  </div>
                  <div className={styles.day08Variants10}>
                    <div className={styles.indicator137} />
                    <div className={styles.date137}>2</div>
                  </div>
                  <div className={styles.day09Variants10}>
                    <div className={styles.indicator138} />
                    <div className={styles.date138}>3</div>
                  </div>
                  <div className={styles.day10Variants10}>
                    <div className={styles.indicator139} />
                    <div className={styles.date139}>4</div>
                  </div>
                  <div className={styles.day11Variants10}>
                    <div className={styles.indicator140} />
                    <div className={styles.date140}>5</div>
                  </div>
                  <div className={styles.day12Variants10}>
                    <div className={styles.indicator141} />
                    <div className={styles.date141}>6</div>
                  </div>
                  <div className={styles.day13Variants10}>
                    <div className={styles.indicator142} />
                    <div className={styles.date142}>7</div>
                  </div>
                </div>
                <div className={styles.calendarweekWeek631}>
                  <div className={styles.day01Variants11}>
                    <div className={styles.indicator143} />
                    <div className={styles.date143}>30</div>
                  </div>
                  <div className={styles.day02VariantsParent2}>
                    <div className={styles.day02Variants11}>
                      <div className={styles.indicator144} />
                      <div className={styles.date144}>31</div>
                    </div>
                    <div className={styles.day03Variants11}>
                      <div className={styles.indicator145} />
                      <div className={styles.date145}>1</div>
                    </div>
                    <div className={styles.day04Variants11}>
                      <div className={styles.indicator146} />
                      <div className={styles.date146}>2</div>
                    </div>
                  </div>
                  <div className={styles.day05VariantsParent2}>
                    <div className={styles.day05Variants11}>
                      <div className={styles.indicator147} />
                      <div className={styles.date147}>3</div>
                    </div>
                    <div className={styles.day06Variants11}>
                      <div className={styles.indicator148} />
                      <div className={styles.date148}>4</div>
                    </div>
                  </div>
                  <div className={styles.day07Variants11}>
                    <div className={styles.indicatorGroup}>
                      <div className={styles.indicator149} />
                      <div className={styles.date149}>5</div>
                    </div>
                  </div>
                  <div className={styles.day08Variants11}>
                    <div className={styles.indicator150} />
                    <div className={styles.date150}>6</div>
                  </div>
                  <div className={styles.day09Variants11}>
                    <div className={styles.indicator151} />
                    <div className={styles.date151}>7</div>
                  </div>
                  <div className={styles.day10Variants11}>
                    <div className={styles.indicator152} />
                    <div className={styles.date152}>8</div>
                  </div>
                  <div className={styles.day11Variants11}>
                    <div className={styles.indicator153} />
                    <div className={styles.date153}>9</div>
                  </div>
                  <div className={styles.day12Variants11}>
                    <div className={styles.indicator154} />
                    <div className={styles.date154}>10</div>
                  </div>
                  <div className={styles.day13Variants11}>
                    <div className={styles.indicator155} />
                    <div className={styles.date155}>11</div>
                  </div>
                </div>
                <div className={styles.calendarweekweek630}>
                  <div className={styles.day01Variants12}>
                    <div className={styles.indicator156} />
                    <div className={styles.date156}>30</div>
                  </div>
                  <div className={styles.day02Variants12}>
                    <div className={styles.indicator157} />
                    <div className={styles.date157}>1</div>
                  </div>
                  <div className={styles.day03Variants12}>
                    <div className={styles.indicator158} />
                    <div className={styles.date158}>2</div>
                  </div>
                  <div className={styles.day04Variants12}>
                    <div className={styles.indicator159} />
                    <div className={styles.date159}>3</div>
                  </div>
                  <div className={styles.day05Variants12}>
                    <div className={styles.indicator160} />
                    <div className={styles.date160}>4</div>
                  </div>
                  <div className={styles.day06Variants12}>
                    <div className={styles.indicator161} />
                    <div className={styles.date161}>5</div>
                  </div>
                  <div className={styles.day07Variants12}>
                    <div className={styles.indicator162} />
                    <div className={styles.date162}>6</div>
                  </div>
                  <div className={styles.day08Variants12}>
                    <div className={styles.indicator163} />
                    <div className={styles.date163}>7</div>
                  </div>
                  <div className={styles.day09Variants12}>
                    <div className={styles.indicator164} />
                    <div className={styles.date164}>8</div>
                  </div>
                  <div className={styles.day10Variants12}>
                    <div className={styles.indicator165} />
                    <div className={styles.date165}>9</div>
                  </div>
                  <div className={styles.day11Variants12}>
                    <div className={styles.indicator166} />
                    <div className={styles.date166}>10</div>
                  </div>
                  <div className={styles.day12Variants12}>
                    <div className={styles.indicator167} />
                    <div className={styles.date167}>11</div>
                  </div>
                  <div className={styles.day13Variants12}>
                    <div className={styles.indicator168} />
                    <div className={styles.date168}>12</div>
                  </div>
                </div>
                <div className={styles.calendarweekweek629Feb}>
                  <div className={styles.day01Variants13}>
                    <div className={styles.indicator169} />
                    <div className={styles.date169}>1</div>
                  </div>
                  <div className={styles.day02Variants13}>
                    <div className={styles.indicator170} />
                    <div className={styles.date170}>2</div>
                  </div>
                  <div className={styles.day03Variants13}>
                    <div className={styles.indicator171} />
                    <div className={styles.date171}>3</div>
                  </div>
                  <div className={styles.day04Variants13}>
                    <div className={styles.indicator172} />
                    <div className={styles.date172}>4</div>
                  </div>
                  <div className={styles.day05Variants13}>
                    <div className={styles.indicator173} />
                    <div className={styles.date173}>5</div>
                  </div>
                  <div className={styles.day06Variants13}>
                    <div className={styles.indicator174} />
                    <div className={styles.date174}>6</div>
                  </div>
                  <div className={styles.day07Variants13}>
                    <div className={styles.indicator175} />
                    <div className={styles.date175}>7</div>
                  </div>
                  <div className={styles.day08Variants13}>
                    <div className={styles.indicator176} />
                    <div className={styles.date176}>8</div>
                  </div>
                  <div className={styles.day09Variants13}>
                    <div className={styles.indicator177} />
                    <div className={styles.date177}>9</div>
                  </div>
                  <div className={styles.day10Variants13}>
                    <div className={styles.indicator178} />
                    <div className={styles.date178}>10</div>
                  </div>
                  <div className={styles.day11Variants13}>
                    <div className={styles.indicator179} />
                    <div className={styles.date179}>11</div>
                  </div>
                  <div className={styles.day12Variants13}>
                    <div className={styles.indicator180} />
                    <div className={styles.date180}>12</div>
                  </div>
                  <div className={styles.day13Variants13}>
                    <div className={styles.indicator181} />
                    <div className={styles.date181}>13</div>
                  </div>
                </div>
                <div className={styles.calendarweekweek628Feb}>
                  <div className={styles.day01Variants14}>
                    <div className={styles.indicator182} />
                    <div className={styles.date182}>2</div>
                  </div>
                  <div className={styles.day02Variants14}>
                    <div className={styles.indicator183} />
                    <div className={styles.date183}>3</div>
                  </div>
                  <div className={styles.day03Variants14}>
                    <div className={styles.indicator184} />
                    <div className={styles.date184}>4</div>
                  </div>
                  <div className={styles.day04Variants14}>
                    <div className={styles.indicator185} />
                    <div className={styles.date185}>5</div>
                  </div>
                  <div className={styles.day05Variants14}>
                    <div className={styles.indicator186} />
                    <div className={styles.date186}>6</div>
                  </div>
                  <div className={styles.day06Variants14}>
                    <div className={styles.indicator187} />
                    <div className={styles.date187}>7</div>
                  </div>
                  <div className={styles.day07Variants14}>
                    <div className={styles.indicator188} />
                    <div className={styles.date188}>8</div>
                  </div>
                  <div className={styles.day08Variants14}>
                    <div className={styles.indicator189} />
                    <div className={styles.date189}>9</div>
                  </div>
                  <div className={styles.day09Variants14}>
                    <div className={styles.indicator190} />
                    <div className={styles.date190}>10</div>
                  </div>
                  <div className={styles.day10Variants14}>
                    <div className={styles.indicator191} />
                    <div className={styles.date191}>11</div>
                  </div>
                  <div className={styles.day11Variants14}>
                    <div className={styles.indicator192} />
                    <div className={styles.date192}>12</div>
                  </div>
                  <div className={styles.day12Variants14}>
                    <div className={styles.indicator193} />
                    <div className={styles.date193}>13</div>
                  </div>
                  <div className={styles.day13Variants14}>
                    <div className={styles.indicator194} />
                    <div className={styles.date194}>14</div>
                  </div>
                </div>
              </div>
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
              <button className={styles.filteringUnit}>
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
              <button className={styles.frameWrapper}>
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
