import React, {Component} from 'react';
import Fullscreenable from 'react-fullscreenable';
import {Link} from 'react-router-dom';

import MenuDropDown from './MenuDropDown';
import OnlineProfile from './OnlineProfile';
import OfflineProfile from './OfflineProfile';
// import GuideStep2 from './GuideStep2';

import './SearchProfile.css';

class SearchProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      online: true,
    }
    this.showOnline = this.showOnline.bind(this);
    this.showOffline = this.showOffline.bind(this);
  }
  showOnline() {
    this.setState({ online: true })
  }
  showOffline() {
    this.setState({ online: false })
  }

  render() {
    const status = this.state.online? <OnlineProfile/> : <OfflineProfile/>;
    const bold = {fontWeight : 700};
    const normal = {fontWeight : 400};
    const onlineFontWeight = this.state.online? bold : normal;
    const offlineFontWeight = this.state.online? normal : bold;
    return (
    <div className="search-profile-container">
      <section className="activity-name-wrapper">
        <h3 className="activity-name">Search Profile</h3>
      </section>
      <section className="status-wrapper">
        <article className="status-container">

        <article className="status-bar-offline">
          <button className="online-tab" onClick={this.showOnline}>
            <h4 style={onlineFontWeight}>online</h4>
          </button>
          <div className="status-separator"></div>
          <button className="offline-tab" onClick={this.showOffline}>
            <h4 style={offlineFontWeight}>offline</h4>
          </button>
        </article>

        {status}

        </article>
      </section>
      {/* Navigation Bar */}
      <section className="ghost-section"></section>
      <section className="nav-bar">
        <article className="nav-btn-container">
          <div className="ghost-separator"></div>
          <Link to="/searchprofile">
            <button className="search-profile-btn nav-btn">
              <img className="button-highlight" src="Button_Highlight.png" alt="highlight button used"/>
              <img className="person-icon" src="Person_Icon_White.png" alt="navigation icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
          <Link to="/champdisplay">
            <button className="champ-display-btn nav-btn">
              <img className="trophy-icon" src="Trophy_Icon_White.png" alt="trophy icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
          <Link to="/battledisplay">
            <button className="provoke-btn battle-display-btn nav-btn">
              <img className="provoke-icon" src="Provoke_Icon_White.png" alt="provoke icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
        </article>
      </section>
      {/*Display Step 1 Tip*/}
      {/*<GuideStep2/>*/}
    </div>)
  }
}

const FullscreenableDemoComponent = Fullscreenable()(SearchProfile);

export default FullscreenableDemoComponent;
