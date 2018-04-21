import { Link } from 'react-router-dom';
import React from 'react';

const HelloCard = () => (
  <section className="hero is-primary  is-fullheight ">
    <div className="hero-body">
      <div className="container">
        <h3 className="title has-text-centered">Hello, my name is <Link to="/" href="/">Matt Hecker.</Link></h3>
        <div className="has-text-centered reg">I enjoy building things with text.</div>
        <div className="has-text-centered reg">I enjoy thinking about human interfaces, dev-ops, systems, people and productivity</div>
        <div className="has-text-centered reg">I have 2 years of experience but more than that fiddling around</div>
      </div>
    </div>
  </section>
);

export default HelloCard;
