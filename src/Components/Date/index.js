import React from 'react';
import {css} from "aphrodite";
import baseStyles from "../../styles";
import { formatDistanceToNow } from "date-fns";
import ruLocale from 'date-fns/locale/ru';

export default function ({ date }) {
  return <span className={css(baseStyles.time)}>
    { formatDistanceToNow(new Date(date), { addSuffix: true, locale: ruLocale }) }
  </span>
}