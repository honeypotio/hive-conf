import PageBreaks from '../utils/page-breaks';

export default function Tickets() {
  return (
    <div id={"tickets"} className={"wrapper"} >
      <h2>Tickets</h2>
      <div className={"oval"}></div>
      <div className={"oval-big"}></div>
      <div className={"ticketoptions"}>
        <div className={"earlybird"}>
          <div className={"box"}>
            <h4>Early Bird</h4>
            <h3>€299</h3>
          </div>
        </div>
        <div className={"active"}>
          <div className={"box"}>
            <h4>Regular</h4>
            <h3>€399</h3>
            <a target="_blank" href="https://hiveconf19.eventbrite.com/?aff=website#tickets" className={"ticket-cta"}>Get Tickets</a>
          </div>
          <div className="circle">
            <span className="inactive-circle"></span>
            <span className="active-circle"></span>
            <span className="inactive-circle"></span>
          </div>
        </div>
        <div>
          <div className={"box"}>
            <h4>Late Bird</h4>
            <h3>€599</h3>
          </div>
        </div>
      </div>
      <div className={"groups"}>Bring your team for a discounted price with our <a target={"_blank"} href={"https://hiveconf19.eventbrite.com/?aff=website#tickets"}>group tickets!</a></div>
      <style jsx>{`
        .wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 0;
          position: relative;
        }
        @media  ${ PageBreaks.smUp } {
          .wrapper {
            padding: 60px 0;
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
          height: 146px;
          width: 146px;
          border-radius: 50%;
          background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
          position: absolute;
          top: -10px;
          left: 80px;
          z-index: -1;
        }
        @media ${ PageBreaks.smUp } {
          .oval {
            height: 246px;
            width: 246px;
            top: 20px;
            left: 100px;
          }
        }

        .oval-big {
          height: 410px;
          width: 410px;
          border-radius: 50%;
          background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
          position: absolute;
          bottom: 50px;
          right: -140px;
          z-index: -1;
        }

        .ticket-cta {
          color: white;
          height: 62px;
          width: 192px;
          font-size: 18px;
          line-height: 22px;
          padding: 22px 50px;
          background: linear-gradient(270deg, #0000FF 0%, #0000AA 100%);
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
          position: absolute;
          bottom: -31px;
          left: 50%;
          transform: translateX(-50%);
          margin: 0 auto;
        }
        .ticket-cta:hover {
          color: #1A1A1A;
          background: #FFF;
          box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
        }
        .ticketoptions {
          margin: 0 auto;
          margin-top: 80px;
          display: grid;
          width: 80%;
          grid-template-columns: repeat(3, auto);
          grid-row-gap: 35px;
        }
        @media ${ PageBreaks.smUp } {
          .ticketoptions {
            width: 80%;
            grid-template-columns: repeat(3, auto);
            grid-column-gap: 35px;
          }
        }

        .active .box {
          background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
          color: white;
        }

        .earlybird {
          order: 1;
        }
        @media ${ PageBreaks.smUp } {
          .earlybird {
            order: unset;
          }
        }

        .earlybird .box:before {
          content: 'Sold out!';
          position: absolute;
          top: -50px;
          left: 0%;
          width: 100%;
          text-align: center;
          font-size: 24px;
          line-height: 41px;
          color: #0000FF;
          font-weight: 500;
        }
        @media ${ PageBreaks.smUp } {
          .active .box:before {
            font-size: 22px;
          }
        }

        .active {
          order: 0;
        }
        @media ${ PageBreaks.smUp } {
          .active {
            order: unset;
          }
        }

        .active .box:after {

          position: absolute;
          bottom: -80px;
          left: 0%;
          width: 100%;
          text-align: center;
          font-size: 21px;
          line-height: 41px;
          color: black;
          font-weight: 500;

        }

        .circle {
          text-align: center;
        }

        .circle span{
          width: 15px;
          height: 15px;
          border-radius: 50%;
          display: inline-block;
          margin-top: 105px;
          margin-left: 12px;
        }

        span.active-circle {
          background-color: blue;
        }

        span.inactive-circle {
          background-color: grey;
        }

        @media ${ PageBreaks.smUp } {
          .circle {
            display: none;
          }
        }

        .box {
          height: 250px;
          width: 250px;
          background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
          border-radius: 26px;
          color: #ECECEC;
          position: relative;

          text-align: center;
        }

        @media ${ PageBreaks.smUp } {
          .box {
            height: 280px;
            width: 280px;
          }
        }

        .box h3 {
          font-size: 80px;
          line-height: 41px;
          font-weight: bold;
        }
        .box h4 {
          font-size: 30px;
          font-weight: bold;
          line-height: 41px;
          padding: 40px 0;
        }

        .groups {
          font-weight: 500;
          line-height: 41px;
          font-size: 21px;
          text-align: center;
          margin-top: 15px;
        }
        @media ${ PageBreaks.smUp } {
          .groups {
            margin-top: 115px;
          }
        }

        .groups a {
          color: #0000FF;
          border-bottom: 2px solid #0000FF;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
