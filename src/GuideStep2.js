import React, {Component} from 'react';

class GuideStep2 extends Component {
  constructor(props) {
    super(props);
      this.state = {
        tutorialsDisplay: true
      }
      this.removeTutorialDisplay = this.removeTutorialDisplay.bind(this);
    }
    removeTutorialDisplay() {
      this.setState({tutorialsDisplay:false});
    }
    render() {
      return (
        <div>
        {
          this.state.tutorialsDisplay
          ?
          <section className="guide-step-2 uk-animation-slide-bottom guide-step-2-position">
            <img className="cancel-glyph" src="Cancel_Glyph.png" alt="cancel glyph" onClick={this.removeTutorialDisplay}/>
            <article className="guide-content-1">
              <h5>Step 2</h5>
              <h6>Click on Doug&#39;s Profile</h6>
            </article>
            <article className="arrow-pointing"></article>
          </section>
          :
          <div></div>
        }
        </div>
      )
    }
  }

export default GuideStep2;
