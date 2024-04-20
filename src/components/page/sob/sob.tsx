import React from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import styles from './index.module.css'; // Assuming the CSS module is renamed to Places.module.css
import { Link } from 'react-router-dom';
interface Card {
  title: string;
  address: string;
  image: string;
  price?: string;
}

export const Places: React.FC = () => {
    const cards = [
        { title: 'Концерт “Верь в себя”', address: 'ул. Марксистов',  image: '/public/2@2x.png' },
        { title: 'Фестиваль “Лето начинается!”', address: 'ул. Ленина', image: '/public/3@2x.png' },
        { title: 'Выставка “Современное искусство”', address: 'ул. Пушкина',  image: '/public/3@2x.png' }
      ];
      const cards1 = [
        { 
          title: 'Концерт “Верь в себя”', 
          address: 'ул. Марксистов',  
          image: '/public/2@2x.png',
          price: '500'
        },
        { 
          title: 'Фестиваль “Лето начинается!”', 
          address: 'ул. Ленина', 
          image: '/public/3@2x.png',
          price: '800' // Assuming you have a price, add it here
        },
        { 
          title: 'Выставка “Современное искусство”', 
          address: 'ул. Пушкина',  
          image: '/public/3@2x.png',
          price: '650' // Assuming you have a price, add it here
        }
      ];
      
      const [springs, api] = useSprings(cards.length, i => ({
        x: 0,
        display: 'block',
        opacity: 1
      }));
    
      const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity, cancel }) => {
        const trigger = velocity > 0.2; // The velocity threshold to consider as swipe
        const dir = xDir < 0 ? -1 : 1; // Swipe direction
    
        // If the velocity is high enough, swipe the card away
        if (!down && trigger) {
          api.start(i => {
            if (index !== i) return;
            return { x: (200 + window.innerWidth) * dir, display: 'none', opacity: 0 };
          });
        } else {
          // Otherwise, move the card with the gesture
          api.start(i => {
            if (index !== i) return;
            const x = down ? mx : 0;
            return { x, display: 'block', opacity: 1 };
          });
        }
      });

  return (
    <div className={styles.places}>
      <header className={styles.mobile}>
        <div className={styles.statusBarmini}>
          <div className={styles.time}>9:41</div>
          <div className={styles.record}>
            <div className={styles.time1}>12:48</div>
          </div>
          <div className={styles.timeLabel}>
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
      <section className={styles.searchBarWrapper}>
        <div className={styles.searchBar}>
          <div className={styles.placeNameWrapper}>
            <div className={styles.placeName}>
            <Link to="/"> <img //тут навигация назад
                className={styles.backIcon}
                loading="lazy"
                alt=""
                src="/public/back.svg"
              /> </Link>
              <div className={styles.heart}>
                <h2 className={styles.h2}>Интересные события</h2>
              </div>
            </div>
          </div>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <div className={styles.iconlylightOutlinesearchParent}>
                <img
                  className={styles.iconlylightOutlinesearch}
                  alt=""
                  src="/public/iconlylightoutlinesearch@2x.png"
                />
                <input
                  className={styles.input}
                  placeholder="Поиск"
                  type="text"
                />
              </div>
              <img
                className={styles.solarmapLineDuotoneIcon}
                alt=""
                src="/public/solarmaplineduotone.svg"
              />
            </div>
          </div>
          <div className={styles.container1}>
      {springs.map(({ x, display, opacity }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{ x, display, opacity }}
          className={styles.card1}
        >
          <img src={cards[i].image} alt={cards[i].title} className={styles.cardImage1} />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{cards[i].title}</h2>
            <p className={styles.cardLocation}>{cards[i].address}</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardPrice}>{cards[i].price}</span>
            
            </div>
          </div>
        </animated.div>
      ))}
    </div>
         
        </div>
      </section>
      <section className={styles.placesInner}>
        <div className={styles.heartCollectionParent}>
          {cards1.map((card, index) => (
            <div key={index} className={styles.heartCollection}>
              <div className={styles.searchField}>
                <img
                  className={styles.searchFieldChild}
                  loading="lazy"
                  alt=""
                  src={card.image}
                />
              </div>
              <div className={styles.frameParent}>
                <div className={styles.placeNameParent}>
                  <div className={styles.placeName1}>
                    <div className={styles.placeName2}>{card.title}</div>
                    <div className={styles.favoriteIcon1}>
                      <div className={styles.favoriteIconItem} />
                      <img
                        className={styles.heartIcon1}
                        alt=""
                        src="/public/heart-1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.ratingIconParent}>
                    <div className={styles.ratingIcon}>
                      <div className={styles.baliLocation}>
                        <img
                          className={styles.pinIcon}
                          loading="lazy"
                          alt=""
                          src="/public/pin-icon.svg"
                        />
                      </div>
                      <div className={styles.div2}>{card.address}</div>
                    </div>
                    <div className={styles.heartIcon2}>
                      <div className={styles.ratingIcon1}>
                        <img
                          className={styles.ratingIcon2}
                          loading="lazy"
                          alt=""
                          src="/public/rating-icon.svg"
                        />
                      </div>
                      <div className={styles.div3}>4.8</div>
                    </div>
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.div4}>
                    <b>{card.price ? `${card.price} ` : ''}</b>
                    <span className={styles.span}>₽</span>
                  </div>
                  <button className={styles.largeSolarMapWrapper}>
                    <div className={styles.largeSolarMap}>
                      <img
                        className={styles.solarcartLarge3LineDuotonIcon}
                        alt=""
                        src="/public/solarcartlarge3lineduotone.svg"
                      />
                      <div className={styles.div5}>Добавить</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


