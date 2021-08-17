import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,HashRouter } from 'react-router-dom';
 
import App from './containers/App/index';
 
 
ReactDOM.render(
       <Router >
      <HashRouter>

      <App />
      </HashRouter>

    </Router>
 
   ,
  document.getElementById('root')); 