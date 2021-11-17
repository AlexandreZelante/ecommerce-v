import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      
        <Route exact path="/" component={Dashboard} />
     
    </BrowserRouter>
  );
}
