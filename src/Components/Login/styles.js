import { StyleSheet } from 'aphrodite/no-important';
import basesImg from './../../asets/basesImg.png';

const background = `url(${ basesImg }) no-repeat`;

export default StyleSheet.create({
  wrapper: {
    width: 340,
    margin: '20px auto'
  },
  logo: {
    background: background,
    width: 82,
    height: 96,
    margin: '0 auto'
  },
  title: {
    textAlign: 'center',
    fontWeight: 100
  },
  wrapperForm: {
    border: '1px solid #d8dee2',
    borderRadius: 5,
    background: '#fff',
    padding: '10px 20px',
    fontSize: 14,
    fontWeight: 600
  },
  input: {
    padding: '6px 8px',
    fontSize: 16,
    color: '#24292e',
    backgroundColor: '#fff',
    border: '1px solid #d1d5da',
    borderRadius: 3,
    boxShadow: 'inset 0 1px 2px rgba(27,31,35,.075)'
  },
  inputSub: {
    margin: '20px 0',
    background: '#4196e0',
    color: '#fff',
    cursor: 'pointer',
    padding: 8,
    transition: '200ms',
    ':hover': {
      background: '#4287d2'
    }
  },
  bottomBlock: {
    marginTop: 15,
    textAlign: 'center'
  },
  text: {
    fontWeight: 100
  },
  link: {
    color: '#0366d6',
    fontSize: 14,
    fontWeight: 100,
    fontStyle: 'italic'
  }
})