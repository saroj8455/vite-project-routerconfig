import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <>
      <div className='min-h-screen flex flex-column surface-ground'>
        {/* Navbar  */}
        <Navbar />
        {/* Content Goes Here like Outlet */}
        <div className='flex flex-column flex-auto'>
          <div className='border-2 border-dashed surface-border border-round surface-section ' />
          <RouterProvider router={router} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
