import { Navigate, useRoutes } from 'react-router-dom';
import Dashboard from 'layouts/dashboard';
import LogoOnlyLayout from 'layouts/LogoOnlyLayout';
import Login from 'modules/auth/login';
import Register from 'modules/auth/register';
import DashboardApp from './modules/dashboard';
import Products from 'modules/product';
import Blog from 'modules/blog';
import User from 'modules/user';
import NotFound from 'modules/not-found';

const Router = () => {
  return useRoutes([
    {
      path: '/dashboard',
      element: <Dashboard />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};

export default Router;
