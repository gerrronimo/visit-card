import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { Home, Contact } from "./components/modules";
import { Header } from "./components/shared";

import './index.sass';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <div className="container">
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </div>

);

reportWebVitals();
