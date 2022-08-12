import { store, view } from "@risingstack/react-easy-state";
import { Suspense } from "react";
import { useCookies } from "react-cookie";
import LoggedInStack from "./LoggedIn";
import LoggedOutStack from "./LoggedOut";

export default view(function Router(): JSX.Element {
  const [cookies] = useCookies(["csrftoken"]);

  console.log(cookies.csrftoken);

  const counter = store({
    loggedIn: false,
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
