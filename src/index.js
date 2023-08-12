import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Sidebar from './components/Sidebar';
import { Outlet, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import NotFound from './Pages/NotFound';

const AppLayout = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
  const boxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return(
    <>
      <div ref={boxRef}>
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
        </div>
      <Outlet />
    </>
)};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "*",
        element:<NotFound/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

