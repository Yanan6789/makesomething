import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom'

import './index.css';
import App from './App';
import Main from './Main'
import HomePage from './context'
import Model from './Model'

ReactDOM.render(<Model/>, document.getElementById('root'));

