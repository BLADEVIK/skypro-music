import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      <title>Skypro</title>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main className={styles.main}>
            <nav className={classNames(styles.main__nav, styles.nav)}>
              <div className={classNames(styles.nav__logo, styles.logo)}>
                <img className={styles.logo__image} src="img/logo.png" />
              </div>
              <div className={classNames(styles.nav__burger, styles.burger)}>
                <span className={styles.burger__line} />
                <span className={styles.burger__line} />
                <span className={styles.burger__line} />
              </div>
              <div className={classNames(styles.nav__menu, styles.menu)}>
                <ul className={styles.menu__list}>
                  <li className={styles.menu__item}>
                    <a href="#" className={styles.menu__link}>
                      Главное
                    </a>
                  </li>
                  <li className={styles.menu__item}>
                    <a href="#" className={styles.menu__item}>
                      Мой плейлист
                    </a>
                  </li>
                  <li className={styles.menu__item}>
                    <a href="../signin.html" className={styles.menu__link}>
                      Войти
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div
              className={classNames(
                styles.main__centerblock,
                styles.centerblock
              )}
            >
              <div
                className={classNames(
                  styles.centerblock__search,
                  styles.search
                )}
              >
                <svg className={styles.search__svg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-search" />
                </svg>
                <input
                  className={styles.search__text}
                  type="search"
                  placeholder="Поиск"
                  name="search"
                />
              </div>
              <h2 className={styles.centerblock__h2}>Треки</h2>
              <div
                className={classNames(
                  styles.centerblock__filter,
                  styles.filter
                )}
              >
                <div className={styles.filter__title}>Искать по:</div>
                <div
                  className={classNames(
                    styles.filter__button,
                    styles.button - author,
                    styles._btn - text
                  )}
                >
                  исполнителю
                </div>
                <div
                  className={classNames(
                    styles.filter__button,
                    styles.button - year,
                    styles._btn - text
                  )}
                >
                  году выпуска
                </div>
                <div
                  className={classNames(
                    styles.filter__button,
                    styles.button - genre,
                    styles._btn - text
                  )}
                >
                  жанру
                </div>
              </div>
              <div
                className={classNames(
                  styles.centerblock__content,
                  styles.playlist - content
                )}
              >
                <div
                  className={classNames(
                    styles.content__title,
                    styles.playlist - title
                  )}
                >
                  <div
                    className={classNames(
                      styles.playlist - title__col,
                      styles.col01
                    )}
                  >
                    Трек
                  </div>
                  <div
                    className={classNames(
                      styles.playlist - title__col,
                      styles.col02
                    )}
                  >
                    Исполнитель
                  </div>
                  <div
                    className={classNames(
                      styles.playlist - title__col,
                      styles.col03
                    )}
                  >
                    Альбом
                  </div>
                  <div
                    className={classNames(
                      styles.playlist - title__col,
                      styles.col04
                    )}
                  >
                    <svg className={styles.playlist - title__svg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                    </svg>
                  </div>
                </div>
                <div
                  className={classNames(
                    styles.content__playlist,
                    styles.playlist
                  )}
                >
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Guilt{" "}
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          Nero
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Welcome Reality
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>4:44</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Elektro{" "}
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          Dynoro, Outwork, Mr. Gee
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Elektro
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>2:22</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            I’m Fire{" "}
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          Ali Bakgor
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          I’m Fire
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>2:22</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Non Stop
                            <span className={styles.track__title - span}>
                              (Remix)
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          Стоункат, Psychopath
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Non Stop
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>4:12</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Run Run
                            <span className={styles.track__title - span}>
                              (feat. AR/CO)
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          Jaded, Will Clarke, AR/CO
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Run Run
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>2:54</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Eyes on Fire
                            <span className={styles.track__title - span}>
                              (Zeds Dead Remix)
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          Blue Foundation, Zeds Dead
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Eyes on Fire
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>5:20</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Mucho Bien
                            <span className={styles.track__title - span}>
                              (Hi Profile Remix)
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          HYBIT, Mr. Black, Offer Nissim, Hi Profile
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Mucho Bien
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>3:41</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Knives n Cherries
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          minthaze
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Captivating
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>1:48</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Knives n Cherries
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          minthaze
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Captivating
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>1:48</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Knives n Cherries
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          minthaze
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Captivating
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>1:48</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Knives n Cherries
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          minthaze
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Captivating
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>1:48</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Knives n Cherries
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          minthaze
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Captivating
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>1:48</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Knives n Cherries
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          minthaze
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Captivating
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>1:48</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Knives n Cherries
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          minthaze
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Captivating
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>1:48</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            How Deep Is Your Love
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          Calvin Harris, Disciples
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          How Deep Is Your Love
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>3:32</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            Morena{" "}
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        >
                          Tom Boxer
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        >
                          Soundz Made in Romania
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text}>3:36</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playlist__item}>
                    <div
                      className={classNames(
                        styles.playlist__track,
                        styles.track
                      )}
                    >
                      <div className={styles.track__title}>
                        <div className={styles.track__title - image}>
                          <svg className={styles.track__title - svg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title - text}>
                          <a
                            className={styles.track__title - link}
                            href="http://"
                          >
                            <span className={styles.track__title - span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a
                          className={styles.track__author - link}
                          href="http://"
                        />
                      </div>
                      <div className={styles.track__album}>
                        <a
                          className={styles.track__album - link}
                          href="http://"
                        />
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time - text} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(styles.main__sidebar, styles.sidebar)}>
              <div className={styles.sidebar__personal}>
                <p className={styles.sidebar__personal - name}>Sergey.Ivanov</p>
                <div className={styles.sidebar__icon}>
                  <svg>
                    <use xlinkHref="img/icon/sprite.svg#logout" />
                  </svg>
                </div>
              </div>
              <div className={styles.sidebar__block}>
                <div className={styles.sidebar__list}>
                  <div className={styles.sidebar__item}>
                    <a className={styles.sidebar__link} href="#">
                      <Image
                        className={styles.sidebar__img}
                        src="/img/playlist01.png"
                        alt="day's playlist"
                        width={250}
                        height={170}
                      />
                    </a>
                  </div>
                  <div className={styles.sidebar__item}>
                    <a className={styles.sidebar__link} href="#">
                      <Image
                        className={styles.sidebar__img}
                        src="/img/playlist02.png"
                        alt="day's playlist"
                        width={250}
                        height={170}
                      />
                    </a>
                  </div>
                  <div className={styles.sidebar__item}>
                    <a className={styles.sidebar__link} href="#">
                      <Image
                        className={styles.sidebar__img}
                        src="/img/playlist03.png"
                        alt="day's playlist"
                        width={250}
                        height={170}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className={styles.bar}>
            <div className={styles.bar__content}>
              <div className={styles.bar__player - progress} />
              <div className={styles.bar__player - block}>
                <div className={classNames(styles.bar__player, styles.player)}>
                  <div className={styles.player__controls}>
                    <div className={styles.player__btn - prev}>
                      <svg className={styles.player__btn - prev - svg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                      </svg>
                    </div>
                    <div
                      className={classNames(
                        styles.player__btn - play,
                        styles._btn
                      )}
                    >
                      <svg className={styles.player__btn - play - svg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-play" />
                      </svg>
                    </div>
                    <div className={styles.player__btn - next}>
                      <svg className={styles.player__btn - next - svg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-next" />
                      </svg>
                    </div>
                    <div
                      className={classNames(
                        styles.player__btn - repeat,
                        styles._btn - icon
                      )}
                    >
                      <svg className={styles.player__btn - repeat - svg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                      </svg>
                    </div>
                    <div
                      className={classNames(
                        styles.player__btn - shuffle,
                        styles._btn - icon
                      )}
                    >
                      <svg className={styles.player__btn - shuffle - svg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                      </svg>
                    </div>
                  </div>
                  <div
                    className={classNames(
                      styles.player__track - play,
                      styles.track - play
                    )}
                  >
                    <div className={styles.track - play__contain}>
                      <div className={styles.track - play__image}>
                        <svg className={styles.track - play__svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note" />
                        </svg>
                      </div>
                      <div className={styles.track - play__author}>
                        <a
                          className={styles.track - play__author - link}
                          href="http://"
                        >
                          Ты та...
                        </a>
                      </div>
                      <div className={styles.track - play__album}>
                        <a
                          className={styles.track - play__album - link}
                          href="http://"
                        >
                          Баста
                        </a>
                      </div>
                    </div>
                    <div className={styles.track - play__like - dis}>
                      <div
                        className={classNames(
                          styles.track - play__like,
                          styles._btn - icon
                        )}
                      >
                        <svg className={styles.track - play__like - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                      </div>
                      <div
                        className={classNames(
                          styles.track - play__dislike,
                          styles._btn - icon
                        )}
                      >
                        <svg className={styles.track - play__dislike - svg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={classNames(
                    styles.bar__volume - block,
                    styles.volume
                  )}
                >
                  <div className={styles.volume__content}>
                    <div className={styles.volume__image}>
                      <svg className={styles.volume__svg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                      </svg>
                    </div>
                    <div
                      className={classNames(
                        styles.volume__progress,
                        styles._btn
                      )}
                    >
                      <input
                        className={classNames(
                          styles.volume__progress - line,
                          styles._btn
                        )}
                        type="range"
                        name="range"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className={styles.footer} />
        </div>
      </div>
    </>
  );
}
