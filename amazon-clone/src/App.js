import './App.css';
import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import { Checkout } from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase'
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("the user is:", authUser)
      if(authUser) {
        //user is log in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //user is logout
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/payment">
          <Payment/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
