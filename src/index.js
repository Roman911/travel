import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/uk';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

moment.locale('uk');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
