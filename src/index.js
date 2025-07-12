import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Invoices from "./Components/Invoices/Invoices";
import SideBar from "./Components/SideBar/SideBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="Page">
          <SideBar />
          <Invoices />
      </div>
  </React.StrictMode>
);
console.log(1)
