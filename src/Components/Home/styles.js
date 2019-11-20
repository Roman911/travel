import { StyleSheet } from 'aphrodite/no-important';
import basesImg from './../../asets/bdHome.jpg';

const background = `url(${ basesImg }) no-repeat`;

export default StyleSheet.create({
  header: {
    height: 500,
    background: background,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  wrapper: {
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'center'
  },
  news: {
    width: 940,
    display: 'flex',
    flexWrap: 'wrap'
  },
  content: {
    width: 300,
    padding: '0 15px'
  }
})