import {Fragment} from 'react'
import PageBreaks from '../utils/page-breaks';
import Collapsible from 'react-collapsible';

export default function Schedule() {
  let data = [
    {
      time: '8:30',
      title: 'Registration & Breakfast',
      content: 'TBC'
    },
    {
      time: '9:00',
      title: 'Welcome Talk',
      speaker: 'Emma Tracey & Kaya Taner, Co-Founders @ Honeypot',
      content: 'TBC'
    },
    {
      time: '9:20',
      title: 'Leadership in Engineering',
      speaker: 'Maria Gutierrez, Head of Engineering @ Intercom London',
      content: 'TBC'
    },
    {
      time: '10:00',
      title: 'How we interview at Facebook',
      speaker: 'Leslie Kivitt, Global Recruiting @ Oculus VR',
      content: 'We build teams that shape the future. AR/VR is hot but hiring engineering teams is tough. Oculus is competing with dozens of promising start-ups, scale-ups and tech giants such as Google, Apple, Microsoft. In this key-note I give you a sneak peak in hiring at Facebook and how you can solve common talent acquisition challenges. I will also touch on topics such as diversity hiring, how we build scalable teams that last and where we find talent.'
    },
    {
      time: '10:30',
      title: 'Ideas: Talent Pools, Candidate Relationship Management, Recruitment Automation, GDPR',
      speaker: 'Eva Glanzer, VP of People @ GetYourGuide',
      content: 'TBC'
    },
    {
      time: '11:00',
      title: 'Candidate Experience',
      speaker: 'Eva Glanzer, VP of People @ GetYourGuide',
      content: "A Developer's Perspective: What we hate about interviewing"
    },
    {
      time: '12:00',
      title: 'Keynote 3',
      speaker: 'Sebastian Waschnick, CTO @ Axel Springer Ideas Engineering GmbH',
      content: "TBC"
    },
    {
      time: '14:30',
      title: 'That’s What You Get for Letting Your Developers Work on Open-Source',
      speaker: 'Jessica Jordan, Software Engineer and Open Source Developer @ Simplabs',
      content: "TBC"
    },
    {
      time: '14:45',
      title: 'Ideas: Blueprinting Organizations: Lessons from Adidas The Evolution of the TA Function at Adidas, HR Analytics at Adidas',
      speaker: 'Carsten Wentzel, Talent Acquisition Lead for Digital @ Adidas',
      content: "TBC"
    },
    {
      time: '15:00',
      type: 'Workshop track 1',
      title: 'How to make Peer2Peer Coaching work for your (engineering) team',
      speaker: 'Jenny Jung & Anna Löw, Co-Founder @ Mind the Leader',
      content: "In this interactive 60 mins talk we will introduce the concept of Peer2Peer Coaching and showcase the benefits and steps of implementing this in your teams. Beside the theoretical input we will share our experiences as Peer2Peer Coaching facilitators and look at specific challenges of engineering leaders. The interactive part will give you the chance to get some first-hand experience in one of the formats we use in our work with fast-growing tech companies. Please bring pen and paper."
    },
    {
      time: '16:30',
      type: 'Case Study 4',
      title: 'TBC',
      speaker: 'TBC',
      content: "TBC"
    },
    {
      time: '17:00',
      type: 'Keynote 4 ',
      title: 'TBC',
      speaker: 'Kevin Goldsmith, VP of Engineering @ Astrumu',
      content: "TBC"
    },
    {
      time: '18:00',
      type: 'Closing',
      title: 'TBC',
      speaker: 'Emma Tracey and Kaya Taner, Co-Founders @ Honeypot',
      content: "TBC"
    },
    {
      time: '18:10',
      type: 'Drinks ',
      title: 'Drinks ',
      speaker: '',
      content: "TBC"
    },
  ]

  let collapsiblePanel = data.map(event => {
    // add tag for type of thing
    let trigger = <div style={{display: 'flex', fontWeight: 'bold', fontSize: '24px', paddingTop: '40px', paddingBottom: '40px', borderBottom: '3px solid #ECECEC', lineHeight: '40px'}}><div style={{width: '20%'}}>{event.time}</div><div style={{width: '75%'}}><div>{event.title}</div><div style={{color: '#4A4A4A', fontSize: '24px',	lineHeight: '40px', fontWeight: 'normal'}}>{event.speaker}</div></div><div style={{verticalAlign: 'top', textAlign: 'right', width: '5%'}}><img src="./static/icons/Arrow_Down_Schedule.svg"/></div></div>
    return (
      <Fragment key={event.time}>
          <Collapsible trigger={trigger} triggerClassName="CustomTriggerCSS">
            <p style={{ width: '75%', marginLeft: '20%', color: '#4A4A4A', fontSize: '21px', lineHeight: '41px'}}>{event.content}</p>
          </Collapsible>
      </Fragment>

    )
  })
  return (
    <div id={"schedule"} className={"wrapper"} >
      <h2>Schedule</h2>
      <div className={"oval"}></div>
      <div className={"oval-small"}></div>
      <div className={"date"}><img src={`/static/icons/Calendar.svg`} alt={"Calendar Icon"}/>September 19, 2019</div>
      <div className={"information"}>
        <Collapsible lazyRender trigger="See All">
          {collapsiblePanel}
        </Collapsible>
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
            margin-bottom: 20px;
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

        .trigger-container{
          display: flex;
          font-size: 24px;
          font-weight: bold;
          line-height: 45px;
          color: #1A1A1A;
        }

        .Collapsible__trigger {
          font-size: 58px;
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
            font-size: 27px;
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
            height: 45px;
            width: 45px;
            margin-right: 15px;
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
            font-size: 27px;
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
