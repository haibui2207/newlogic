import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { PATHS } from './paths';
import { Home, Consents } from './pages';

const Routes = () => {
  const routes = useRoutes([
    { path: PATHS.HOME, element: <Home /> },
    { path: PATHS.CONSENTS, element: <Consents /> },
    { path: '*', element: <Navigate to={PATHS.HOME} /> },
  ]);

  return routes;
};

export default Routes;
