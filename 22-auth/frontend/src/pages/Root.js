import {
  Outlet,
  useLoaderData,
  useSubmit,
  // useNavigation
} from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getAuthTokenDuration } from "../helpers/auth";

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    console.log("RootLayout useEffect");
    if (!token) return;

    const timeout = getAuthTokenDuration();
    console.log("timeout", timeout);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, timeout);
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
