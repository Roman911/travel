import React, { useState, Fragment } from 'react';
import logo from "../../item/logo.png";
import search from "../../item/search.png";
import userIcon from "../../item/user.png";
import { Link } from "react-router-dom";

import { css } from 'aphrodite/no-important';
import baseStyles from './../../styles/index'
import styles from './styles';

export default function() {

  let [user] = useState({
    value: false
  });

  return <nav className={ css(styles.nav) }>
    <div className={ css(baseStyles.wrapper, styles.wrapper) }>
      <div className={ css(styles.wrapper) }>
        <img src={ logo } alt=""/>
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
      <div className={css(styles.wrapper)}>
        <div className={css(styles.wrapper, styles.wrapperInput)}>
          <input placeholder='Search' type="text"/>
          <button>
            <img src={ search } alt=""/>
          </button>
        </div>
        <div>
          {
            user.value ? <p>1234</p> :
              <Link to="/userId">
                <div className={css(styles.wrapper)}>
                  Log In
                  <img src={ userIcon } alt=""/>
                </div>
              </Link>
          }
        </div>
      </div>
    </div>
  </nav>
}