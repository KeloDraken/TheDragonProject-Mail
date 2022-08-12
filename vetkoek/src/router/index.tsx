import { store, view } from "@risingstack/react-easy-state";
import { Suspense } from "react";
import { useCookies } from "react-cookie";
import LoggedInStack from "./LoggedIn";
import LoggedOutStack from "./LoggedOut";

export default view(function Router(): JSX.Element {
  const [cookies] = useCookies(["csrftoken"]);

  const counter = store({
    loggedIn: cookies.csrftoken !== null && cookies.csrftoken !== undefined,
  });

  function Stack(): JSX.Element {
    if (counter.loggedIn) return <LoggedInStack />;
    return <LoggedOutStack />;
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Stack />
    </Suspense>
  );
});
