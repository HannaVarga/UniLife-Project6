import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCities from "./pages/AllCities/AllCities";
import CityDetails from "./pages/CityDetails/CityDetails";
import HomeDetailsPage from "./pages/HomeDetailsPage/HomeDetailsPage";
import Favorites from "./pages/Favorites/Favorites";
import FavoriteContextProvider from "./context/favoriteContext";

function App() {
  return (
    <FavoriteContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allCities" element={<AllCities />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/homeDetails/:detailsId" element={<HomeDetailsPage />} />
          <Route path="/cityDetails/:cityId" element={<CityDetails />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </FavoriteContextProvider>
  );
}

export default App;
