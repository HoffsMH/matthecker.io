import React from 'react';
import _ from 'lodash';
import posts from '../../../md/posts';
import marked from 'marked';

class BlogPostContainer extends React.Component {
  constructor({ match: { params: { id } } }) {
    super(...arguments);
    const post = _.find(posts, post => post.id === id);
    this.state = { post };
  }

  async componentWillMount() {
    fetch(this.state.post.text)
      .then(response => response.text())
      .then(text => this.setState({ text: marked(text) }));
  }

  render() {
    // return (<div>
    //   hi
    // </div>);
    return (
      <div className="ml-20" dangerouslySetInnerHTML={{__html:this.state.text}}>
      </div>
    );
  }
}


export default BlogPostContainer;

