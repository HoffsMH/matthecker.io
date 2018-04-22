import React from 'react';
import PropTypes from 'prop-types';


const BlogIndex = (props) => {
  const { blogLinks } = props;

  return (<ul>{blogLinks}</ul>);
};

BlogIndex.propTypes = {
  blogLinks: PropTypes.array
};


export default BlogIndex;
