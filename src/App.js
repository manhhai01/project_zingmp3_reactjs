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
import TrendsPage from "./pages/User/TrendsPage";
import ProfilePage from "./pages/User/ProfilePage";
import RecentPage from "./pages/User/RecentPage";
import FavoritePage from "./pages/User/FavoritePage";
import FavoriteSingerPage from "./pages/User/FavoriteSingerPage";
import PlaylistPage from "./pages/User/PlaylistPage";
import AlbumPage from "./pages/User/AlbumPage";
import WeekChartPage from "./pages/User/WeekChartPage";

export const customNavigate = createBrowserHistory();

const App = () => {
  return (
    <HistoryRouter history={customNavigate}>
      <Routes>
      <Route path="" element={<UserTemplate />}>
          <Route index element={<HomePage />}></Route>
          <Route path="ca-nhan" element={<ProfilePage />}></Route>
          <Route path="thinh-hanh" element={<TrendsPage />}></Route>
          <Route path="kham-pha" element={<HomePage />}></Route>
          <Route path="nghe-gan-day" element={<RecentPage />}></Route>
          <Route path="bai-hat-yeu-thich" element={<FavoritePage />}></Route>
          <Route path="ca-si-yeu-thich" element={<FavoriteSingerPage />}></Route>
          <Route path="danh-sach-phat" element={<PlaylistPage />}></Route>
          <Route path="album">
              <Route path=":title">
                <Route path=":pid" element={<AlbumPage />}></Route>
              </Route>
          </Route>
          <Route path="playlist">
              <Route path=":title">
                <Route path=":pid" element={<AlbumPage />}></Route>
              </Route>
          </Route>
          <Route path="zing-chart-tuan">
              <Route path=":title">
                <Route path=":zcid" element={<WeekChartPage />}></Route>
              </Route>
          </Route>
          <Route path="*" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default App;
