import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const Root = () => (
  <>
    <MainNavigation />
    <main>
      <Outlet />
    </main>
  </>
);

export default Root;
