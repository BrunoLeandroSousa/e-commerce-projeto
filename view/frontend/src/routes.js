import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Finish from './Pages/Finish/Finish';
import Checkout from './Pages/checkout/Checkout';
import Orders from './Pages/Orders/Order';

export default function Routes(){
    return(
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/finish" component={Finish} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    );
}
