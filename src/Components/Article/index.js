import React from 'react';
import { css } from 'aphrodite/no-important';

import baseStyles from './../../styles/index';
import styles from './styles';

import { UserName, InfoBar, ArticleStats } from "../index";

export default function () {
  return <div className={ css(baseStyles.wrapper, baseStyles.flexVFS) }>
    <div className={ css(styles.wrapper) }>
      <UserName isArticle={ true } />
      <ArticleStats isArticle={ true } />
    </div>
    <InfoBar />
  </div>
}