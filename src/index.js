import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

// Wrapped App component in Router for react-router configuration.
ReactDOM.render((
    <Router>
        <App/>
    </Router>),
    document.getElementById('root')
);