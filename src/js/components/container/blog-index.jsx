import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class BlogIndex extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { gistLinks: [] };
  }

  async componentWillMount() {
    const response = await fetch('https://api.github.com/users/HoffsMH/gists');
    const json = await response.json();
    const gistLinks = _.map(json, gist => (<li><Link key={gist.url} to={gist.url}>{gist.id}</Link></li>));

    this.setState({ gistLinks });
  }


  render() {
    const { state: { gistLinks } } = this;

    return (
      <ul>
        {gistLinks}
      </ul>
    );
  }
}


export default BlogIndex;
