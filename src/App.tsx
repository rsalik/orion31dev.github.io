import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

const IconStyle = {
  fontSize: window.innerWidth > 600 ? '3vmin' : '5vmin',
};

export function mergeIconStyles(style: any) {
  return Object.assign(style, IconStyle);
}

export default App;
