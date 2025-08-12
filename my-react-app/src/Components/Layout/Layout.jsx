import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css';

const Layout = ({ children, pageTitle, pageNumber }) => {
  return (
    <div className="wellcare-app">
      <Header pageTitle={pageTitle} pageNumber={pageNumber} />
      <div className="app-content">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;