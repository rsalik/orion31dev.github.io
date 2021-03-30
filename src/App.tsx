import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="content-bump"></div>
      <main>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
  );
}

const IconStyle = {
  fontSize: window.innerWidth > 600 ? '3vmin' : '5vmin',
};

export function mergeIconStyles(style: any) {
  return Object.assign(style, IconStyle);
}

export default App;
