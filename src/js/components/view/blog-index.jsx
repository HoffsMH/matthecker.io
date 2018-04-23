import React from 'react';
import PropTypes from 'prop-types';


const BlogIndex = (props) => {
  const { blogLinks } = props;
  
  return (<ul className="ml-30">{blogLinks}</ul>);
};

BlogIndex.propTypes = {
  blogLinks: PropTypes.array,
};

BlogIndex.defaultProps = {
  blogLinks: [],
};


export default BlogIndex;
