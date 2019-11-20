import { StyleSheet } from 'aphrodite/no-important';

import { widthXL, heightIconXL, colorIcons } from "../variabels";

export default StyleSheet.create({
  wrapper: {
    maxWidth: widthXL,
    margin: '0 auto',
    padding: '10px 20px'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imgAv: {
    borderRadius: '50%',
    width: 40
  },
  icon: {
    height: heightIconXL,
    width: 'auto !important',
    color: colorIcons
  },
  name: {
    paddingBottom: 3,
    fontSize: 14
  },
  time: {
    fontSize: 12
  },
  views: {
    fontSize: 12
  },
  comment: {
    fontSize: 12,
    marginLeft: 15
  }
})