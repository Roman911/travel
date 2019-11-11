import { StyleSheet } from 'aphrodite/no-important';
import basesImg from './../../asets/basesImg.png';

const background = `url(${ basesImg }) no-repeat`;

export default StyleSheet.create({
  nav: {
    background: '#fff',
    boxShadow: '0 0 5px 2px gray'
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
  search: {
    background: background,
    backgroundPosition: '-85px 0',
    width: 17,
    height: 22
  },
  bell: {
    background: background,
    backgroundPosition: '-85px -25px',
    width: 18,
    height: 22
  },
  imgAv: {
    borderRadius: '50%',
    margin: '0 10px',
    width: 40
  },
  user: {
    background: background,
    backgroundPosition: '-85px -60px',
    width: 22,
    height: 22,
    margin: '0 10px'
  },
  caret: {
    background: background,
    backgroundPosition: '-85px -50px',
    width: 14,
    height: 8
  }
})