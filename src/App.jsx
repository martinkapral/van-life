import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans from "../pages/Vans/Vans";
import VanDetail from "../pages/Vans/VanDetail";
import VanInfo from "../pages/Vans/VanInfo";
import VanPricing from "../pages/Vans/VanPricing";
import VanPhotos from "../pages/Vans/VanPhotos";

import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />}>
            <Route index element={<VanInfo />} />
            <Route path="pricing" element={<VanPricing />} />
            <Route path="photos" element={<VanPhotos />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
