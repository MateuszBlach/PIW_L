import { Outlet } from "react-router-dom";

import Header from "../Header";

const Main = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Main;
