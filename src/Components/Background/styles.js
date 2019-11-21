import { StyleSheet } from 'aphrodite/no-important';
import basesImg from './../../asets/bdHome.jpg';
import bgMap from './../../asets/bgMap.jpg';

const background = `url(${ bgMap }) no-repeat`;

export default StyleSheet.create({
  bg: {
    height: 370,
    background: background,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
})