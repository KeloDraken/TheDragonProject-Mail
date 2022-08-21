import { store } from "@risingstack/react-easy-state";

export const userAuth = store({
  isLoggedIn: false,
  hasImported: false,
});
