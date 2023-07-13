import React from "react";
import {
  // BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";

// custom history
import { createBrowserHistory } from "history";
import HomePage from "./pages/HomePage";

export const customNavigate = createBrowserHistory();

const App = () => {
  return (
    <HistoryRouter history={customNavigate}>
      <Routes>
        <Route path="home" element={<HomePage />}></Route>
      </Routes>
    </HistoryRouter>
  );
};

export default App;
