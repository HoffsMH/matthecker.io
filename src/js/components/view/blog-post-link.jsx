import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const BlogPostLink = (props) => {
  const {
    id,
    description,
    files,
    created_at: createdAt,
  } = props;
  const path = `/${id}`;
  const firstFileName = Object.keys(files)[0];
  const date = moment(createdAt).format('MMMM Do YYYY dddd');
  const linkText = (description && description !== '') ?
    description :
    firstFileName;

  return (
    <li>
      <Link href={path} to={path}>{linkText}</Link>
      <div className='micro'>{date}</div>
    </li>);
};

BlogPostLink.propTypes = {
  files: PropTypes.object,
  created_at: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};

BlogPostLink.defaultProps = {
  files: {},
  description: '',
  id: '',
  created_at: '',
};

export default BlogPostLink;
