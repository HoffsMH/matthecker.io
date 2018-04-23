import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../view/navbar';
import BlogIndex from './blog-index';
import BlogPost from './blog-post';

const Blog = ({ location: { pathname } }) => {
  if (pathname === '/about') {
    return null;
  }
  return (
    <div className="full-height is-flex flex-column">
      <div className="slim-bar"></div>
      <div className="is-flex full-height blog-container">
        <NavBar />
        <Route exact path="/" component={BlogIndex} />
        <Route path="/posts/:id" component={BlogPost} />
      </div>
      <div className="slim-bar"></div>
    </div>
  );
};

export default Blog;
