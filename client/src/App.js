/**
 * Main entry file to load application
 * @class App
 * @author ajay kumar
 * 
 * @coyright Bricksadvisors copyrights 2019 | Bricksadvisors Pvt. Ltd.
 * 
 */
import React from 'react'
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './components/common/Layout'

//Importing All required pages on main file
import {
  Home,
  About,
  Contact,
  Developer,
  SearchResult,
  InteriorDesign,
  PrivacyPolicy,
  NotFound,
  MyAccount
} from './components/pages';

import store from "./store";

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-us" component={About} />
              <Route path="/my-account" component={MyAccount} />
              <Route path="/contact-us" component={Contact} />
              <Route path="/coding-machine" component={Developer} />
              <Route path="/search-results" component={SearchResult} />
              <Route path="/interior-design" component={InteriorDesign} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;