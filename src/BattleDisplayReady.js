import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// import './animation.css';
import './BattleDisplay.css';
import './BattleDisplayReady.css';

import ConnectPendingDisplay from './ConnectPendingDisplay';
import TrackingBattleDisplay from './TrackingBattleDisplay';
import WinnerStatus from './WinnerStatus';
import BattleContentUser from './BattleContentUser';
import BattleContentOpponent from './BattleContentOpponent';

class BattleDisplayReady extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersTwitter: [],
      requestSent: false,
      requestIcon: 'none',
      userLoggedIn: this.props.activeUser,
      connectionMade: false,
      battleEnded: false
    }
    this.SendRequest = this.SendRequest.bind(this);
    this.DeclareBattleEnded = this.DeclareBattleEnded.bind(this);
  }

  SendRequest() {
    this.setState({requestSent: true});
    setTimeout(() => {
      this.setState({requestIcon: 'block'});
    }, 3000);
  }

  DeclareBattleEnded() {
    this.setState({battleEnded: true});
  }

  render() {
    console.log(this.state.userLoggedIn);
    setTimeout(()=>{
      this.setState({connectionMade:true})
    }, 5000)
    // There must be someway to set Time on the Display variable
    return (<div className="main-container">
      <section className="activity-name-wrapper">
        <h3 className="activity-name">Battle Arena</h3>
      </section>
      <section className="battle-info">
        <article className="white-ring-border"></article>
        <article className="game-overlay-display"></article>
        <img className="battle-arena-cover" src="Battle_Arena.png" alt="battle arena cover"/>
        <article className="gamer-info-container">
          <article className="upper-container">
          { this.state.battleEnded?
            <Link to="/champdisplaydoug">
              <BattleContentUser />
            </Link>
            :
            <BattleContentUser />
          }

          </article>

          <article className="middle-container">
          {this.state.battleEnded ?
            <WinnerStatus />
            :
            (this.state.connectionMade ?
            <TrackingBattleDisplay />
            :
            <ConnectPendingDisplay />
            )
          }

          </article>
          <article className="lower-container">

          { this.state.battleEnded ?
            <Link to="/champdisplayshaun">
              <BattleContentOpponent />
            </Link>
            :
            <BattleContentOpponent />
          }

          </article>
        </article>
      </section>



      <section className="battle-actions-container">
        {this.state.connectionMade ?
          (this.state.battleEnded ?
                <button className="challenge-sent pos-abs">
                  <h6 className="uk-animation-slide-top">BATTLE ENDED!</h6>
                </button>
              :
              <button className="challenge-btn uk-animation-slide-bottom" onClick={this.DeclareBattleEnded}>
                <img src="Battle_End_Icon.png" alt="Provoke Symbol"/>
                <div>
                  <h6 className="btn-description">END BATTLE</h6>
                </div>
              </button>
            )
          :
          <div></div>
        }
      </section>
      {/* Navigation Bar */}
      <section className="nav-bar">
        <article className="nav-btn-container">
          <div className="ghost-separator"></div>
          <Link to="/searchprofile">
            <button className="nav-btn">
              <img className="search-icon" src="Search_Fa_Icon_White.png" alt="navigation icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
          <Link to="champdisplay">
            <button className="nav-btn">
              <img className="trophy-icon" src="Trophy_Icon_White.png" alt="trophy icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
          <Link to="/battledisplayready">
            <button className="nav-btn">
              <img className="button-highlight" src="Button_Highlight.png" alt="highlight button used"/>
              <img className="provoke-icon" src="Provoke_Icon_White.png" alt="provoke icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
        </article>
      </section>
      {/* Display Step 1 Tip */}
      {
        this.state.requestSent
          /*? <GuideStep4/> : <GuideStep3/>*/
      }
      {/* Navigation */}
      <section className="nav-display">
        <article className="logo-wrapper">
          <img className="white-logo" src="BetGame_Logo_White.png" alt="white champ logo"/>
          <h3 className="white-logo-name">Champ</h3>
        </article>
      </section>
    </div>);
  }
}

export default BattleDisplayReady;

// DO NOT DELETE ANY OF THIS PLEASE - REQYURED
// Battle Arena
//
// <div className="shadow-casted"></div>
// <img className="crowned_champion" src="Crowned_Champion_Golden.png"/>
// <div className="activity-info-banner">
//   <h3>Tap Winner !</h3>
// </div>
//
// <div className="player-containers">
//   <div className="player-container reverse-bg-colour">
//   <div className="player-details">
//     <img src="Doug_Face_Circular.png"/>
//     <h5>Doug Ward</h5>
//     <h6 className="rank-margins bronze-colour">BRONZE</h6>
//   </div>
//   </div>
//   <div className="player-container original-bg-colour">
//   <div className="player-details">
//     <img src="Shaun_Face_Circular.png"/>
//     <h5>Shaun Gibson</h5>
//     <h6 className="rank-margins silver-colour">SILVER</h6>
//   </div>
//   </div>
// </div>
// <div className="status-activity">
//   <div className="status-area">
//   </div>
// </div>


// Connect to Game Button
//
// <article className="connecting-wheel">
//   <img src="Provoke_Pending_White.png" alt="loading circle"/>
//     <div className="loading-info">
//       <h5>Connecting</h5>
//       <h5>players</h5>
//     </div>
//   </article>

//Ready for battling
//
// <button className="battle-ready-btn">
//   <h5>Ready for Battle?</h5>
// </button>

// Connect to Game Button  For Battle Ready
//
// .status-activity {
//   position: absolute;
//   top: 250px;
//   height: 150px;
//   width: 370px;
//   display: flex;
//   justify-content: center;
//   .status-area {
//     width: 200px;
//     height: 150px;
//     display: flex;
//     justify-content: center;
    // .connecting-wheel {
    //   width: 150px;
    //   height: 150px;
    //   border-radius: 50%;
    //   background: #9F9F9F;
    //   color: white;
    //   img {
    //     position: absolute;
    //     height: 150px;
    //     width: 150px;
    //     opacity: 1;
    //   }
    //   .loading-info {
    //     padding: 50px 0 0 0;
    //     h5 {
    //       margin: 0px;
    //       text-align: center;
    //       color: white;
    //     }
    //   }
    // }
//     .battle-ready-btn {
//       margin: 10px 0 0 0;
//       width: 182px;
//       height: 45px;
//       background: white;
//       border: 3px solid #B15B30;
//       border-radius: 10px;
//       display: flex;
//       justify-content: center;
//       h5 {
//         margin: 0;
//         font-weight: 700;
//         color: #B15B30;
//         letter-spacing: 0.3px;
//       }
//     }
//     .tracking-progress {
//       width: 150px;
//       height: 150px;
//       border-radius: 50%;
//       background: white;
//       img {
//         position: absolute;
//         height: 143px;
//         width: 150px;
//         margin: 3px 0 0 0;
//         opacity: 1;
//       }
//       .tracking-info {
//         padding: 60px 0 0 0;
//         h5 {
//           margin: 0px;
//           text-align: center;
//           color: black;
//         }
//       }
//     }
//   }
// }

// Tracking progress
//
// <article className="tracking-progress">
//   <img src="Provoke_Pending.png" alt="loading circle"/>
//     <div className="tracking-info">
//       <h5>Battling ...</h5>
//     </div>
//     <button className="battling-end-btn"><h5>Battle Ended? Click</h5></button>
//   </article>
//
// .status-activity {
//   position: absolute;
//   top: 200px;
//   height: 150px;
//   width: 370px;
//   display: flex;
//   justify-content: center;
//   .status-area {
//     width: 200px;
//     height: 150px;
//     display: flex;
//     justify-content: center;
//     .connecting-wheel {
//       width: 150px;
//       height: 150px;
//       border-radius: 50%;
//       background: #9F9F9F;
//       color: white;
//       img {
//         position: absolute;
//         height: 150px;
//         width: 150px;
//         opacity: 1;
//       }
//       .loading-info {
//         padding: 50px 0 0 0;
//         h5 {
//           margin: 0px;
//           text-align: center;
//           color: white;
//         }
//       }
//     }
//     .battle-ready-btn {
//       margin: 10px 0 0 0;
//       width: 182px;
//       height: 45px;
//       background: white;
//       border: 3px solid #B15B30;
//       border-radius: 10px;
//       display: flex;
//       justify-content: center;
//       h5 {
//         margin: 0;
//         font-weight: 700;
//         color: #B15B30;
//         letter-spacing: 0.3px;
//       }
//     }
//     .tracking-progress {
//       width: 150px;
//       height: 150px;
//       border-radius: 50%;
//       background: white;
//       img {
//         position: absolute;
//         height: 143px;
//         width: 150px;
//         margin: 3px 0 0 0;
//         opacity: 1;
//       }
//       .tracking-info {
//         padding: 60px 0 0 0;
//         h5 {
//           margin: 0px;
//           text-align: center;
//           color: black;
//         }
//       }
//     }
//   }
//   .battling-end-btn {
//     position: absolute;
//     margin: 80px 0 0 -20px;
//     width: 182px;
//     height: 45px;
//     background: white;
//     border: 3px solid #B15B30;
//     border-radius: 10px;
//     display: flex;
//     justify-content: center;
//     h5 {
//       margin: 0;
//       font-weight: 700;
//       color: #B15B30;
//       letter-spacing: 0.3px;
//     }
//   }
// }


// Winner Chosen - positioned above player container
// <div className="shadow-casted"></div>
// <img className="crowned_champion" src="Crowned_Champion_Golden.png"/>
// <div className="activity-info-banner">
//   <h3>Tap Winner !</h3>
// </div>

// .activity-container {
//   height: 60vh;
//   background: white;
//   display: flex;
//   justify-content: center;
//     .game-img-display {
//       position: relative;
//       width: 370px;
//       height: 370px;
//       border-radius: 50%;
//       background: white;
//       img {
//         width: 370px;
//         height: 370px;
//         opacity: 0.3;
//       }
//       .shadow-casted {
//         position: absolute;
//         top:0;
//         width: 370px;
//         height: 370px;
//         border-radius: 50%;
//         background: black;
//         opacity: 0.25;
//       }
//       .crowned_champion {
//         width: 320px;
//         height: 285px;
//         left: 27px;
//         top: 50px;
//         position: absolute;
//         opacity: 1;
//       }
//       .activity-info-banner {
//         position: absolute;
//         top:0;
//         height: 200px;
//         width: 370px;
//         // background: grey;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         h3 {
//           font-size: 26px;
//           font-weight: 700;
//           letter-spacing: 1px;
//           color: white;
//         }
//       }
//       .player-containers {
//         position: absolute;
//         top: 100px;
//         height: 143px;
//         width: 370px;
//         display: flex;
//         justify-content: space-between;
//         .player-container {
//           height: 143px;
//           width: 143px;
//           border-radius: 50%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           .player-details {
//             height: 135px;
//             width: 135px;
//             border-radius: 50%;
//             background: white;
//             img {
//               height: 60px;
//               width: 60px;
//               margin: 15px 0 10px 38px;
//               opacity: 1;
//             }
//             h5 {
//               font-weight: 400;
//               text-align: center;
//               margin: 0;
//             }
//             h6 {
//               font-size: 11px;
//               text-align: center;
//               margin: 2px 0;
//             }
//           }
//         }
//     }
//     .status-activity {
//       position: absolute;
//       top: 250px;
//       height: 150px;
//       width: 370px;
//       display: flex;
//       justify-content: center;
//       .status-area {
//         width: 200px;
//         height: 150px;
//         display: flex;
//         justify-content: center;
//         .connecting-wheel {
//           width: 150px;
//           height: 150px;
//           border-radius: 50%;
//           background: #9F9F9F;
//           color: white;
//           img {
//             position: absolute;
//             height: 150px;
//             width: 150px;
//             opacity: 1;
//           }
//           .loading-info {
//             padding: 50px 0 0 0;
//             h5 {
//               margin: 0px;
//               text-align: center;
//               color: white;
//             }
//           }
//         }
//         .battle-ready-btn {
//           margin: 10px 0 0 0;
//           width: 182px;
//           height: 45px;
//           background: white;
//           border: 3px solid #B15B30;
//           border-radius: 10px;
//           display: flex;
//           justify-content: center;
//           h5 {
//             margin: 0;
//             font-weight: 700;
//             color: #B15B30;
//             letter-spacing: 0.3px;
//           }
//         }
//         .tracking-progress {
//           width: 150px;
//           height: 150px;
//           border-radius: 50%;
//           background: white;
//           img {
//             position: absolute;
//             height: 143px;
//             width: 150px;
//             margin: 3px 0 0 0;
//             opacity: 1;
//           }
//           .tracking-info {
//             padding: 60px 0 0 0;
//             h5 {
//               margin: 0px;
//               text-align: center;
//               color: black;
//             }
//           }
//         }
//       }
//     }
//   }
// }

// {Last copied here}
//
// <section className="activity-container">
//   <article className="battle-display">
//     <div className="battle-img-display">
//       <img src="Worms_Circle_Background.png" alt="worms"/>
//       {/*Player-container*/}
//       <div className="player-containers">
//         <div className="player-container reverse-bg-colour uk-animation-slide-left">
//         <div className="player-details">
//           <img src="Doug_Face_Circular.png" alt="Doug's profile"/>
//           <h5>Doug Ward</h5>
//           <h6 className="rank-margins bronze-colour">BRONZE</h6>
//         </div>
//         </div>
//         <div className="player-container original-bg-colour uk-animation-slide-right">
//         <div className="player-details">
//           <img src="Shaun_Face_Circular.png" alt="Shaun's profile"/>
//           <h5>Shaun Gibson</h5>
//           <h6 className="rank-margins silver-colour">SILVER</h6>
//         </div>
//         </div>
//       </div>
//       <div className="status-activity">
//         <div className="status-area">
//         {/*Connecting Players Wheel*/}
//
//         <article className="connecting-wheel" style={{display: "none"}}>
//           <img src="Provoke_Pending_White.png" alt="loading circle"/>
//             <div className="loading-info">
//               <h5>Connecting</h5>
//               <h5>players</h5>
//             </div>
//           </article>
//
//         {/*Tracking progress*/}
//           <article className="tracking-progress">
//             <img src="Provoke_Pending.png" alt="loading circle"/>
//               <div className="tracking-info">
//                 <h5>Battling ...</h5>
//               </div>
//               <button className="battling-end-btn"><h5>Battle Ended? Click</h5></button>
//             </article>
//
//         </div>
//       </div>
//
//     </div>
//   </article>
// </section>
