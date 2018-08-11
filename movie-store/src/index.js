import React from 'react';
import ReactDOM from 'react-dom';
import MovieStore from './MovieStore/MovieStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<MovieStore />, document.getElementById('root'));
registerServiceWorker();
