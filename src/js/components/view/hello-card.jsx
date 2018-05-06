import React from 'react';
// import ColorThief from 'colorthief/dist/color-thief.min';
import myImage from '../../../../public/images/mountains.jpeg';

class HelloCard extends React.Component {
  constructor() {
    super(...arguments);
    // 1440x758
    const backgroundStyle = {
      backgroundImage: `url(${myImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    this.state = {
      backgroundStyle,
    };
  }

  render() {
    return (
      <section className="hello-card full-height is-flex" style={this.state.backgroundStyle} >
        <div className="large" >Hello</div>
        <div className="no-margin kilo">
          My name is Matt Hecker
        </div>
        <div>I enjoy building things with text.</div>
        <div>
          I enjoy thinking about human interfaces,

          dev-ops,

          systems,people and productivity
        </div>
        <div className="has-text-centered reg">
          I have 2 years of experience but more than that fiddling around
        </div>
      </section>
    );
  }
}
export default HelloCard;
