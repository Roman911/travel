import React from 'react';
import {Link} from "react-router-dom";
import { css } from 'aphrodite/no-important';

import styles from './styles';

export default function () {
  return <section className={ css(styles.wrapper) }>
    <Link to="/"><div className={ css(styles.logo) }/></Link>
    <h1 className={ css(styles.title) }>Sign in to Travel</h1>
    <form action="/session">
      <div className={ css(styles.wrapperForm) }>
        <p>Username or email address</p>
        <input className={ css(styles.input) } type="text"/>
        <p>Password</p>
        <input className={ css(styles.input) } type="password"/>
        <input className={ css(styles.inputSub) } type="submit" value="Sign in"/>
      </div>
    </form>
    <div className={ css(styles.wrapperForm, styles.bottomBlock) }>
      <span className={ css(styles.text) }>New to Travel? </span><Link to="/"><span className={ css(styles.link) }>Create an account.</span></Link>
    </div>
  </section>
}