import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router";
import Reg from './views/Reg';
import Log from "./views/Log";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/:user_id" element={<App  />} />
              <Route path="/" element={<App />} />
              <Route path="/registration" element={<Reg />} />
              <Route path="/login" element={<Log />} />
              <Route path="*" element={<div><h1>Страница не найдена (404)</h1></div>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
