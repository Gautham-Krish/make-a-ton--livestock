import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        GO-GREEN
      </a>
      <ul>
        <li>
          <a href="/signup">SignUp</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
