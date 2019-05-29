import PageBreaks from '../utils/page-breaks';

export default function Topics() {
  return (
    <div id={"topics"} className={"wrapper"}>
      <h2>Topics</h2>
      <div className={"oval"}></div>
      <img className={"background-logo hr rotating"} src={`/static/graphics/Hive_WhiteGradient_hr.svg`}/>
      <img className={"background-logo tech reverse-rotating"} src={`/static/graphics/Hive_WhiteGradient_tech.svg`}/>

      <div className={"topic-list"}>
        <div className={"topic"}>
          <h3>Discover & Recruit the Best People</h3>
          <p>Learn from both sides of the spectrum as technical leaders and recruiters share insights on recruiting the best technical hires. Topics include sourcing, interviewing, employer branding, candidate experience, automation and fighting unconscious bias.</p>
        </div>
        <div className={"topic"}>
          <h3>Empower<br className="hide-sm" /> Your Tech Team</h3>
          <p>Gain perspectives from CTOs, Technical Executives and Engineering Leaders to learn how to best engage with your technical team. Topics include employee retention, career blueprinting, people training, leadership development and scaling culture.</p>
        </div>
        <div className={"topic"}>
          <h3>HR Analytics</h3>
          <p>Stay on top of the latest trends in people analytics and learn how data can supercharge your people processes to increase employee engagement, improve retention and create scalable teams.</p>
        </div>
      </div>

      <div className={"center"}>
        <a target="_blank" href="https://hiveconf19.eventbrite.com/?aff=website" className={"tickets"}>Get Tickets</a>
      </div>
      <style jsx>{`
        .wrapper {
          max-width: 1100px;
          margin: 0px auto;
          margin-bottom: 60px;
          padding: 20px 0;
          position: relative;
        }
        @media  ${ PageBreaks.smUp } {
          .wrapper {
            padding: 60px 0 100px;
            margin-bottom: 0;
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

        .topic-list {
          display: grid;
          margin: 0 auto;
          margin-left: 20px;
          grid-template-columns: repeat(1, 100%);
          grid-column-gap: 120px;
          grid-template-rows: auto;
          grid-row-gap: 20px;
        }
        @media ${ PageBreaks.smUp } {
          .topic-list {
            margin: 0px auto;
            width: 80%;
            grid-template-columns: repeat(2, calc(50% - 15px));
            margin-bottom: 45px;
          }
        }

        h3 {
          font-size: 24px;
          color: #1A1A1A;
          font-weight: bold;
          text-align: center;
          max-width: none;
          margin: 20px auto;
        }
        @media ${ PageBreaks.smUp } {
          h3 {
            max-width: auto;
            font-size: 27px;
            text-align: left;
            line-height: 39px;
            margin: 0 auto 10px;
          }
        }

        .hide-sm {
          display: none;
        }
        @media ${ PageBreaks.smUp } {
          .hide-sm {
            display: initial;
          }
        }

        p {
          line-height: 46px;
          color: #4A4A4A;
          font-size: 18px;
        }
        @media ${ PageBreaks.smUp } {
          p{
            line-height: 43px;
            font-size: 17px
          }
        }

        .center {
          margin-top: 40px;
          text-align: center;
        }

        .tickets {
          display: inline-block;
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          padding: 8px 12px;
          border-radius: 5px;
          margin-right: 20px;
          background: linear-gradient(270deg,#0000FF 0%,#0000AA 100%);
          color: white;
        }
        @media ${ PageBreaks.smUp } {
          .tickets {
            font-size: 20px;
            padding: 10px 36px;
          }
        }
        .tickets:hover {
          color: #1A1A1A;
          background: #FFF;
          box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
        }

        .background-logo {
          position: absolute;
          z-index: -100;
        }
        .background-logo.hr {
          top: 650px;
          left: -100px;
        }
        .background-logo.tech {
          right: -100px;
          top: 300px;
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
          .reverse-rotating {
            -webkit-animation: rotating 60s linear infinite reverse;
            -moz-animation: rotating 60s linear infinite reverse;
            -ms-animation: rotating 60s linear infinite reverse;
            -o-animation: rotating 60s linear infinite reverse;
            animation: rotating 60s linear infinite reverse;
          }
      `}</style>
    </div>
  )
}
