import PageBreaks from '../utils/page-breaks';

const SpeakerList = [{
  img: 'image_url.svg',
  title: 'Title goes here'
}];

export default function Speakers() {
  return (
    <div id={ "speakers" } className={"wrapper"}>
      <h2>Speakers</h2>

      <div className={"speaker-list"}>
        {
          SpeakerList.map(speaker => (
            <div className="speaker-card">
              <img src={`/static/images/${ speaker.img }`} alt={ speaker.name }/>
              <p>{ speaker.title }</p>
            </div>
          ))
        }
      </div>

      <style jsx>{`
        .wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 0;
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
          }
        }

        .speaker-list {
          display: grid;
          grid-template-columns: 25% 25% 25% 25%;
          grid-template-rows: auto;
        }
      `}</style>
    </div>
  )
}
