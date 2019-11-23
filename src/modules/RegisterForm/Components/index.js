import React from 'react';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';

import loginStyles from '../../../styles/loginStyles';

export default function () {
  return <section className={ css(loginStyles.wrapper) }>
    <Link to="/"><div className={ css(loginStyles.logo) }/></Link>
    <h1 className={ css(loginStyles.title) }>Create your account</h1>
    <form action="/session">
      <div className={ css(loginStyles.wrapperForm) }>
        <p className={css(loginStyles.textP)}>Username</p>
        <input className={ css(loginStyles.input) } type="text"/>
        <p className={css(loginStyles.textP)}>Email address</p>
        <input className={ css(loginStyles.input) } type="text"/>
        <p className={css(loginStyles.textP)}>Password</p>
        <input className={ css(loginStyles.input) } type="password"/>
        <p className={css(loginStyles.textP)}>Confirm password</p>
        <input className={ css(loginStyles.input) } type="password"/>
        <input className={ css(loginStyles.inputSub) } type="submit" value="Sign in"/>
      </div>
    </form>
    <div className={ css(loginStyles.wrapperForm, loginStyles.bottomBlock) }>
      <span className={ css(loginStyles.text) }>Already have an account? </span><Link to="/login"><span className={ css(loginStyles.link) }>Sign in to Travel.</span></Link>
    </div>
  </section>
}