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
}
];

export default function Speakers() {
  return (
    <div id={ "speakers" } className={"wrapper"}>
      <h2>Speakers</h2>
      <div className={"oval"}></div>
      <div className={"speaker-list"}>
        {
          SpeakerList.map(speaker => (
            <div className={"speaker-card"}>
              <img className={"speaker-image"} src={`/static/images/speakers/${ speaker.img }`} alt={ speaker.name }/>
              <h4>{ speaker.name }</h4>
              <p>{ speaker.title }</p>
              <ul className={"speaker-social"}>
              {speaker.linkedin.length > 0 &&
                <li>
                  <a href={`${ speaker.linkedin }`} target="_blank">
                    <img src={"/static/icons/Linkedin_Icon_Speaker.svg"}/>
                  </a>
                </li>
              }
              {speaker.twitter.length > 0 &&
                <li>
                  <a href={`${ speaker.twitter }`} target="_blank">
                    <img src={"/static/icons/Twitter_Icon_Speaker.svg"}/>
                  </a>
                </li>
              }
              {speaker.github.length > 0 &&
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

        .speaker-list {
          display: grid;
          width: 80%;
          margin: 0 auto;
          grid-template-columns: 25% 25% 25% 25%;
          grid-template-rows: auto;
          grid-column-gap: 100px;
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
        
        
      `}</style>
    </div>
  )
}
