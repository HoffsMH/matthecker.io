import React from 'react';
import _ from 'lodash';
import BlogPostLink from '../view/blog-post-link';
import BlogIndex from '../view/blog-index';
import fetchBlogInfo from '../../lib/fetch-blog-info';

class BlogIndexContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { blogLinks: [] };
  }


  async componentWillMount() {
    const blogInfo = await fetchBlogInfo();
    const blogLinks = _.map(blogInfo, blogPost =>
      (<BlogPostLink key={blogPost.id} {...blogPost} />));

    this.setState({ blogLinks });
  }

  render() {
    const { state } = this;
    return <BlogIndex {...state} />;
  }
}


export default BlogIndexContainer;
