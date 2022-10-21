import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import { Layout, BubbleLayout } from 'layouts/components';
import Login from 'modules/auth/login';
import Register from 'modules/auth/register';
import Dashboard from 'modules/dashboard';
import Products from 'modules/product';
import Blog from 'modules/blog';
import User from 'modules/user';
import NotFound from 'modules/not-found';
import Form from 'modules/form';

const Router = () => {
  const { pathname } = useLocation();
  const DynamicLayout = () => {
    if (pathname === '/login' || pathname === '/register' || pathname === '/not-found') {
      return <BubbleLayout />;
    } else {
      return <Layout />;
    }
  };
  return useRoutes([
    {
      path: '/',
      element: <DynamicLayout />,
      children: [
        { path: 'form', element: <Form /> },
        { path: '', element: <Dashboard /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'not-found', element: <NotFound /> },
        { path: '*', element: <Navigate to="/not-found" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};

export default Router;
