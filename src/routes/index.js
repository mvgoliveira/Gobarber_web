import React, { useEffect } from 'react';
import { Switch, withRouter, useHistory } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

function Routes() {

   const history = useHistory();

   useEffect(
      () => {
         history.block((location, action) =>
            action !== "PUSH" ||
            getLocationId(location) !== getLocationId(history.location)
         );
      }, []
   );


   function getLocationId({ pathname, search, hash }) {
      return pathname + (search ? "?" + search : "") + (hash ? "#" + hash : "");
   }

   return (
      <Switch>
         <Route path="/" exact component={SignIn} />
         <Route path="/register" component={SignUp} />
         <Route path="/dashboard" component={Dashboard} isPrivate />
         <Route path="/profile" component={Profile} isPrivate />
      </Switch>
   )
}

export default withRouter(Routes);