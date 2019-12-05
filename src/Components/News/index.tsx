import React from 'react';

import img from '../../assets/file.jpg';

import { css } from 'aphrodite/no-important';
import baseStyles from '../../styles/index';
import styles from './newsStyles';

import { UserName, ArticleStats } from "../index";

export const News:React.FC = () => {
  return <div className={ css(styles.wrapper) }>
    <img className={ css(styles.img) } src={ img } alt=""/>
    <UserName isArticle={ false } />
    <div className={ css(baseStyles.block) }>
      <h2>Winter escapes</h2>
      <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your </p>
    </div>
    <ArticleStats isArticle={ false } />
  </div>
};