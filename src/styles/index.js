import { StyleSheet } from 'aphrodite/no-important';

import { widthXL } from "../variabels";

export default StyleSheet.create({
  wrapper: {
    maxWidth: widthXL,
    margin: 'auto',
    padding: '10px 20px'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})