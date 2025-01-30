import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { UserProvider } from "./utils/usercontext";

const Layout = () => {
  return (
    <>
      <Header />
      <UserProvider>
        <Outlet />
      </UserProvider>
    </>
  );
};

export default Layout;
