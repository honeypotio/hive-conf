import PageBreaks from '../utils/page-breaks';
import React from 'react';

export default class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null
    };
  }
  changeFilter(type) {
    this.setState(() => ({
      filter: type
    }));
  }
  render() {
  return (
    <div id={"location"} className={"wrapper"}>
      <div>
        <div className={"oval"}></div>
        <h2>Location</h2>
        <div className="location"><img className={"icon"} src={`/static/icons/Location.svg`}/><a target={"_blank"} href={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9716.118371794813!2d13.4515843!3d52.4967039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc26594a9f6726b2e!2sFestsaal+Kreuzberg!5e0!3m2!1sen!2s!4v1533318256540"}>Festsaal Kreuzberg</a></div>
        <div className="location-info">
          <div className="location-info-text">
            <p>Join us at Festsaal Kreuzberg, one of Berlin’s coolest venues. Located close to the Spree in the heart of the city, Festsaal is the perfect location for intimate talks, interactive workshops & networking. The conference runs from 9am to 6pm.</p>
            <div className={"buttons"}>
              <button className={`map ${this.state.filter === null && "active"}`} onClick={this.changeFilter.bind(this, null)}>Map</button>
              <button className={`venue middle ${this.state.filter === "Venue01" && "active"}`} onClick={this.changeFilter.bind(this, 'Venue01')}>Venue</button>
              <button className={`venue middle ${this.state.filter === "Venue02" && "active"}`} onClick={this.changeFilter.bind(this, 'Venue02')}>Venue</button>
              <button className={`venue ${this.state.filter === "Venue03" && "active"}`} onClick={this.changeFilter.bind(this, 'Venue03')}>Venue</button>
            </div>
          </div>
          <div className={"visual"}>
            <iframe className={`map ${this.state.filter === null && "active"}`} src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9716.118371794813!2d13.4515843!3d52.4967039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc26594a9f6726b2e!2sFestsaal+Kreuzberg!5e0!3m2!1sen!2s!4v1533318256540"}></iframe>
            <img className={`venue ${this.state.filter === "Venue01" && "active"}`} src={`/static/images/venue/Venue01@2x.png`} alt={"Venue Image"}/>
            <img className={`venue ${this.state.filter === "Venue02" && "active"}`} src={`/static/images/venue/Venue02@2x.png`} alt={"Venue Image"}/>
            <img className={`venue ${this.state.filter === "Venue03" && "active"}`} src={`/static/images/venue/Venue03@2x.png`} alt={"Venue Image"}/>
          </div>
        </div>

      </div>

    <style jsx>{`
      .wrapper {
        max-width: 1100px;
        margin: 0 auto;
        padding: 40px 0;
        position: relative;
        z-index: 1;
      }
      @media  ${ PageBreaks.smUp } {
        .wrapper {
          padding: 150px 0 60px 0;
        }
      }

      h2 {
        font-size: 36px;
        font-weight: 700;
        letter-spacing: -0.4px;
      }
      @media ${ PageBreaks.smUp } {
        h2 {
          font-size: 60px;
          margin-top: 0;
          margin-bottom: 20px;
        }
      }

      .location {
        font-size: 20px;
        font-weight: 600;
        color: #4A4A4A;
        line-height: 40px;
      }
      @media ${ PageBreaks.smUp } {
        .location {
          font-size: 27px;
        }
      }

      .location img {
        height: 25px;
        width: 25px;
        margin-top: -5px;
        margin-right: 8px;
      }
      @media ${ PageBreaks.smUp } {
        .location img {
          height: 45px;
          width: 45px;
          margin-right: 15px;
        }
      }

      .oval {
        height: 160px;
        width: 160px;
        border-radius: 50%;
        background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
        position: absolute;
        top: 20px;
        left: 80px;
        z-index: -1;
      }
      @media  ${ PageBreaks.smUp } {
        .oval {
          top: 60px;
          height: 246px;
          width: 246px;
        }
      }

      .location-info {
        display: grid;
        grid-template-columns: repeat(1, 100%);
        grid-row-gap: 50px;
      }
      @media ${ PageBreaks.smUp } {
        .location-info {
          grid-template-columns: repeat(2, calc(50% - 30px));
          grid-column-gap: 60px;
        }
        .location-info-text {
          margin: 0px auto;
          width: 80%;
        }
      }

      #location .icon {
        height: 30px;
        width: 30px;
        margin-left: -5px;
        margin-right: 5px;
      }
      @media ${ PageBreaks.smUp } {
        #location .icon {
          height: 50px;
          width: 50px;
          margin-left: -5px;
          margin-right: 20px;
        }
      }

      a {
        font-size: 20px;
        font-weight: 600;
        color: #4A4A4A;
        border-bottom: 2px solid #4a4a4a;
        text-decoration: none;
      }
      @media ${ PageBreaks.smUp } {
        a {
          font-size: 27px;
          line-height: 40px;
          color: #4A4A4A;
          font-weight: 600;
          margin-left: -10px;

        }
      }

      p {
        margin-top: 20px;
        font-size: 14px;
        line-height: 30px;
        color: #4a4a4a;
      }
      @media ${ PageBreaks.smUp } {
        p {
          margin-top: 30px;
          margin-left: 15%;
          margin-bottom: 3rem;
          font-size: 18px;
          line-height: 46px;
          color: #4a4a4a;
        }
      }

      .buttons {
        display: flex;
        align-items: stretch;
      }

      .buttons button {
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
        .buttons button {
          font-size: 16px;
          padding: 10px 40px;
          border: none;
          position: relative;
          height: 44px;
          background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
          flex-grow: initial;
        }
      }
      .buttons button.active {
        background: #1A1A1A;
        color: #ffffff;
        outline: none;
      }
      .buttons button:active {
        outline: none;
      }
      .buttons button:focus {
        outline: none;
      }

      .buttons button.active:after, .buttons button.active:before {
        border-top-color: #1A1A1A !important;
        border-bottom-color: #1A1A1A !important;
      }

      button.map {
        border-radius: 3px 0 0 3px;
      }

      .buttons button.map:after {
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
        .buttons button.map:after {
          border-top: 44px solid #ECECEC;
        }
      }

      button.venue {
        border-radius: 0 3px 3px 0;
      }

      .buttons button.venue:before {
        position: absolute;
        right: 100%;
        top: 0;
        content: " ";
        width: 0;
        height: 0;
        border-bottom: 30px solid white;
        border-left: 20px solid transparent;
      }
      @media ${ PageBreaks.smUp } {
        .buttons button.venue:before {
          border-bottom: 44px solid white;
        }
      }

      button.venue.middle {
        border-radius: 0;
        padding: 10px 48px 10px 32px;
      }

      .buttons button.hr:after {
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
        .buttons button.venue.middle:after {
          border-top: 44px solid #ECECEC;
        }
      }

      .buttons button.venue.middle:before {
        position: absolute;
        right: 100%;
        top: 0;
        content: " ";
        width: 0;
        height: 0;
        border-bottom: 30px solid white;
        border-left: 20px solid transparent;
      }
      @media ${ PageBreaks.smUp } {
        .buttons button.venue.middle:before {
          border-bottom: 44px solid white;
        }
      }

      @media ${ PageBreaks.smUp } {
        .visual {
          height: 600px;
          margin-top: -200px;
        }
      }

      .visual img{
        display: none;
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
      .visual .active {
        display: block !important;
      }

      .visual iframe {
        border: none;
        display: none;
        width: 100vw;
        margin-left: -20px;
      }
      @media ${ PageBreaks.smUp } {
        .visual iframe {
          border: none;
          width: 100%;
          height: 100%;
          display: none;
          margin: 0;
        }
      }
    }`}</style>
    </div>
  )
}
}
