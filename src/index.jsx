import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { ImageProvider } from "./store/ImageContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ImageProvider>
  </React.StrictMode>
);

