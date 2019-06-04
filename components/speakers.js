import PageBreaks from '../utils/page-breaks';
import React, {Fragment} from 'react';
import SpeakerList from '../utils/speakers.json';
import CustomModal from './modal';

export default class Speakers extends React.Component {
  constructor () {
    super();
    this.state = {
      filter: null,
      showModal: false,
      selectedSpeaker: null
    };
  }

  changeFilter = (type) => {
    this.setState(() => ({
      filter: type
    }));
  }

  handleOpenModal = (index) =>{
    this.setState({ showModal: true, selectedSpeaker: index });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedSpeaker: null });
  }

  render() {
    let currentSpeakers = SpeakerList.filter(speaker => {
      return !this.state.filter || speaker.type === this.state.filter;
    });
    // have at least one placeholder speaker due to c2a overlap with speaker info
    let placeholders = (currentSpeakers.length  % 4) === 3 ? 4 : 3 - (currentSpeakers.length  % 4);
    return (
      <div id={ "speakers" } className={"wrapper"}>
        <h2>Speakers</h2>
        <div className={"oval"}></div>
        <img className={"background-logo rotating"} src={`/static/graphics/Hive_WhiteGradient_${this.state.filter}.svg`}/>
        <div className={"filters"}>
        <button className={`all ${this.state.filter === null && "active"}`} onClick={this.changeFilter.bind(this, null)}>All Speakers</button>
        <button className={`hr ${this.state.filter === "hr" && "active"}`} onClick={this.changeFilter.bind(this, 'hr')}>HR Speakers</button>
        <button className={`tech ${this.state.filter === "tech" && "active"}`} onClick={this.changeFilter.bind(this, 'tech')}>Tech Speakers</button>
        </div>

        <div className={"speaker-list"}>
        <CustomModal closeModal={this.handleCloseModal} isModalOpen={this.state.showModal} className="modal" speaker={currentSpeakers[this.state.selectedSpeaker]}/>
          {
            currentSpeakers.map((speaker, index) => (
              <Fragment>
                <div key={`${ speaker.name }-${ this.state.filter }`} className={"speaker-card"} onClick={() => this.handleOpenModal(index)}>
                  <div className="speaker-image-info">
                  <img className={"speaker-image"} src={`/static/images/speakers/${ speaker.img }`} alt={ speaker.name }/>
                  <img className={"speaker-info-icon"} src="/static/icons/Info_Icon_Speaker.svg" alt="info-icon"/>
                  </div>
                  <p className={ "speaker-name" }>{ speaker.name }</p>
                  <p className={ "speaker-title" }>{ speaker.title }</p>
                  <ul className={"speaker-social"}>
                  {speaker.linkedin &&
                    <li>
                      <a href={`${ speaker.linkedin }`} target="_blank">
                        <i className={ `fa fa-linkedin` }></i>
                      </a>
                    </li>
                  }
                  {speaker.twitter &&
                    <li>
                      <a href={`${ speaker.twitter }`} target="_blank">
                        <i className={ `fa fa-twitter` }></i>
                      </a>
                    </li>
                  }
                  </ul>

                </div>
              </Fragment>
            ))
          }

          {
            new Array(placeholders).fill(1).map((el, index) => {
              return (<div key={`Placeholder-${index}-${ this.state.filter }`} className={"speaker-card"}>
                        <img className={"speaker-image"} src={`/static/images/speakers/PH_Speaker${index}.png`} alt="Placeholder"/>
                      </div>)
            })
          }

          <div className={"speaker-card you"}>
            <div className={"speaker-image"}>
              <div className={"content"}>You?</div>
            </div>
            <div className={"cta-container"}>
              <div className={"cta"}>
                <p>Have an idea about building great tech teams? <br></br> Reach out and submit your proposal for HiveConf!</p>
                <a target="_blank" href="mailto:hiveconf@honeypot.io" className={"submit"}>Contact us</a>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .wrapper {
            max-width: 1100px;
            margin: 0 auto;
            padding: 20px 0;
            position: relative;
          }
          @media  ${ PageBreaks.smUp } {
            .wrapper {
              padding: 60px 0 10px;
            }
          }

          h2 {
            font-size: 36px;
            font-weight: 700;
          }
          @media ${ PageBreaks.smUp } {
            h2 {
              font-size: 60px;
              margin-top: 50px;
              margin-bottom: 30px;
            }
          }

          .oval {
            height: 246px;
            width: 246px;
            border-radius: 50%;
            background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
            position: absolute;
            top: 20px;
            left: 100px;
            z-index: -1;
          }
          @media  ${ PageBreaks.smUp } {
            .oval {
              top: 60px;
            }
          }

          .background-logo {
            display: none;
          }
          @media ${ PageBreaks.smUp } {
            .background-logo {
              display: inline;
              position: absolute;
              z-index: -100;
              right: -150px;
              top: 400px;
            }
          }

          .filters {
            display: flex;
            align-items: stretch;
            margin-bottom: 40px;
          }
          @media ${ PageBreaks.smUp } {
            .filters {
               margin-bottom: 80px;
            }
          }

          .filters button {
            font-size: 12px;
            display: inline-block;
            padding: 4px 5px;
            border: none;
            position: relative;
            height: 30px;
            background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
            flex-grow: 1;
          }
          @media ${ PageBreaks.smUp } {
            .filters button {
              font-size: 19px;
              padding: 15px 50px;
              border: none;
              position: relative;
              height: 54px;
              background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
              flex-grow: initial;
            }
          }

          .filters button.active {
            background: #1A1A1A;
            color: #ffffff;
            outline: none;
          }

          .filters button:active {
            outline: none;
          }
          .filters button:focus {
            outline: none;
          }

          .filters button:hover {
            background: #1A1A1A;
            color: #ffffff;
          }
          .filters button:hover:after, .filters button:hover:before  {
            border-top-color: #1A1A1A !important;
            border-bottom-color: #1A1A1A !important;
          }

          .filters button.active:after, .filters button.active:before {
            border-top-color: #1A1A1A !important;
            border-bottom-color: #1A1A1A !important;
          }

          .all {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
          }

          .tech {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
          }

          .filters button.hr {
            margin: 0 20px;
          }

          .filters button.all:after {
            position: absolute;
            left: 100%;
            top: 0;
            content: " ";
            width: 0;
            height: 0;
            border-top: 30px solid #ECECEC;
            border-right: 20px solid transparent;
          }
          @media ${ PageBreaks.smUp } {
            .filters button.all:after {
              border-top: 54px solid #ECECEC;
            }
          }

          .filters button.hr:after {
            position: absolute;
            right: -20px;
            top: 0px;
            content: " ";
            width: 0;
            height: 0;
            border-top: 30px solid #ECECEC;
            border-right: 20px solid transparent;
          }
          @media ${ PageBreaks.smUp } {
            .filters button.hr:after {
              border-top: 55px solid #ECECEC;
            }
          }

          .filters button.hr:before {
            position: absolute;
            left: -20px;
            top: -1px;
            content: " ";
            width: 0;
            height: 0;
            border-bottom: 30px solid white;
            border-left: 20px solid transparent;
          }
          @media ${ PageBreaks.smUp } {
            .filters button.hr:before {
              border-bottom: 55px solid white;
            }
          }

          .filters button.tech:before {
            position: absolute;
            left:-20px;
            top: -1px;
            content: " ";
            width: 0;
            height: 0;
            border-bottom: 30px solid white;
            border-left: 20px solid transparent;
          }
          @media ${ PageBreaks.smUp } {
            .filters button.tech:before {
              border-bottom: 55px solid white;
            }
          }

          .speaker-list {
            display: grid;
            width: 100%;
            margin: 0 auto;
            grid-template-columns: repeat(2, 50%);
            grid-template-rows: auto;
            grid-row-gap: 35px;
          }

          @media ${ PageBreaks.smUp } {
            .speaker-list {
              width: 83%;
              grid-template-columns: repeat(4, 25%);
              margin: 0px auto;
            }
          }

          .speaker-card {
            text-align: center;
            animation: slide-in-left 1s forwards;
            transform-origin: left;
            cursor: pointer;
          }

          .speaker-image {
            max-width: calc(100% - 35px);
          }

          .speaker-image-info {
            position: relative;
          }

          .speaker-name {
            font-size: 16px;
            margin: 0;
            margin-top: 8px;
            font-weight: 600;
          }
          @media ${ PageBreaks.smUp } {
            .speaker-name {
              font-size: 18px;
              line-height: 22px;
              margin: 0;
              margin-top: 1rem;
              margin-bottom: 0.5rem;
            }
          }

          .speaker-title {
            font-size: 14px;
            line-heigt: 34px;
            padding: 0px 10px;
            font-weight: 300;
          }
          @media ${ PageBreaks.smUp } {
            .speaker-title {
              font-size: 16px;
              line-heigt: 34px;
              padding: 0px 10px;
              margin-bottom: 0.7rem;
            }
          }

          .speaker-info-icon {
            position: absolute;
            max-width: calc(100% - 35px);
            right: 20px;
            bottom: 0px;
            display: none;
          }

          .speaker-image-info:hover .speaker-info-icon{
            display: block;
          }

          .speaker-social {
            padding: 0;
            list-style-type: none;
            display: flex;
            justify-content: center;
          }

          .speaker-social li {
            margin: 0 5px;
          }

          .speaker-social .fa {
            height: 32px;
            width: 32px;
            line-height: 30px;
            color: #000000;
            border: 1px solid #000000;
            border-radius: 50%;
          }
          .speaker-social .fa:hover {
            color: #0007ff;
            border: 1px solid #0007ff;
          }

          .speaker-card.you {
            position: relative;
          }

          .speaker-card.you .speaker-image {
            background-color: #ECECEC;
            position: relative;
            margin: 0 auto;

          }
          .speaker-card.you .speaker-image:after {
            content: '';
            display: block;
            padding-bottom: 100%;

          }

          .speaker-image .content {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            font-size: 30px;
            font-weight: bold;
            color: #4a4a4a;
          }

          .cta-container {
            position: relative;
            bottom: -50px;
            margin-bottom: 100px;
            left: calc(-70% - 42px);
          }
          @media ${ PageBreaks.smUp } {
            .cta-container {
              position: relative;
              left: calc(-100% - 13px);
            }
          }

          .cta {
            width: 300px;
            background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 80%);
            position: relative;
          }
          @media ${ PageBreaks.smUp } {
            .cta {
              width: 420px;
            }
          }
          .cta:after {
            bottom: 100%;
            left: calc(100% - 60px);
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
            border-bottom-color: #ECECEC;
            border-width: 30px;
            margin-left: -30px;
          }
          @media ${ PageBreaks.smUp } {
            .cta:after {
              left: calc(100% - 80px);
            }
          }

          .cta p {
            text-align: left;
            padding: 30px 40px;
            font-size: 15px;
            line-height: 34px;
            color: #4a4a4a;
            margin: 0;
          }

          .submit {
            position: absolute;
            border-radius: 6px;
            background-color: #F9FF00;
            color: #000000;
            font-size: 18px;
            font-weight: bold;
            line-height: 22px;
            padding: 15px 40px;
            right: 35px;
            bottom: -26px;
            cursor: pointer;
            text-decoration: none;
            }
          .submit:hover {
            background-color: #FFF;
            box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
          }

          /**
           * Rotation Animation
           **/
          @-webkit-keyframes rotating /* Safari and Chrome */ {
            from {
              -webkit-transform: rotate(0deg);
              -o-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
              -o-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          @keyframes rotating {
            from {
              -ms-transform: rotate(0deg);
              -moz-transform: rotate(0deg);
              -webkit-transform: rotate(0deg);
              -o-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -ms-transform: rotate(360deg);
              -moz-transform: rotate(360deg);
              -webkit-transform: rotate(360deg);
              -o-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          .rotating {
            -webkit-animation: rotating 60s linear infinite;
            -moz-animation: rotating 60s linear infinite;
            -ms-animation: rotating 60s linear infinite;
            -o-animation: rotating 60s linear infinite;
            animation: rotating 60s linear infinite;
          }

          /* For speaker cards */
          @-webkit-keyframes slide-in-left {
            0% { transform: rotate3d(0,1,0, 120deg); opacity: 0; }
            100% { transform: rotate3d(0,1,0, 0deg); opacity: 1; }
          }

          @keyframes slide-in-left {
            0% { transform: rotate3d(0,1,0, 120deg); opacity: 0; }
            100% { transform: rotate3d(0,1,0, 0deg); opacity: 1; }
          }

        `}</style>
      </div>
    )
  }

}
