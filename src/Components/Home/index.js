import React from 'react';

import News from './../News'
import { css } from 'aphrodite/no-important';
import baseStyles from './../../styles/index';
import styles from './styles';

export default function () {
  return <section>
    <div className={ css(styles.header) } />
    <div className={ css(baseStyles.wrapper, styles.wrapper) }>
      <div className={ css(styles.news) }>
        <News/>
        <News/>
        <News/>
      </div>
      <div className={ css(styles.content) }>
        about us Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore ducimus error, ipsum iste laborum necessitatibus odit quisquam? Asperiores harum, illum incidunt minima mollitia natus perferendis quas sapiente sequi ullam?
      </div>
    </div>
  </section>
}