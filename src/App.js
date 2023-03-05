import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import { RouteList } from './RouteList';

const App = (props) => {
  return (
    <Template>
        <Header />

        <RouteList />

        <Footer />
    </Template>
  );
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);