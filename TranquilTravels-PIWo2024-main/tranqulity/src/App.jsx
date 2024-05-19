import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./layout/Main";
import ExplorePage from "./pages/ExplorePage";
import HotelDetailPage from "./pages/HotelDetailPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<ExplorePage />} />
          <Route path="hotel/:hotelId" element={<HotelDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
