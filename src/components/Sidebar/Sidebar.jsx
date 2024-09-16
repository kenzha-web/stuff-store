import React from 'react';
import styles from '../../styles/Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export const Sidebar = () => {
    const {list} = useSelector(({categories}) => categories)
    
    return (
      <section className={styles.sidebar}>
          <div className={styles.title}>CATEGORIES</div>
          <nav>
              <ul className={styles.menu}>
                  {list.filter((_, i) => i < 7).map(({id, name}) => (
                    <li key={id}>
                        <NavLink
                          className={({isActive}) => `${styles.link} ${isActive ? styles.active : ""}`}
                          to={`/categories/${id}`}>{name}</NavLink>
                    </li>
                  ))}
              </ul>
          </nav>
          
          <div className={styles.footer}>
              <a
                href="/help"
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                  Help
              </a>
              <a
                href="/terms"
                className={styles.link}
                target="_blank"
                rel="noreferrer"
                style={{textDecoration: "underline"}}
              >
                  Terms & Conditions
              </a>
          </div>
      </section>
    )
}