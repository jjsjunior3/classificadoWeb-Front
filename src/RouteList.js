import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About/About';
import { NotFound } from './pages/NotFound/NotFound'
import  { Signin } from './pages/Signin/index.js';
import { SignUp } from './pages/SignUp/index.js';
import { AdPage } from './pages/AdPage';
import { AddAd } from './pages/AddAd/AddAd.js';
import { RouteHandler } from './components/RouteHandler';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ad/:id" element={<AdPage />} />
        <Route
          path="/post-an-ad" 
          element={
            <RouteHandler private>
              <AddAd/>
            </RouteHandler>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}