import PageBreaks from '../utils/page-breaks';

export default function Intro() {
  return (
    <div className={"intro"}>
      <div className={"left"}>
        <h1>Hive Conf</h1>
        <h4>Where Tech meets HR</h4>
        <p className={"info"}>
          <span><i className={"fa fa-calendar-check-o"}></i> September 19, 2019</span>
          <span><i className={"fa fa-map-marker"}></i> Festsaal Kreuzberg, Berlin</span>
        </p>
      </div>
      <div className={"right"}>
        <p className={"description"}>HiveConf is a one-day conference for HR & Talent Acquisition Leaders, Technical Hiring managers, CTOs and VPs of Engineering focused on all aspects of building & scaling great tech teams.</p>
        <a href="https://hiveconf19.eventbrite.com/?aff=website" className={"btn"}>Get Tickets</a>
      </div>
      <style jsx>{`
        .intro {
          background-image: url("/static/images/mountain-bg.svg");
          background-size: 100vw;
          background-repeat: no-repeat;
          padding: 40px 20px;
          padding-top: 110px;
          margin-top: -110px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media ${ PageBreaks.smUp } {
          .intro {
            flex-direction: row;
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

        .left {
          text-align: right;
        }

        h1 {
          font-size: 24px;
        }

        @media ${ PageBreaks.smUp } {
          h1 {
            font-size: 76px;
            margin: 12px 0;
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

        @media ${ PageBreaks.smUp} {
          .description {
            max-width: 60%;
          }
        }

        .btn {
          background-color: #0000bb;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          padding: 14px 24px;
          border-radius: 5px;
          background-image: linear-gradient(to left, #0007ff, #0000bb);
        }
      `}</style>
    </div>
  )
}
