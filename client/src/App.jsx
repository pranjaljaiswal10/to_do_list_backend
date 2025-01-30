import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default App;
