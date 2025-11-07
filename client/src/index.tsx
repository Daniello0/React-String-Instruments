import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/main/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router";
import AddInstruments from './views/add_instrument/AddInstruments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/add-instruments" element={<AddInstruments />} />
              <Route path="*" element={<div><h1>Страница не найдена (404)</h1></div>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
