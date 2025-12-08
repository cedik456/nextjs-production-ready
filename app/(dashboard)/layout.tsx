import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Dashboard nav
      {children}
    </div>
  );
};

export default DashboardLayout;
