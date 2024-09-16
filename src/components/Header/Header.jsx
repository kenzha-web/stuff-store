import React from 'react';
import styles from '../../styles/Header.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../utils/routes";
import logo from '../../images/Icons/Logo/logo.svg'
import avatar from '../../images/avatar.jpg'
import {SearchIcon} from "../../images/Icons/Search-icon/SearchIcon";
import {FavouritesIcon} from "../../images/Icons/Favourites-icon/FavouritesIcon";
import {BasketIcon} from "../../images/Icons/Basket-icon/BasketIcon";

export const Header = () => {
    return (
      <div className={styles.header}>
          <div className={styles.logo}>
              <Link to={ROUTES.HOME}>
                  <img src={logo} alt="stuff" />
              </Link>
          </div>
          
          <div className={styles.info}>
              <div className={styles.user}>
                  <div className={styles.avatar} style={{backgroundImage: `url(${avatar})`}} />
                  <div className={styles.username}>Guest</div>
              </div>
              
              <form className={styles.form}>
                  <div className={styles.icon}>
                      <SearchIcon className="icon" />
                  </div>
                  <div className={styles.input}>
                      <input
                        type="search"
                        name="search"
                        value=""
                        placeholder="Search for anything..."
                        autoComplete="off"
                        onChange={() => {}}
                      />
                  </div>
                  {!<div className={styles.box}></div>}
              </form>
              
              <div className={styles.account}>
                  <Link to={ROUTES.HOME} className={styles.favourites}>
                      <FavouritesIcon className={styles["icon-fav"]}/>
                  </Link>
                  <Link to={ROUTES.CART} className={styles.favourites}>
                      <BasketIcon className={styles["icon-cart"]} />
                      <span className={styles.count}>2</span>
                  </Link>
              </div>
          </div>
      </div>
    )
}