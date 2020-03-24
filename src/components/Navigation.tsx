import React from "react";
import { Link } from "react-router-dom";

//<Link /> allows me to direct the destination by cliking that links
function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
