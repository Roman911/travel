import React from 'react';
import moment from 'moment';
import { css } from "aphrodite";

import styles from "./styles";

export default function ({ date, format }) {
  return <span className={ css(styles.time) }>
    <p>{moment(date).format(format)}</p>
  </span>
}