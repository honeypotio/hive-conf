import PageBreaks from '../utils/page-breaks';

export default function Location() {
  return (
    <div id={"location"}>
      <div className={"wrapper"}>
        <div className={"oval"}></div>
        <h2>HiveConf'18</h2>
        <img /><a>Festsaal Kreuzberg</a>
        <p>Join us at Festsaal Kreuzberg, one of Berlin’s coolest venues. Located close to the Spree in the heart of the city, Festsaal is the perfect location for intimate talks, interactive workshops & networking. The conference runs from 9am to 6pm.</p>
        <button>Map</button>
        <button>Venue</button>
        <button>Venue</button>
        <button>Venue</button>
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
      font-weight: bold;
      letter-spacing: -0.4px;
    }
    @media ${ PageBreaks.smUp } {
      h2 {
        font-size: 60px;
        margin-top: 0;
        margin-bottom: 40px;
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
    @media  ${ PageBreaks.smUp } {
      .oval {
        top: 60px;
      }
    }

    a {
      font-size: 33px;
      line-height: 40px;
      font-weight: 600;
    }

    p {
      margin-top: 40px;
      margin-left: 10%;
      font-size: 18px;
      line-height: 46px;
      color: #4a4a4a;
      width: 40%;

    }
    }`}</style>
    </div>
  )
}