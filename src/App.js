import React from "react";
import {
  // BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";

// custom history
import { createBrowserHistory } from "history";
import HomePage from "./pages/User/HomePage";
import UserTemplate from "./templates/User/UserTemplate";

export const customNavigate = createBrowserHistory();

const App = () => {
  return (
    <HistoryRouter history={customNavigate}>
      <Routes>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="template" element={<UserTemplate />}></Route>
      </Routes>
    </HistoryRouter>
  );
};

export default App;
