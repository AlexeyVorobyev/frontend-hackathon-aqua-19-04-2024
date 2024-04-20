import type { NextPage } from "next";
import FrameComponent from '../../widget/servis/FrameComponent';
import styles from "./index.module.css";

export const Services: NextPage = () => {
  return (
    <div className={styles.services}>
      <main className={styles.servicesInner}>
        <section className={styles.frameParent}>
          <div className={styles.wrapper}>
            <h3 className={styles.h3}>Сервисы</h3>
          </div>
          <div className={styles.frameGroup}>
            <FrameComponent
              prop="Что посмотреть"
              solarmapPointBold="/public/servis/solarmappointbold.svg"
              prop1="Места"
              divPadding="var(--padding-mid) var(--padding-5xl) 39px var(--padding-lgi)"
              solarrouting2Bold="/public/servis/solarrouting2bold.svg"
              prop2="Маршруты и экскурсии"
              vector="/public/servis/vector-1.svg"
              solarchefHatHeartBold="/public/servis/solarchefhatheartbold.svg"
              prop3="Рестораны и кафе"
              vector1="/public/servis/vector-2.svg"
            />
            <FrameComponent
              prop="Как добраться"
              solarmapPointBold="/public/servis/jamplanef.svg"
              prop1="Авиабилеты"
              solarroutingbold="/public/servis/vector-3.svg"
              solarrouting2Bold="/public/servis/solarticketbold.svg"
              prop2="ЖД билеты"
              vector="/public/servis/vector-4.svg"
              solarchefHatHeartBold="/public/servis/solarbusbold.svg"
              prop3="Речные трамваи"
              vector1="/public/servis/vector-5.svg"
              divPadding="var(--padding-mid) var(--padding-5xl) 39px var(--padding-lgi)"
              solarroutingboldIconMinWidth="113px"
              vectorIconMinWidth="95px"
              solarchefHatHeartBoldIconWidth="unset"
              vectorIconFlex="unset"
              vectorIconDisplay="inline-block"
              vectorIconMinWidth1="88px"
              propPadding="0px 0px 0px 3.8px"
              propWidth="157px"
            />
            <div className={styles.parent}>
              <b className={styles.b}>Куда поехать</b>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.solarmapPointBoldParent}>
                    <img
                      className={styles.solarmapPointBoldIcon}
                      loading="lazy"
                      alt=""
                      src="/public/servis/solarmappointbold-1.svg"
                    />
                    <div className={styles.div}>Отели</div>
                  </div>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/public/servis/vector-6.svg"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.solarrouting2BoldParent}>
                    <img
                      className={styles.solarrouting2BoldIcon}
                      loading="lazy"
                      alt=""
                      src="/public/servis/solarrouting2bold-1.svg"
                    />
                    <div className={styles.div1}>Направления</div>
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="/public/servis/vector-7.svg"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.solarchefHatHeartBoldParent}>
                    <img
                      className={styles.solarchefHatHeartBoldIcon}
                      loading="lazy"
                      alt=""
                      src="/public/servis/solarchefhatheartbold-1.svg"
                    />
                    <div className={styles.div2}>Туры</div>
                  </div>
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="/public/servis/vector-8.svg"
                  />
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.solarmapBoldParent}>
                    <img
                      className={styles.solarmapBoldIcon}
                      loading="lazy"
                      alt=""
                      src="/public/servis/solarmapbold.svg"
                    />
                    <div className={styles.div3}>Карта</div>
                  </div>
                  <img
                    className={styles.vectorIcon3}
                    loading="lazy"
                    alt=""
                    src="/public/servis/vector-9.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.group}>
              <b className={styles.b1}>Что посмотреть</b>
              <div className={styles.frameParent4}>
                <div className={styles.frameParent5}>
                  <div className={styles.solarmapPointBoldGroup}>
                    <img
                      className={styles.solarmapPointBoldIcon1}
                      loading="lazy"
                      alt=""
                      src="/public/servis/solarmappointbold-2.svg"
                    />
                    <div className={styles.div4}>Места и события</div>
                  </div>
                  <img
                    className={styles.vectorIcon4}
                    loading="lazy"
                    alt=""
                    src="/public/servis/vector-10.svg"
                  />
                </div>
                <div className={styles.frameParent6}>
                  <div className={styles.solarrouting2BoldGroup}>
                    <img
                      className={styles.solarrouting2BoldIcon1}
                      loading="lazy"
                      alt=""
                      src="/public/servis/solarrouting2bold-2.svg"
                    />
                    <div className={styles.div5}>Маршруты и экскурсии</div>
                  </div>
                  <img
                    className={styles.vectorIcon5}
                    loading="lazy"
                    alt=""
                    src="/public/servis/vector-11.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};


