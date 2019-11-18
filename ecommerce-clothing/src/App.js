import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndUpPage from './pages/SignInAndUp/SignInAndUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndUpPage} />
      </Switch>
    </div>
  );
}

export default App;
