import React from 'react';
import _ from 'lodash';
import BlogPostLink from '../view/blog-post-link';
import BlogIndex from '../view/blog-index';
import posts from '../../../md/posts';

class BlogIndexContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { blogLinks: [] };
  }


  async componentWillMount() {
    const blogLinks = _.map(Object.keys(posts), key =>
      <BlogPostLink key={key} {...posts[key]} />);

    this.setState({ blogLinks });
  }

  render() {
    return <BlogIndex {...this.state} />;
  }
}

export default BlogIndexContainer;
