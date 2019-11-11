import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';

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
          <button className={ css(styles.search) } />
        </div>
        <div>
          { user.value ?
            <Link to="/userId">
              <div className={ css(baseStyles.flex) }>
                <div className={ css(styles.bell) } />
                <img className={ css(styles.imgAv) } src={ avatar } alt=""/>
                <div className={ css(styles.caret) } />
              </div>
            </Link> :
              <Link to="/login">
                <div className={ css(baseStyles.flex) }>
                  Sign In
                  <div className={ css(styles.user) }/>
                </div>
              </Link> }
        </div>
      </div>
    </div>
  </nav>
}