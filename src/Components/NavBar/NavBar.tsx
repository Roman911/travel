import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faAngleDown, faUser } from "@fortawesome/free-solid-svg-icons";

import { Language, DropdownMenu } from "../index";

import avatar from "../../assets/01.jpg";
import baseStyles from '../../styles/index';
import styles from './navBarStyles';

import { baseText } from '../../assets/baseUK';

export const NavBar: React.FC = () => {

  let [user] = useState({
    value: true
  });

  const [dropdown, setDropdown] = useState(false);

  function handleClick() {
    !dropdown ? setDropdown(true) : setDropdown(false)
  }

  const links = baseText.navBar.map((item, index) => {
    return <li key={ index }>
      <Link to={ item.path }>{ item.title }</Link>
    </li>
  });

  return <nav className={ css(styles.nav) }>
    <div className={ css(baseStyles.wrapper, baseStyles.flexSB) }>
      <div className={ css(baseStyles.flexSB) }>
        <div className={ css(styles.logo) } />
        <ul>
          { links }
        </ul>
      </div>
      <div className={ css(baseStyles.flexSB) }>
        <div className={ css(baseStyles.flexSB, styles.wrapperInput) }>
          <input placeholder='Search' type="text"/>
          <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faSearch }/>
        </div>
        { user.value ?
          <div className={ css(baseStyles.flex) }>
            <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faBell }/>
            <div className={ css(baseStyles.flex, styles.userItem) } onClick={ handleClick }>
              <img className={ css(baseStyles.imgAv, styles.img) } src={ avatar } alt=""/>
              <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faAngleDown }/>
              { dropdown ? <DropdownMenu /> : '' }
            </div>
          </div> :
          <Link to="/login">
            <div className={ css(baseStyles.flexSB) }>
              Sign In
              <FontAwesomeIcon className={ css(baseStyles.icon, styles.user) } icon={ faUser }/>
            </div>
          </Link>
        }
        <Language />
      </div>
    </div>
  </nav>
};