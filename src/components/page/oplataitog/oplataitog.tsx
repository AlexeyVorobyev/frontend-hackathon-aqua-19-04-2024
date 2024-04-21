import type { NextPage } from "next";
import styles from "./index.module.css";
import { Link } from 'react-router-dom';
export const Purchase2: NextPage = () => {
  return (
    <div className={styles.purchase6}>
      <section className={styles.mobileParent}>
     
        <div className={styles.frameWrapper}>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
            <Link to="/korz"> <img
                className={styles.svgIcon}
                loading="lazy"
                alt=""
                src="/public/oplataitog/svg.svg"
              /></Link>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div}>Успешно!</div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.purchase6Inner}>
        <div className={styles.frameParent}>
          <div className={styles.parent}>
            <div className={styles.div1}>Оплата прошла успешно</div>
            <div className={styles.qrCode11Wrapper}>
              <img
                className={styles.qrCode11}
                loading="lazy"
                alt=""
                src="/public/oplataitog/qrcode-1-1.svg"
              />
            </div>
          </div>
          <div className={styles.buttonPairParent}>
            <button className={styles.buttonPair}>
              <div className={styles.div2}>Скачать билеты</div>
              <img
                  className={styles.fluentshare24RegularIcon}
                  alt=""
                  src="/public/oplataitog/ic_round-save-alt.svg"
                />
             
            </button>
            <div className={styles.buttonPair1}>
              <div className={styles.div3}>Поделиться</div>
              <div className={styles.fluentshare24RegularWrapper}>
                <img
                  className={styles.fluentshare24RegularIcon}
                  alt=""
                  src="/public/oplataitog/fluentshare24regular.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.purchase6Child}>
        <div className={styles.group}>
          <div className={styles.div4}>
            <img
              className={styles.subtractIcon}
              loading="lazy"
              alt=""
              src="/public/oplataitog/subtract.svg"
            />
            <div className={styles.inner}>
              <div className={styles.subtractParent}>
                <img
                  className={styles.subtractIcon1}
                  alt=""
                  src="/public/oplataitog/subtract-1.svg"
                />
                <div className={styles.ticketParent}>
                  <div className={styles.ticket}>
                    <div className={styles.separator}>
                      <div className={styles.div5}>1 билет</div>
                      <div className={styles.believeInSelf}>23.07</div>
                    </div>
                    <div className={styles.div6}>Верь в себя!</div>
                  </div>
                  <div className={styles.rubleSymbol}>
                    <div className={styles.div7}>
                      <b>{`500 `}</b>
                      <span className={styles.span}>₽</span>
                    </div>
                    <div className={styles.coinFill}>
                      <div className={styles.separator1}>
                      <img
                          className={styles.mingcutecoinFillIcon}
                          loading="lazy"
                          alt=""
                          src="/public/oplataitog/mingcutecoinfill-2@2x.png"
                        />
                        <div className={styles.paymentIconSetContainer}>
                         
                          <b className={styles.b}>200</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div8}>
            <img
              className={styles.subtractIcon2}
              loading="lazy"
              alt=""
              src="/public/oplataitog/subtract.svg"
            />
            <div className={styles.child}>
              <div className={styles.subtractGroup}>
                <img
                  className={styles.subtractIcon3}
                  alt=""
                  src="/public/oplataitog/subtract-1.svg"
                />
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.container}>
                      <div className={styles.div9}>1 билет</div>
                      <div className={styles.div10}>23.07</div>
                    </div>
                    <div className={styles.div11}>Верь в себя!</div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.div12}>
                      <b>{`500 `}</b>
                      <span className={styles.span2}>₽</span>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.mingcutecoinFillParent}>
                      <img
                          className={styles.mingcutecoinFillIcon}
                          loading="lazy"
                          alt=""
                          src="/public/oplataitog/mingcutecoinfill-2@2x.png"
                        />
                        <div className={styles.div13}>
                         
                          <b className={styles.b1}>200</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div14}>
            <img
              className={styles.subtractIcon4}
              loading="lazy"
              alt=""
              src="/public/oplataitog/subtract.svg"
            />
            <div className={styles.groupDiv}>
              <div className={styles.subtractContainer}>
                <img
                  className={styles.subtractIcon5}
                  alt=""
                  src="/public/oplataitog/subtract-1.svg"
                />
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.parent1}>
                      <div className={styles.div15}>1 билет</div>
                      <div className={styles.div16}>23.07</div>
                    </div>
                    <div className={styles.div17}>Верь в себя!</div>
                  </div>
                  <div className={styles.parent2}>
                    <div className={styles.div18}>
                      <b>{`500 `}</b>
                      <span className={styles.span4}>₽</span>
                    </div>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.mingcutecoinFillGroup}>
                        <img
                          className={styles.mingcutecoinFillIcon}
                          loading="lazy"
                          alt=""
                          src="/public/oplataitog/mingcutecoinfill-2@2x.png"
                        />
                        <div className={styles.div19}>
                        
                          <b className={styles.b2}>200</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

