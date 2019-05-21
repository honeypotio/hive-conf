import PageBreaks from '../utils/page-breaks';

export default function Honeypot() {
  return (
    <div id={"honeypot"}>
      <div className={"wrapper"}>
      <h2>About <img src={``}/> Honeypot</h2>
      <p>Honeypot is Europe’s leading tech job platform. We help build great tech teams by connecting companies with technical talents from all over the world. On Honeypot, you can hire faster through our pre-screened talents and recruit more transparently through profiles stating tech-stack, salary and location preferences. We believe technical recruitment should be simple and efficient. </p>
      <div className={"cta"}>Save time, hire faster and build your engineering team by creating a free Honeypot account.<a target="_blank" href="https://app.honeypot.io/invite_requests/new" className={"join"}>Join Now</a></div>
      </div>
      <style jsx>{`
      #honeypot {
        background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 100%);
      }
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

      p {
        font-size: 18px;
        line-height: 46px;
        color: #4A4A4A;
        columns: 2;
      }

      .cta {
        font-size: 18px;
        line-height: 46px;
        color: #4A4A4A;
      }
      .join {
        border-radius: 6px;
        background-color: #F9FF00;
        color: #000000;
        font-size: 18px;
        font-weight: bold;
        line-height: 22px;
        padding: 15px 40px;
        cursor: pointer;
        text-decoration: none;
        float: right;
        }
      .join:hover {
        background-color: #FFF;
        box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
      }
      `}</style>
    </div>
  )
}
