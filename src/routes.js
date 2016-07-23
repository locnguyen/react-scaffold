import React from 'react';
import {Router, Route} from 'react-router';
import App from './App';

export default function getRoutes(checkAuth, history) {
    return (
        <Route path="/" component={App}/>
    );
}
