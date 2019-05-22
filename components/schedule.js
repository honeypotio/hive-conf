import PageBreaks from '../utils/page-breaks';

export default function Schedule() {
  return (
    <div id={"schedule"} className={"wrapper"} >
      <h2>Schedule</h2>
      <div className={"oval"}></div>
      <div className={"oval-small"}></div>
      <div className={"date"}><img src={`/static/icons/Calendar.svg`} alt={"Calendar Icon"}/>September 19, 2019</div>
      <div className={"information"}>
        <h3>Our schedule is coming soon, but...</h3>
        <p>Stay in the loop and get the latest updates on new speakers, discounted tickets and everything HiveConf'19!</p>
        <a target="_blank" href="mailto:hiveconf@honeypot.io" className={"submit"}>Contact us</a>
      </div>
      <style jsx>{`
        .wrapper {
          max-width: 1100px;
          margin: 20px auto;
          margin-bottom: 40px;
          padding: 20px 0;
          position: relative;
        }
        @media  ${ PageBreaks.smUp } {
          .wrapper {
            padding: 60px 0;
            margin: 0 auto;
            margin-bottom: 0px;
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
          height: 160px;
          width: 160px;
          border-radius: 50%;	
          background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
          position: absolute;
          top: 20px;
          left: 100px;
          z-index: -1;
        }
        @media ${ PageBreaks.smUp } {
          .oval {
            height: 246px;
            width: 246px;
          }
        }

        .oval-small {
          display: none;
          height: 100px;
          width: 100px;
          border-radius: 50%;	
          background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
          position: absolute;
          top: 200px;
          left: 60%;
          z-index: -1;
        }
        @media ${ PageBreaks.smUp } {
          .oval-small {
            display: initial;
          }
        }

        .date {
          font-size: 20px;
          font-weight: 600;
          color: #4A4A4A;
          line-height: 40px;
          margin-bottom: 20px;
        }
        @media ${ PageBreaks.smUp } {
          .date {
            font-size: 32px;
            margin-bottom: 45px;
          }
        }

        .date img {
          height: 25px;
          width: 25px;
          margin-top: -5px;
          margin-right: 8px;
        }
        @media ${ PageBreaks.smUp } {
          .date img {
            height: 50px;
            width: 50px;
          }
        }

        .information {
          margin: 0 auto;
          margin-left: 20px;
        }
        @media ${ PageBreaks.smUp } {
          .information {
            width: 80%;
            margin-left: auto;
          }
        }

        h3 {
          color: #1A1A1A;
          font-size: 18px;
          font-weight: bold;
          line-height: 41px;
        }
        @media ${ PageBreaks.smUp } {
          h3 {
            font-size: 30px;
          }
        }

        .information p {
          color: #4A4A4A;
          font-size: 18px;
          line-height: 46px;
          margin-bottom: 30px;
        }
        @media ${ PageBreaks.smUp } {
          .information p {
            white-space: nowrap;
          }
        }

        .submit {
          border-radius: 6px;
          background-color: #F9FF00;
          color: #000000;
          font-size: 18px;
          font-weight: bold;
          line-height: 22px;
          padding: 15px 40px;
          cursor: pointer;
          text-decoration: none;
        }
        .submit:hover {
          background-color: #FFF;
          box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  )
}