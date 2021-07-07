import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Tarot from './components/pages/Tarot';
import Horoscope from './components/pages/Horoscope';
import SignUp from './components/pages/SignUp';
import Donate from'./components/pages/Donate';
import Login from './components/pages/Login';
import Store from './Store';
require("dotenv").config();

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Store>
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/tarot' component={Tarot} />
       <Route path='/horoscope' component={Horoscope} />
       <Route path='/donate' component={Donate} />
       <Route path='/sign-up' component={SignUp} />
       <Route path='/login' component={Login}/>
     </Switch>
     </Router>
     </Store>
     </ApolloProvider>
    </>
  );
}

export default App;
