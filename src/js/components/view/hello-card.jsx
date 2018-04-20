import { Link } from 'react-router-dom';
import React from 'react';

const HelloCard = () => (
  <section className="hero is-primary is-fullheight ">
    <div className="hero-body">
      <div className="container">
        <h3 className="title has-text-centered">Hello, my name is <a href="/">Matt Hecker.</a></h3>
        <div className="has-text-centered reg">I enjoy working with <a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm">Javascript</a>, and Ruby</div>
        <div className="has-text-centered reg">I am learning about Elixir and Go and Elm</div>
        <div className="has-text-centered reg">I enjoy thinking about building human interfaces, devops, people and productivity</div>
        <div className="has-text-centered reg">I have 2 years of experience but more than that fiddling around</div>
      </div>
    </div>
    <div className="has-text-centered"><Link href="/" to="/">stay a while and listen</Link></div>
  </section>
);

export default HelloCard;
