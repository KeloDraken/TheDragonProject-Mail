import { store, view } from "@risingstack/react-easy-state";
import { Suspense } from "react";
import LoggedInStack from "./LoggedIn";
import LoggedOutStack from "./LoggedOut";

export default view(function Router(): JSX.Element {
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
