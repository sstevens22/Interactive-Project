import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Tarot from './components/pages/Tarot';
import Horoscope from './components/pages/Horoscope';
import SignUp from './components/pages/SignUp';
import Donate from'./components/pages/Donate';
import Store from './Store';


function App() {
  return (
    <>
    <Store>
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/tarot' component={Tarot} />
       <Route path='/horoscope' component={Horoscope} />
       <Route path='/donate' component={Donate} />
       <Route path='/sign-up' component={SignUp} />
     </Switch>
     </Router>
     </Store>
    </>
  );
}

export default App;
