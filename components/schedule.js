import PageBreaks from '../utils/page-breaks';

export default function schedule() {
  return (
    <div id={"schedule"} className={"wrapper"} >
      <h2>Schedule</h2>
      <div className={"oval"}></div>
      <div className={"oval-small"}></div>
      <div className={"date"}><img src={`/static/icons/Calendar.svg`} alt={"Calendar Icon"}/>September 19, 2019</div>
      <div className={"information"}>
        <h3>Our schedule is coming soon, but...</h3>
        <p>Stay in the loop and get the latest updates on new speakers, discounted tickets and everything HiveConf'19!</p>
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
          height: 246px;
          width: 246px;
          border-radius: 50%;	
          background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
          position: absolute;
          top: 20px;
          left: 100px;
          z-index: -1;
        }

        .oval-small {
          height: 100px;
          width: 100px;
          border-radius: 50%;	
          background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
          position: absolute;
          top: 200px;
          left: 60%;
          z-index: -1;
        }

        .date {
          font-size: 33px;
          font-weight: 600;
          color: #4A4A4A;
          line-height: 40px;
          margin-bottom: 45px;
        }

        .date img {
          height: 50px;
          width: 50px;
          margin-left: -10px;
          margin-right: 20px;
        }

        .information {
          width: 80%;
          margin: 0 auto;
        }
        
        .information h3 {
          color: #1A1A1A;
          font-size: 30px;
          font-weight: bold;
          line-height: 41px;
        }

        .information p {
          color: #4A4A4A;
          font-size: 18px;
          line-height: 46px;
          white-space: nowrap;
        }
      `}</style>
    </div>
  )
}