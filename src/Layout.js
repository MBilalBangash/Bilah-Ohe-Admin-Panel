import React from "react";

import Dashboard from "./pages/Dashboard";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Dashboard />
      <div className="flex-1 p-4">
        {/* Main content goes here */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
