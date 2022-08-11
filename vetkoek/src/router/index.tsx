import { Suspense } from "react";
import LoggedOutStack from "./LoggedOut";

export default function Router() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <LoggedOutStack />
    </Suspense>
  );
}
