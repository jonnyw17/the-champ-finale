import React, {Component}from 'react';
import Fullscreenable from 'react-fullscreenable';
import './FullScreenOverlay.css';

class FullScreenOverlay extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    let displayFullscreenOption = this.props.isFullscreen ? 'none' : 'flex';
    return (
      <div className="fullscreen-overlay-container" style={{display : displayFullscreenOption}}>
          {/*<button className="cancel-btn">
            <img src="Cancel_Glyph.png" alt="cancel glyph"/>
          </button>*/}
          <section className="fullscreen-overlay-wrapper">
            <article className="fullscreen-overlay">
            <div className="fullscreen-instruction">
              <h5>App prototype display, </h5>
              <h5>only works in fullscreen mode </h5>
            </div>
              <button className="fullscreen-logo-wrapper"  onClick={this.props.toggleFullscreen}>
                <div className="fullscreen-logo">
                  <img src="Full_Screen_Symbol.png" alt="Fullscreen" />
                  <div>
                    <h6>Fullscreen Mode</h6>
                  </div>
                </div>
              </button>
            </article>
          </section>
      </div>
    )
  }
}

export default FullScreenOverlay;
