import { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Posts from './pages/Posts';
import ErrorPage from './components/ErrorPage';

const AppLayout = () => {
  return (
    <>
      <div className='min-h-screen flex flex-column surface-ground'>
        {/* Navbar  */}
        <Navbar />
        {/* Content Goes Here like Outlet */}
        <div className='flex flex-column flex-auto'>
          <div className='border-2 border-dashed surface-border border-round surface-section ' />
          {/* Render All Children Route */}

          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/posts',
        element: <Posts />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
