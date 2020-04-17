import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     console.log('User Auth ', userAuth);
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   }

    //   else {
    //     setCurrentUser(userAuth);
    //   }
    // });

    // console.log('UNSUBSCRIBED AUTH ', this.unsubscribeFromAuth);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('Unsubscribed auth ', this.unsubscribeFromAuth);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact
            path="/signin"
            render={() =>
              currentUser ?
                (<Redirect to="/" />)
                :
                (<SignInAndUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(App);
