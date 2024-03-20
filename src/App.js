import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Abhishek Pati",
    };
    setUserName(data.name);
  }, []);
  // If, we want the above updated data to be provided to ur App then we have to wrap our component inside UserContext.Provider which is given by React to us.And inside that we pass the value that we want to be used in our Component.
  // Here along with loggedInUser we also passed setUserName function and now we can see that in console also.So we can extract both now and that we have done in Body.js
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "Superman" }}> */}
          {/* Uncomment the above and we notice that the component which we are wrapping inside UserContext.Provider that component will be take the value of that particular UserContext.Provider. */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// const appRouter = createBrowserRouter([
//   { path: "/", element: <AppLayout />, errorElement: <Error /> },
//   { path: "/about", element: <About /> },
//   { path: "/contact", element: <Contact /> },
// ]);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            {" "}
            <About />{" "}
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      { path: "/restraunts/:resId", element: <RestrauntMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
