import {StyleSheet} from 'aphrodite/no-important';
import basesImg from './../../asets/basesImg.png';

const background = `url(${basesImg}) no-repeat`;

export default StyleSheet.create({
  nav: {
    background: '#fff',
    boxShadow: '0 0 5px 2px gray',
    position: 'fixed',
    width: '100%',
    zIndex: 2
  },
  logo: {
    background: background,
    width: 82,
    height: 96
  },
  wrapperInput: {
    borderLeft: '1px solid #333',
    width: 150,
    paddingRight: 20
  },
  user: {
    margin: '0 10px'
  }
})