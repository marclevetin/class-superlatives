import React from "react";

export const Row = ({ fluid, children }) =>
  <div className={`row${fluid ? "-fluid" : ""} display-flex`}>
    {children}
  </div>;
