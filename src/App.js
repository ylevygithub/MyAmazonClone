import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
  from 'react-router-dom';
import Checkout from  './Checkout'
import Login from './Login'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51HyiggKjmECxXMJEG7HiUqacttvDrxHcLqNJeasm7jqmTGHXv3ImAWG8y0IP0wOM6RZIw3UAIsjyKPorxuXtCyTQ007JgIQV2q"
);

function App() {
  const [{}, dispatch] = useStateValue()

  // our powerfull listener who is always listenning
  useEffect(() => {
    //will only run once when the app component loads... if we have []
    //but if we have [basket], it will run every time the basket changes

    auth.onAuthStateChanged(authUser => {//whenever the authentication changes it will give us the authenticate user
      console.log('The user is >>> ', authUser)

      if (authUser) {
        //the user just logged in || the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM Convention
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>{/*Elements:  We use Hire order function to wrap the payment */}
              <Payment/>
            </Elements>
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/'>
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
