import React from 'react';
import Date from './../Date/index';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudsmith } from "@fortawesome/free-brands-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import img from './../../asets/file.jpg';
import avatar from "../../asets/01.jpg";

import { css } from 'aphrodite/no-important';
import baseStyles from './../../styles/index';
import styles from './styles';

export default function () {
  return <div className={ css(styles.wrapper) }>
    <img className={ css(styles.img) } src={ img } alt=""/>
    <div className={ css(baseStyles.flex, styles.block) } >
      <div className={ css(styles.left) }>
        <img className={ css(baseStyles.imgAv) } src={ avatar } alt=""/>
        <div className={ css(styles.blockName) }>
          <div className={ css(styles.left) }>
            <span className={ css(baseStyles.name) }>Admin</span>
            <FontAwesomeIcon className={ css(styles.crown) } icon={ faCrown }/>
          </div>
          <Date date='Sun Apr 21 2019 21:30:07' />
        </div>
      </div>
      <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faCloudsmith }/>
    </div>
    <div className={ css(styles.block) }>
      <h1 className={ css(styles.title) }>Winter escapes</h1>
      <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your </p>
    </div>
    <div className={ css(baseStyles.flex, styles.block, styles.bottom) }>
      <div>
        <span className={ css(baseStyles.views) }>0 views</span>
        <span className={ css(baseStyles.comment) }>Write a comment</span>
      </div>
      <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faHeart }/>
    </div>
  </div>
}