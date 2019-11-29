import React from 'react';

import img from './../../asets/file.jpg';

import { css } from 'aphrodite/no-important';
import baseStyles from './../../styles/index';
import styles from './styles';

import { UserName, ArticleStats } from "../index";

export default function () {
  return <div className={ css(styles.wrapper) }>
    <img className={ css(styles.img) } src={ img } alt=""/>
    <UserName isArticle={ false } />
    <div className={ css(baseStyles.block) }>
      <h1 className={ css(styles.title) }>Winter escapes</h1>
      <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your </p>
    </div>
    <ArticleStats />
  </div>
}