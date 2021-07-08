import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Water from './components/pages/Water'
import Earth from './components/pages/Earth'
import Air from './components/pages/Air'
import Fire from './components/pages/Fire'
import Tarot from './components/pages/Tarot';
import Horoscope from './components/pages/Horoscope';
import WaterSignChat from './components/pages/WaterSignChat'
import EarthSignChat from './components/pages/EarthSignChat'
import AirSignChat from './components/pages/AirSignChat'
import FireSignChat from './components/pages/FireSignChat'
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
       <Route path='/water' component={Water} />
       <Route path='/earth' component={Earth} />
       <Route path='/air' component={Air} />
       <Route path='/fire' component={Fire} />
       <Route path='/waterSign/:id' component={WaterSignChat}/>
       <Route path='/earthSign/:id' component={EarthSignChat}/>
       <Route path='/airSign/:id' component={AirSignChat}/>
       <Route path='/FireSign/:id' component={FireSignChat}/>
     </Switch>
     </Router>
     </Store>
     </ApolloProvider>
    </>
  );
}

export default App;
