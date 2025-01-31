import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import List from "./components/List";

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
      {
        path: "/todo",
        element: (
          <PrivateRoute>
            <List />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default App;
