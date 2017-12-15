import React, {Component}from 'react';

import './FullScreenOverlay.css';

class FullScreenOverlay extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className="fullscreen-overlay-container">
        <button className="cancel-btn">
          <img src="Cancel_Glyph.png" />
        </button>
        <section className="fullscreen-overlay-wrapper">
          <article className="fullscreen-overlay">
            <div className="fullscreen-logo-wrapper">
              <div className="fullscreen-logo">
                <img src="Full_Screen_Symbol.png" />
              </div>
            </div>
            <div><h5>Recommend Fullscreen Mode.</h5></div>
          </article>
        </section>
      </div>
    )
  }
}

export default FullScreenOverlay;
