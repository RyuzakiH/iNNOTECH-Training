import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AdminPanel from './AdminPanel/AdminPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AdminPanel />, document.getElementById('root'));
registerServiceWorker();
