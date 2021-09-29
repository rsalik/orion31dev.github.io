import React from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
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
