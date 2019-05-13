import PageBreaks from '../utils/page-breaks';

export default function Intro() {
  return (
    <div className={"intro"}>
      <div className={"left"}>
        <div className={"img-wrapper"}><img className={"hive-conf"} src="/static/images/HiveConf_type.svg" alt="Hive Conf"/></div>
        <h4>Where Tech meets HR</h4>
        <p className={"info"}>
          <span><i className={"fa fa-calendar-check-o"}></i> September 19, 2019</span>
          <span><i className={"fa fa-map-marker"}></i> Festsaal Kreuzberg, Berlin</span>
        </p>
      </div>
      <div className={"right"}>
        <p className={"description"}>HiveConf is a one-day conference for HR & Talent Acquisition Leaders, Technical Hiring managers, CTOs and VPs of Engineering focused on all aspects of building & scaling great tech teams.</p>
        <a href="https://hiveconf19.eventbrite.com/?aff=website" className={"btn btn-tickets"}>Get Tickets</a>
        <a href="https://www.youtube.com/watch?v=twa5saz97EU&feature=youtu.be" className={"btn btn-trailer"}>Watch Trailer</a>
      </div>
      <style jsx>{`
        .intro {
          background-image: url("/static/images/mountain-bg.svg"), linear-gradient(to bottom, rgba(238, 238, 238, 0) 10%, rgba(238, 238, 238, 0.85) 20%, rgba(238, 238, 238, 0.8));
          background-size: 100vw;
          background-repeat-y: no-repeat;
          padding: 60px 20px;
          padding-top: 110px;
          margin-top: -50px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media ${ PageBreaks.smUp } {
          .intro {
            flex-direction: row;
            margin-top: -150px;
            background-image: url("/static/images/mountain-bg.svg"), linear-gradient(to bottom, rgba(238, 238, 238, 0) 10%, rgba(238, 238, 238, 0.8));
            background-repeat-y: repeat;
          }
        }

        .left,
        .right {
          display: block;
          flex: 1;
        }

        @media ${ PageBreaks.smUp } {
          .left, .right {
            padding: 0 20px;
          }
        }

        @media ${ PageBreaks.smUp} {
          .left {
            text-align: right;
          }
        }
        
        @media ${ PageBreaks.smUp } {
          .img-wrapper {
            padding: 20px 0;
          }
        }

        .hive-conf {
          height: 40px;
        }

        @media ${ PageBreaks.smUp } {
          .hive-conf {
            height: 70px;
          }
        }

        .light {
          font-weight: 100;
          margin-left: -5px;
        }

        @media ${ PageBreaks.smUp } {
          .light {
            margin-left: -10px;
          }
        }
        
        h4 {
          margin: 8px 0;
          font-weight: 400;
          font-size: 24px;
        }

        .info {
          font-size: 18px;
        }

        span {
          margin: 0 12px;
        }

        .fa {
          font-size: 24px;
        }

        .description {
          font-weight: 200;
          font-size: 20px;
          line-height: 40px;
        }

        @media ${ PageBreaks.lgUp} {
          .description {
            max-width: 60%;
          }
        }

        @media ${ PageBreaks.mdUp} {
          .description {
            max-width: 80%;
          }
        }

        .btn {
          display: inline-block;
          text-decoration: none;
          font-weight: 600;
          font-size: 20px;
          padding: 14px 24px;
          border-radius: 5px;
          margin-right: 20px;
        }

        .btn-tickets {
          color: #ffffff;
          background-image: linear-gradient(0.66turn, #0007ff, #0000bb);
        }

        .btn-trailer {
          color: #000000;
          background-image: linear-gradient(0.75turn, #ffffff, #dddddd);
        }
      `}</style>
    </div>
  )
}
