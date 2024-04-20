
import styles from './index.module.css'
import React, {useState} from 'react'
import {Button, Paper, Popover, Stack, Typography} from '@mui/material'
import {theme} from '../../../core/theme/theme.ts'
import { useNavigate } from 'react-router-dom';


export const Profile = () => {
  const navigate = useNavigate(); // for react-router-dom v6

  // Handler to navigate to /pocup
  const handleNavigateToPurchases = () => {
    navigate('/pocup');
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
    setOpenButtonPopover(!openButtonPopover)
  };

  const [openButtonPopover, setOpenButtonPopover] = useState<boolean>(false)

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (<>
    <Popover open={openButtonPopover} anchorEl={anchorEl} onClose={handleClose}>
      <Paper elevation={3} sx={{ padding: '10px' }}>
        <Stack direction={'column'} spacing={theme.spacing(1)} alignItems={'center'}>
          <Typography variant={'subtitle1'}>Выйти из аккаунта?</Typography>
          <Stack direction={'row'} spacing={theme.spacing(1)}>
            <Button size={'large'}
                    sx={{
                      width: '80px',
                    }}
                    color={'error'}
                    onClick={() => {
                      localStorage.clear()
                      location.reload()
                    }}
                    variant="contained">
              Да
            </Button>
            <Button size={'large'}
                    sx={{
                      width: '80px',
                    }}
                    color={'neutral'}
                    onClick={() => setOpenButtonPopover(false)}
                    variant="outlined">
              Нет
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Popover>

    <div className={styles.profile}>
 
      <section className={styles.batteryMiniInstance}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.footerParent} onClick={handleClick}>
              <img
                className={styles.footerIcon}
                loading="lazy"
                alt=""
                src="/public/lk/frame-1000000873@2x.png"
              />
                <div className={styles.frameWrapper}>
                  <div className={styles.parent}>
                    <div className={styles.div}>Привет!</div>
                    <div className={styles.div1}>
                      <p className={styles.p}>Сергей</p>
                      <p className={styles.p1}>Мельников</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className={styles.frameContainer}>
              <button className={styles.mingcutecoinFillParent}>
                <img
                    className={styles.mingcutecoinFillIcon}
                    alt=""
                    src="/public/lk/mingcutecoinfill@2x.png"
                />
                <b className={styles.b}>2 000</b>
              </button>
            </div>
          </div>
          <div className={styles.div2}>
            <button className={styles.logo}>
              <div className={styles.div3}>
                <div className={styles.solarsettingsLineDuotoneParent}>
                  <img
                    className={styles.solarsettingsLineDuotoneIcon}
                    alt=""
                    src="/public/lk/solarsettingslineduotone.svg"
                  />
                  <div className={styles.div4}>Настройки</div>
                </div>
                <img
                  className={styles.footerInstanceIcon}
                  alt=""
                  src="/public/lk/footer-instance.svg"
                />
              </div>
            </button>
            <button className={styles.inner}>
              <div className={styles.frameDiv}>
                <div className={styles.solarchatRoundLineLineDuoParent}>
                  <img
                    className={styles.solarchatRoundLineLineDuoIcon}
                    alt=""
                    src="/public/lk/solarchatroundlinelineduotone.svg"
                  />
                  <div className={styles.div5}>Поддержка</div>
                </div>
                <img
                  className={styles.btnloadmoreIcon}
                  alt=""
                  src="/public/lk/footer-instance.svg"
                />
              </div>
            </button>
            <button className={styles.child}>
              <div className={styles.frameParent1}>
                <div className={styles.solarheartLineDuotoneParent}>
                  <img
                    className={styles.solarheartLineDuotoneIcon}
                    alt=""
                    src="/public/lk/solarheartlineduotone.svg"
                  />
                  <div className={styles.div6}>Избранное</div>
                </div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/public/lk/footer-instance.svg"
                />
              </div>
            </button>
            <button className={styles.child}  onClick={handleNavigateToPurchases}>
              <div className={styles.frameParent1}>
                <div className={styles.solarheartLineDuotoneParent}>
                  <img
                    className={styles.solarheartLineDuotoneIcon}
                    alt=""
                    src="/public/lk/solar_cart-large-2-line-duotone.svg"
                  />
                  <div className={styles.div6}>Мои покупки</div>
                </div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/public/lk/footer-instance.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className={styles.profileInner}>
        <div className={styles.frameParent2}>
          <div className={styles.group}>
            <b className={styles.b1}>Мои компании</b>
            <div className={styles.wrapper}>
              <div className={styles.div7}>Все</div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.container}>
                <div className={styles.div8}>Теремок</div>
              </div>
              <div className={styles.mingcutecoinFillGroup}>
                <img
                  className={styles.mingcutecoinFillIcon1}
                  loading="lazy"
                  alt=""
                  src="/public/lk/mingcutecoinfill-1@2x.png"
                />
                <div className={styles.div9}>
                  <span className={styles.span}>+</span>
                  <b className={styles.b2}>200</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.frame}>
                <div className={styles.div10}>Золотой ключик</div>
              </div>
              <div className={styles.mingcutecoinFillContainer}>
                <img
                  className={styles.mingcutecoinFillIcon2}
                  loading="lazy"
                  alt=""
                  src="/public/lk/mingcutecoinfill-1@2x.png"
                />
                <div className={styles.div11}>
                  <span className={styles.span1}>+</span>
                  <b className={styles.b3}>200</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.wrapper1}>
                <div className={styles.div12}>Голубая волна</div>
              </div>
              <div className={styles.mingcutecoinFillParent1}>
                <img
                  className={styles.mingcutecoinFillIcon3}
                  loading="lazy"
                  alt=""
                  src="/public/lk/mingcutecoinfill-1@2x.png"
                />
                <div className={styles.div13}>
                  <span className={styles.span2}>+</span>
                  <b className={styles.b4}>200</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.parent1}>
          <b className={styles.b5}>Мои покупки</b>
          <div className={styles.wrapper2}>
            <div className={styles.div14}>Все</div>
          </div>
        </div>
        <div className={styles.parent2}>
          <div className={styles.div15}>
            <img
              className={styles.subtractIcon}
              loading="lazy"
              alt=""
              src="/public/lk/subtract.svg"
            />
            <div className={styles.settingsMenuWrapper}>
              <div className={styles.settingsMenu}>
                <img
                  className={styles.subtractIcon1}
                  alt=""
                  src="/public/lk/subtract-1.svg"
                />
                <div className={styles.frameParent7}>
                  <div className={styles.frameParent8}>
                    <div className={styles.parent3}>
                      <div className={styles.div16}>1 билет</div>
                      <div className={styles.div17}>23.07</div>
                    </div>
                    <div className={styles.div18}>Верь в себя!</div>
                  </div>
                  <div className={styles.parent4}>
                    <div className={styles.div19}>
                      <b>{`500 `}</b>
                      <span className={styles.span3}>₽</span>
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.mingcutecoinFillParent4}>
                        <img
                          className={styles.mingcutecoinFillIcon4}
                          loading="lazy"
                          alt=""
                          src="/public/lk/mingcutecoinfill-6@2x.png"
                        />
                        <div className={styles.div32}>
                          <span className={styles.span8}>+</span>
                          <b className={styles.b8}>200</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div21}>
            <img
              className={styles.subtractIcon2}
              loading="lazy"
              alt=""
              src="/public/lk/subtract.svg"
            />
            <div className={styles.groupDiv}>
              <div className={styles.subtractParent}>
                <img
                  className={styles.subtractIcon3}
                  alt=""
                  src="/public/lk/subtract-1.svg"
                />
                <div className={styles.frameParent9}>
                  <div className={styles.frameParent10}>
                    <div className={styles.parent5}>
                      <div className={styles.div22}>1 билет</div>
                      <div className={styles.div23}>23.07</div>
                    </div>
                    <div className={styles.div24}>Верь в себя!</div>
                  </div>
                  <div className={styles.parent6}>
                    <div className={styles.div25}>
                      <b>{`500 `}</b>
                      <span className={styles.span5}>₽</span>
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.mingcutecoinFillParent4}>
                        <img
                          className={styles.mingcutecoinFillIcon4}
                          loading="lazy"
                          alt=""
                          src="/public/lk/mingcutecoinfill-6@2x.png"
                        />
                        <div className={styles.div32}>
                          <span className={styles.span8}>+</span>
                          <b className={styles.b8}>200</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div27}>
            <img
              className={styles.subtractIcon4}
              loading="lazy"
              alt=""
              src="/public/lk/subtract.svg"
            />
            <div className={styles.inner1}>
              <div className={styles.subtractGroup}>
                <img
                  className={styles.subtractIcon5}
                  alt=""
                  src="/public/lk/subtract-1.svg"
                />
                <div className={styles.frameParent11}>
                  <div className={styles.frameParent12}>
                    <div className={styles.parent7}>
                      <div className={styles.div28}>1 билет</div>
                      <div className={styles.div29}>23.07</div>
                    </div>
                    <div className={styles.div30}>Верь в себя!</div>
                  </div>
                  <div className={styles.parent8}>
                    <div className={styles.div31}>
                      <b>{`500 `}</b>
                      <span className={styles.span7}>₽</span>
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.mingcutecoinFillParent4}>
                        <img
                          className={styles.mingcutecoinFillIcon4}
                          loading="lazy"
                          alt=""
                          src="/public/lk/mingcutecoinfill-6@2x.png"
                        />
                        <div className={styles.div32}>
                          <span className={styles.span8}>+</span>
                          <b className={styles.b8}>200</b>
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
      <section className={styles.frameParent13}>
        <div className={styles.frameParent14}>
          <div className={styles.parent9}>
            <b className={styles.b9}>Мои друзья</b>
            <div className={styles.div33}>Добавить</div>
          </div>
          <div className={styles.frameParent15}>
            <div className={styles.servicesMenuWrapper}>
              <div className={styles.servicesMenu}>
                <div className={styles.frameParent16}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/public/lk/frame-1000003075.svg"
                  />
                  <div className={styles.parent10}>
                    <div className={styles.div34}>Шаповалова Арина</div>
                    <div className={styles.ireneevanssmallgmailcom}>
                      ireneevanssmall@gmail.com
                    </div>
                  </div>
                </div>
                <img
                  className={styles.servicesMenuChild}
                  loading="lazy"
                  alt=""
                  src="/public/lk/frame-1000003077.svg"
                />
              </div>
            </div>
            <div className={styles.frameParent17}>
              <div className={styles.frameParent18}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/public/lk/frame-1000003075-1@2x.png"
                />
                <div className={styles.parent11}>
                  <div className={styles.div35}>Лебедева Мария</div>
                  <div className={styles.satchhotmailcom}>
                    satch@hotmail.com
                  </div>
                </div>
              </div>
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/public/lk/frame-1000003077-1.svg"
              />
            </div>
            <div className={styles.frameParent19}>
              <div className={styles.frameParent20}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/public/lk/frame-1000003075-2@2x.png"
                />
                <div className={styles.parent12}>
                  <div className={styles.div36}>Орлова Анастасия</div>
                  <div className={styles.hermesmecom}>hermes@me.com</div>
                </div>
              </div>
              <img
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/public/lk/frame-1000003077-2.svg"
              />
            </div>
          </div>
        </div>
     
      </section>
    </div>
  </>);
};


