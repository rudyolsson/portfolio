import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import WorkLayout from 'components/WorkLayout';
import Home from 'components/Home';
import Footer from 'components/Footer';
import { Element } from 'react-scroll';

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Element id='home' name='home'>
        <Home/>
      </Element>
      <Element id='work' name='work'>
        <WorkLayout/>
      </Element>
      <Element id='contact' name='contact'>
        <Footer />
      </Element>
    </>
  );
}

export default App;
