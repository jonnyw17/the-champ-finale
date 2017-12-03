import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import OnlineProfile from './OnlineProfile';
import OfflineProfile from './OfflineProfile';
import './SearchProfile.css';

class SearchProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      online: true,
    }
    this.showOnline = this.showOnline.bind(this);
    this.showOffline = this.showOffline.bind(this);
    this.makeBolder = this.makeBolder.bind(this);
  }
  showOnline = () => {
    this.setState({ online: true })
  }
  showOffline = () => {
    this.setState({ online: false })
  }
  makeBolder = () => {
    return undefined;
  }
  render() {
    const status = this.state.online? <OnlineProfile/> : <OfflineProfile/>;
    const bold = {fontWeight : 700};
    const normal = {fontWeight : 400};
    const onlineFontWeight = this.state.online? bold : normal;
    const offlineFontWeight = this.state.online? normal : bold;
    return (<div className="main-container">
      <section className="menu-drop-down">
        <article className="logo-wrapper">
          <img src="BetGame_Logo_White.png" alt="logo icon"/>
          <h3>Champ</h3>
        </article>
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
      <section className="nav-bar">
        <div className="horizontal-line"></div>
        <article className="nav-btn-container">
          <div className="ghost-separator"></div>
          <Link to="/searchprofile">
            <button className="nav-btn silver-bg-colour">
              <img className="person-icon" src="Person_Icon_White.png" alt="navigation icon"/>
            </button>
          </Link>
          <div className="separator"></div>
          <Link to="/champdisplay">
            <button className="nav-btn">
              <img className="trophy-icon" src="Trophy_Icon_Grey.png" alt="trophy icon"/>
            </button>
          </Link>
          <div className="separator"></div>
          <Link to="/battledisplay">
            <button className="nav-btn">
              <img className="provoke-icon" src="Provoke_Icon_Grey.png" alt="provoke icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
        </article>
      </section>
    </div>)
  }
}

export default SearchProfile;
