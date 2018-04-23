import { Link } from 'react-router-dom';
import React from 'react';

const HelloCard = () => (
  <section className="full-height hello-card">
    <h3>Hello</h3>
    <h1 className="no-margin kilo">My name is <Link className="stencil no-deco" to="/" href="/">Matt Hecker.</Link></h1>
    <div >I enjoy building things with text.</div>
    <div>I enjoy thinking about human interfaces, dev-ops, systems, people and productivity</div>
    <div className="has-text-centered reg">I have 2 years of experience but more than that fiddling around</div>
  </section>
);

export default HelloCard;
