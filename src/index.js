import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

// Wrapped App component in Router for react-router configuration.
ReactDOM.render((<Router><App /></Router>), document.getElementById('root'));