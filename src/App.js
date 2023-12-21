import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import { lazy, Suspense } from "react";
import UserContext from "./const/UserContext";
import { Provider } from "react-redux";
import appStore from "./const/appStore";
import Cart from "./components/Cart";


const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    setUserName('Subham Kumar');
  }, [])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <Suspense fallback={<h1>Loading.......</h1>}><About /></Suspense>
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/resturants/:resId',
        element: <ResturantMenu />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
