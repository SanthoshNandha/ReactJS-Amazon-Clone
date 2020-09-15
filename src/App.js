import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login.js";
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function App() {

  const [{user}, dispatch] = useStateValue();

  // useEffect hook 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return ()=> {
      unsubscribe();
    }
  }, [])

  console.log("user is >>> ", user);

  return (
    <Router>
      <div className="app">
        <switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>  
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </switch>
      </div>  
    </Router>
   
  );
}

export default App;
