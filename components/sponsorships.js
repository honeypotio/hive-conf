import PageBreaks from '../utils/page-breaks';

export default function Sponsorships() {
  return (
    <div id={"sponsorship"} className={"wrapper"}>
      <div>
        <div className={"oval"}></div>
        <h2>Partner with us</h2>
        <p>HiveConf is an excellent opportunity to reach CTOs, CHROs, VPs of Engineering, and Talent Acquisition Leaders in the industry. Contact our partnership team at <a target="_blank" href="mailto:hiveconf@honeypot.io" className={"active-link"}>hiveconf@honeypot.io</a> to learn about sponsorship opportunities and ways to highlight your brand.</p>
      </div>
      <style jsx>{`
      .wrapper {
        max-width: 1100px;
        margin: 0px auto;
        margin-bottom: 40px;
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

      p {
        font-size: 18px;
        line-height: 46px;
        color: #4A4A4A;
        text-align: center;
        margin: 0 auto;
        margin-left: 20px;
      }
      @media ${ PageBreaks.smUp } {
        p{
          text-align: left;
          margin-bottom: 50px;
          width: 80%;
          margin: 0px auto;
        }
      }

      a.active-link {
        color: #0d0dff;
        text-decoration: none;
      }
      `}</style>
    </div>
  )
}
