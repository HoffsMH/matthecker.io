import { Link } from 'react-router-dom';
import React from 'react';

const BlogPostLink = (props) => {
  const {
    url,
    content,
    created,
    name,
    description
  } = props;


  return (
    <li>
      <Link href={url} to={url}>{name}</Link>
      <div>{description}</div>
      <div className='micro'>{created}</div>
    </li>);
};

export default BlogPostLink;
