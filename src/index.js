import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sidenav from './Sidenav'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Sidenav />, document.getElementById('repos'));
registerServiceWorker();
