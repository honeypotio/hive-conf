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
        <div className={ "btn-wrapper" }>
          <a href="https://hiveconf19.eventbrite.com/?aff=website" className={"btn btn-tickets"}>Get Tickets</a>
          <a href="https://www.youtube.com/watch?v=twa5saz97EU&feature=youtu.be" className={"btn btn-trailer"}>Watch Trailer</a>
        </div>
      </div>
      <style jsx>{`
        .intro {
          background-image: url("/static/images/mountain-bg.svg"), linear-gradient(to bottom, rgba(238, 238, 238, 0) 10%, rgba(238, 238, 238, 0.85) 20%, rgba(238, 238, 238, 1));
          background-size: 100vw;
          background-repeat-y: no-repeat;
          padding: 60px 20px;
          padding-top: 80px;
          margin-top: -50px;
          display: flex;
          flex-direction: column;
        }

        @media ${ PageBreaks.smUp } {
          .intro {
            flex-direction: row;
            padding-top: 110px;
            margin-top: -150px;
            background-image: url("/static/images/mountain-bg.svg"), linear-gradient(to bottom, rgba(238, 238, 238, 0) 10%, rgba(238, 238, 238, 0.8));
            background-repeat-y: repeat;
          }
        }

        .left,
        .right {
          display: block;
        }

        @media ${ PageBreaks.smUp } {
          .left, .right {
            padding: 0 20px;
            flex: 1;
          }
        }

        @media ${ PageBreaks.smUp} {
          .left {
            text-align: right;
          }
        }

        .img-wrapper {
          padding: 20px 0;
          text-align: center;
        }
        @media ${ PageBreaks.smUp } {
          .img-wrapper {
            text-align: right;
            padding-top: 12px;
          }
        }

        .hive-conf {
          height: 40px;
          margin: 0 auto;
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
          clear: both;
          font-weight: 600;
          font-size: 20px;
          text-align: center;
        }
        @media ${ PageBreaks.smUp } {
          h4 {
            margin: 12px 0;
            font-size: 24px;
            text-align: right;
          }
        }

        .info {
          margin-top: 20px;
          font-size: 18px;
          display: flex;
          justify-content: space-around;
        }
        @media ${ PageBreaks.smUp } {
          .info {
            justify-content: flex-end;
          }
        }

        span {
          display: inline-block;
          font-size: 12px;
        }
        @media ${ PageBreaks.smUp } {
          span {
            font-size: 16px;
            max-width: 50%;
            margin-left: 20px;
          }
        }

        .fa {
          font-size: 20px;
          padding-right: 3px;
        }
        @media ${ PageBreaks.smUp } {
          .fa {
            font-size: 24px;
          }
        }

        .description {
          font-weight: 200;
          font-size: 18px;
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

        .btn-wrapper {
          display: flex;
          justify-content: center;
        }
        @media ${ PageBreaks.mdUp} {
          .btn-wrapper {
            justify-content: start;
          }
        }

        .btn {
          display: inline-block;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          padding: 8px 12px;
          border-radius: 5px;
          margin-right: 20px;
        }
        @media ${ PageBreaks.mdUp} {
          .btn {
            font-size: 20px;
            padding: 10px 35px;
          }
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
