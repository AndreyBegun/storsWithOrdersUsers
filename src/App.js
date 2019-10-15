import React from 'react';
import s from './App.module.css';
import Header from './components/header/header';
import Users from './components/users/users';
import Orders from './components/orders/orders';
import {Route} from "react-router-dom";


function App(props) {
  return (
    <div className={s.App}>
      <Header {...props}/>
      <Route path ='/users' render={() => <Users/>}/>
      <Route path='/orders' render={() => <Orders/>}/>
    </div>
  );
}

export default App;
