import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Tarot from './components/pages/Tarot';
import Horoscope from './components/pages/Horoscope';
import SignUp from './components/pages/SignUp';
import Donate from'./components/pages/Donate';


function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
<<<<<<< HEAD:client/src/App.js
       <Route path='/tarot' component={Tarot} />
       <Route path='/horoscope' component={Horoscope} />
       <Route path='/donate' component={Donate} />
       <Route path='/sign-up' component={SignUp} />
=======
       <Route path='/services' component={Tarot} />
       <Route path='/products' component={Horoscope} />
       {/* <Route exact path="/horoscope/:value" component={Horoscope} /> */}
       <Route path='/Donate' component={Donate} />
       <Route path='/sign-up' components={SignUp} />
>>>>>>> 2629515f6f2409e36ee387d06ac5cf80d80c4888:src/App.js
     </Switch>
     </Router>
    </>
  );
}

export default App;
