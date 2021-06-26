import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import WorkLayout from 'components/WorkLayout';
import Home from 'components/Home';
import Footer from 'components/Footer';
import { Element } from 'react-scroll';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => {
  const theme: any = {
    charcoal: "rgba(53, 53, 53, 1)",
    lightGreen: "#e0ebe8",
    mediumGreen: "#45b29a",
    darkGreen:"#1e836c",
    darkBlue: "#2b3d51",
};

  return (
    <>
    <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
