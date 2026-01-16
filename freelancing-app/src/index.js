import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, Slide } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Slide}

      // ✅ centralized styles
      toastStyle={{
        borderRadius: "6px",          // smaller radius
        fontWeight: "normal",         // normal font weight
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)", // soft shadow
      }}
    />
  </>
);
