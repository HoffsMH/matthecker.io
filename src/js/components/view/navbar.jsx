import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <div className="w-20" aria-label="main navigation">
    <Link href="/about" to="/about">
      About
    </Link>
  </div>
);

export default NavBar;
