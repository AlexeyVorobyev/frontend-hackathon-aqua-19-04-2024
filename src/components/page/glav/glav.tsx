import React from 'react';
import styles from './index.module.css';

// Import components
import Nav from '../../widget/glav/components/nav/nav';
import Bon from '../../widget/glav/components/bonus/bonus';
import Bon2 from '../../widget/glav/components/Bon2/bonus';
import Sob from '../../widget/glav/components/Sob/sobit';
import Place from '../../widget/glav/components/Place/place';
import Hot from '../../widget/glav/components/Hotel/hotel';
import Infost from '../../widget/glav/components/Infost/infost';

// Data array
const dataArray3 = [
  {
    id: 1,
    rectangleImageUrl: "/public/glav/rectangle-992@2x.png",
    rating: 9.3,
    maxRating: 10,
    placeName: "Гранд Сапфир",
    iconUrl: "/public/glav/swm-icons--broken--trendingup.svg",
    dealType: "Hot Deal"
  },
  {
    id: 2,
    rectangleImageUrl: "/public/glav/rectangle-992-1@2x.png",
    rating: 8.5,
    maxRating: 10,
    placeName: "Luxurious Aspen",
    iconUrl: "/public/glav/swm-icons--broken--trendingup.svg",
    dealType: "Hot Deal"
  },
];

// Main component
export const Main = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <Bon />
      <Bon2 />
      <Sob />
      <Place />
      <Hot />
      <Infost />
      <section className={styles.mainInner2}>
        <div className={styles.frameParent15}>
          <div className={styles.parent5}>
            <div className={styles.div25}>Маршруты</div>
            <div className={styles.seeAllWrapper2}>
              <div className={styles.seeAll4}>смотреть все</div>
            </div>
          </div>
          <div className={styles.frameParent16}>
            {dataArray3.map((item) => (
              <div className={styles.frameParent8} key={item.id}>
                <div className={styles.rectangleParent}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src={item.rectangleImageUrl}
                  />
                  <div className={styles.frame}>
                    <div className={styles.div18}>
                      <span className={styles.span2}>{item.rating}</span>
                      <span className={styles.span3}>/</span>
                      <span className={styles.span4}>{item.maxRating}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div19}>{item.placeName}</div>
                <div className={styles.frameWrapper1}>
                  <img
                    className={styles.swmIconsBrokenTrending}
                    loading="lazy"
                    alt=""
                    src={item.iconUrl}
                  />
                  <div className={styles.hotDeal}>{item.dealType}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

