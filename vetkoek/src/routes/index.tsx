import { view } from "@risingstack/react-easy-state";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { userAuth } from "../store";
import Loading from "./Loading";

const LandingPage = lazy(() => import("../pages/public/Landing"));
const PricingPage = lazy(() => import("../pages/public/Pricing"));
const LoginPage = lazy(() => import("../pages/public/Login"));

const ImboxPage = lazy(() => import("../pages/private/Imbox"));

const HomePage = view((): JSX.Element => {
  if (!userAuth.isLoggedIn) {
    return <LandingPage />;
  }
  return <ImboxPage />;
});

function Navigator(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />

          <Route element={<LoginPage />} path="/accounts/login" />
          <Route element={<PricingPage />} path="/pricing" />

          {/* Authenticated user routes */}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default Navigator;
