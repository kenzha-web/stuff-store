import React from 'react';
import styles from '../../styles/Footer.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../utils/routes";
import Logo from '../../images/Icons/Logo/logo.svg'
import {YoutubeIcon} from "../../images/Icons/Youtube-icon/YoutubeIcon";
import {FacebookIcon} from "../../images/Icons/Facebook-icon/FacebookIcon";
import {InstagramIcon} from "../../images/Icons/Instagram-icon/InstagramIcon";

export const Footer = () => {
    return (
      <section className={styles.footer}>
          <div className={styles.logo}>
              <Link to={ROUTES.HOME}>
                  <img src={Logo} alt="stuff"/>
              </Link>
        </div>
          <div className={styles.rights}>
            Developed by <a href="https://www.linkedin.com/in/kenzha-web/">kenzha-web</a>
          </div>
          <div className={styles.socials}>
              <a href="https://www.youtube.com/" target="_blank"  rel="noreferrer" >
                <YoutubeIcon />
              </a>
              <a href="https://www.facebook.com/" target="_blank"  rel="noreferrer" >
                  <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/" target="_blank"  rel="noreferrer" >
                  <InstagramIcon />
              </a>
          </div>
      </section>
    )
}