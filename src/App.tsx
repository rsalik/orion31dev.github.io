import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
