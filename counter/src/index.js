import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter/Counter';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();