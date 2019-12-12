import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import WorkLayout from 'components/WorkLayout';
import Home from 'components/Home';
import Footer from 'components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/work" component={WorkLayout} exact/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
