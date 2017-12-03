import React, {Component} from 'react';

class GuideStep3 extends Component {
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
          <section className="guide-step-1 uk-animation-slide-bottom guide-step-3-position">
            <img className="cancel-glyph" src="Cancel_Glyph.png" alt="cancel glyph" onClick={this.removeTutorialDisplay}/>
            <article className="guide-content-1">
              <h5>Step 3</h5>
              <h6>Challenge Shaun to a game</h6>
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

export default GuideStep3;
