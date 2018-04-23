import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <nav className="w-20 box-shadow" aria-label="main navigation">
    <ul className="ml-30 mt-20">
      <li>
        <Link href="/" to="/">
          Posts
        </Link>
      </li>
      <li>
        <Link href="/about" to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
