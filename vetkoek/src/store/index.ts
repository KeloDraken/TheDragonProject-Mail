import { store } from "@risingstack/react-easy-state";

export const recommendedPostsList = store({
  data: [],
});
export const updatesList = store({
  data: [],
});
export const userAuth = store({
  isLoggedIn: false,
});