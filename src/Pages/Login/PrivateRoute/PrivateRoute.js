import React from 'react';
import { Route, Redirect } from 'react-router';
import {useAuth} from '../../Contexts/AuthProvider';

function PrivateRoute({ children, ...rest }) {
    const { currentUser } = useAuth();
      return (
        <Route
          {...rest}
          render={({ location }) =>
          currentUser ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
    }

export default PrivateRoute;