import React,  { useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51P52NNSJ50g020uXpKcU3ghE3H9CKB7ObXfAqZNHc0dvP9c69Ya65gZIlo2by23Cw4UMt3Fmpg7DMxGiAR2dMVOf00blYaIGZV'
);

function App() {
  const [{}, dispatch] = useStateValue();

  //like if statement in react
  useEffect(() => {
    // Will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log(`The USER IS >>>`, authUser);
  
      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);
  
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
