import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList/TodoList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
