import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  nav: {
    background: '#fff',
    boxShadow: '0 0 5px 2px gray'
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  wrapperInput: {
    borderLeft: '1px solid #333',
    width: 150
  }
})