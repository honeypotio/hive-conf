import PageBreaks from '../utils/page-breaks';

const SpeakerList = [{
  img: 'Anna_Low@2x.jpg',
  name: 'Anna Low',
  title: 'VP of Awesome, Giant Swarm',
  linkedin: 'https://www.linkedin.com',
  twitter: 'https://www.twitter.com',
  github:  'https://www.github.com'
},
{
  img: 'Emma_Tracey@2x.png',
  name: 'Emma Tracey',
  title: 'VP of Awesome, Honeypot',
  linkedin: 'https://www.linkedin.com',
  twitter: 'https://www.twitter.com',
  github:  'https://www.github.com'
},
{
  img: 'Eva_Glanzer@2x.jpg',
  name: 'Eva Glanzer',
  title: 'VP of Awesome, XYZ Company',
  linkedin: 'https://www.linkedin.com',
  twitter: 'https://www.twitter.com',
  github:  'https://www.github.com'
},
{
  img: 'Jenny_Jung@2x.png',
  name: 'Jenny Jung',
  title: 'VP of Awesome, XYZ Company',
  linkedin: 'https://www.linkedin.com',
  twitter: 'https://www.twitter.com',
  github:  'https://www.github.com'
},
{
  img: 'Anna_Low@2x.jpg',
  name: 'Anna Low 2',
  title: 'VP of Awesome, Giant Swarm',
  linkedin: 'https://www.linkedin.com',
  twitter: 'https://www.twitter.com',
  github:  'https://www.github.com'
},
{
  img: 'Emma_Tracey@2x.png',
  name: 'Emma Tracey 2',
  title: 'VP of Awesome, Honeypot',
  linkedin: 'https://www.linkedin.com',
  twitter: 'https://www.twitter.com',
  github:  'https://www.github.com'
},
{
  img: 'Eva_Glanzer@2x.jpg',
  name: 'Eva Glanzer 2',
  title: 'VP of Awesome, XYZ Company',
  linkedin: 'https://www.linkedin.com',
  twitter: 'https://www.twitter.com',
  github:  'https://www.github.com'
},
{
  img: 'Jenny_Jung@2x.png',
  name: 'Jenny Jung 2',
  title: 'VP of Awesome, XYZ Company',
  linkedin: 'https://www.linkedin.com',
  twitter: 'https://www.twitter.com',
  github:  'https://www.github.com'
}
];

export default function Speakers() {
  return (
    <div id={ "speakers" } className={"wrapper"}>
      <h2>Speakers</h2>
      <div className={"oval"}></div>
      <img className={"background-logo"} src={`static/graphics/Hive_WhiteGradient_Op80.svg`}/>
      <div className={"filters"}>Placeholder Filters</div>

      <div className={"speaker-list"}>
        {
          SpeakerList.map(speaker => (
            <div key={speaker.name} className={"speaker-card"}>
              <img className={"speaker-image"} src={`/static/images/speakers/${ speaker.img }`} alt={ speaker.name }/>
              <h4>{ speaker.name }</h4>
              <p>{ speaker.title }</p>
              <ul className={"speaker-social"}>
              {speaker.linkedin &&
                <li>
                  <a href={`${ speaker.linkedin }`} target="_blank">
                    <img src={"/static/icons/Linkedin_Icon_Speaker.svg"}/>
                  </a>
                </li>
              }
              {speaker.twitter &&
                <li>
                  <a href={`${ speaker.twitter }`} target="_blank">
                    <img src={"/static/icons/Twitter_Icon_Speaker.svg"}/>
                  </a>
                </li>
              }
              {speaker.github &&
                <li>
                  <a href={`${ speaker.github }`} target="_blank">
                    <img src={"/static/icons/Github_Icon.svg"}/>
                  </a>
                </li>
              }
              </ul>

            </div>
          ))
        }
        <div className={"speaker-card you"}>
          <div className={"speaker-image"}>
            <div className={"content"}>You?</div>
          </div>
          <div className={"cta-container"}>
            <div className={"cta"}>
              <p>Have an idea about building great tech teams? <br></br> Reach out and submit your proposal for HiveConf!</p>
              <div className={"submit"}>Submit</div>
            </div>
          </div>
        </div>
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
        @media  ${ PageBreaks.smUp } {
          .oval {
            top: 60px;
          }
        }

        .background-logo {
          position: absolute;
          z-index: -1;
          right: -150px;
          top: 400px;

        }

        .filters {
          height: 50px;
          background: black;
          margin-bottom: 80px;
          color: white;
        }

        .speaker-list {
          display: grid;
          width: 80%;
          margin: 0 auto;
          grid-template-columns: repeat(4, 25%);
          grid-template-rows: auto;
          grid-row-gap: 50px;
        }

        .speaker-card {
          text-align: center;
        }

        .speaker-image {
          max-width: calc(100% - 50px);
        }

        @media ${ PageBreaks.smUp } {
          h4 {
            font-size: 18px;
            line-heigt: 22px;
          }
        }

        @media ${ PageBreaks.smUp } {
          p {
            font-size: 15px;
            line-heigt: 34px;
            padding: 0px 10px;
          }
        }

        .speaker-social {
          padding: 0;
          list-style-type: none;
          display: flex;
          justify-content: center;
        }
        
        .speaker-social li {
          margin: 0 5px;
        }

        .speaker-card.you {
          position: relative;
        }
        
        .speaker-card.you .speaker-image {
          background-color: #ECECEC;
          position: relative;
          margin: 0 auto;
          
        }
        .speaker-card.you .speaker-image:after {
          content: '';
          display: block;
          padding-bottom: 100%;
          
        }

        .speaker-image .content {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          font-size: 30px;
          font-weight: bold;
          color: #4a4a4a;
        }


        .cta-container {
          position: absolute;
          left: -102%;
          bottom: -105%;
        }
        .cta {
          width: 420px;
          background: linear-gradient(90deg, #FFFFFF 0%, #ECECEC 80%);
          position: relative;
        }
        .cta:after {
          bottom: 100%;
          left: 80%;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-bottom-color: #ECECEC;
          border-width: 30px;
          margin-left: -30px;  
        }

        .cta p {
          text-align: left;
          padding: 30px 40px;
          font-size: 15px;
          line-height: 34px;
          color: #4a4a4a;
          margin: 0;
        }
        
        .submit {
          position: absolute;
          border-radius: 6px;
          background-color: #F9FF00;
          color: #000000;
          font-size: 18px;
          font-weight: bold;
          line-height: 22px;
          padding: 15px 40px;
          right: 35px;
          bottom: -26px;
          }
        }
        
        
      `}</style>
    </div>
  )
}
