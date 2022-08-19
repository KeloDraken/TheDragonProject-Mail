import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, LoginPage } from "./pages";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<LoginPage />} path="/accounts/login" />
      </Routes>
    </Router>
  );
}

export default App;
