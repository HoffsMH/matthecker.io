import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" href="/about" to="/about">
        About
      </Link>
    </div>
  </nav>
);

export default Blog;
