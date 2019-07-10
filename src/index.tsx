import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import AppRouter from "./Router";
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Provider } from 'mobx-react';
import moxStore from './store/store';
import '../src/assets/css/common.less';

moment.locale('zh-cn');
ReactDOM.render(
  <Provider {...moxStore}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
