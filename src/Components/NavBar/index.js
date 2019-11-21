import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faAngleDown, faUser } from "@fortawesome/free-solid-svg-icons";

import avatar from "../../asets/01.jpg";
import baseStyles from './../../styles/index';
import styles from './styles';

export default function() {

  let [user] = useState({
    value: false
  });

  return <nav className={ css(styles.nav) }>
    <div className={ css(baseStyles.wrapper, baseStyles.flex) }>
      <div className={ css(baseStyles.flex) }>
        <div className={ css(styles.logo) } />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Map">Map</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>
      <div className={ css(baseStyles.flex) }>
        <div className={ css(baseStyles.flex, styles.wrapperInput) }>
          <input placeholder='Search' type="text"/>
          <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faSearch }/>
        </div>
        <div>
          { user.value ?
            <Link to="/userId">
              <div className={ css(baseStyles.flex) }>
                <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faBell }/>
                <img className={ css(baseStyles.imgAv) } src={ avatar } alt=""/>
                <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faAngleDown }/>
              </div>
            </Link> :
              <Link to="/login">
                <div className={ css(baseStyles.flex) }>
                  Sign In
                  <FontAwesomeIcon className={ css(baseStyles.icon, styles.user) } icon={ faUser }/>
                </div>
              </Link> }
        </div>
      </div>
    </div>
  </nav>
}