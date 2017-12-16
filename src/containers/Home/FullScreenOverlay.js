import React, {Component}from 'react';
import Fullscreenable from 'react-fullscreenable';
import './FullScreenOverlay.css';

class FullScreenOverlay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFull: false
    }
  }
  render(){
    let displayFullscreenOption = this.props.value ? 'none' : 'flex';
    console.log(this.props.toggleFullScreenOption);
    return (
      <div className="fullscreen-overlay-container" style={{display : displayFullscreenOption}}>
          <button className="cancel-btn" onClick={this.props.toggleFullScreenOption}>
            <img src="Cancel_Glyph.png" alt="cancel glyph"/>
          </button>
          <section className="fullscreen-overlay-wrapper">
            <article className="fullscreen-overlay">
            <div>
              <h5>Recommend Fullscreen Mode.</h5>
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
