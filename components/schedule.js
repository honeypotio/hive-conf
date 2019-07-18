import React, {Component, Fragment} from 'react'
import PageBreaks from '../utils/page-breaks';
import Collapsible from 'react-collapsible';

export default class Schedule extends Component{
  constructor() {
    super();
    this.state = {data: [
      {
        time: '8:30',
        title: 'Registration & Breakfast',
        content: ''
      },
      {
        time: '9:00',
        title: 'Welcome Talk',
        speaker: 'Emma Tracey & Kaya Taner, Co-Founders @ Honeypot',
        content: 'TBC'
      },
      {
        time: '9:20',
        type: 'Keynote',
        title: 'How We Made Hiring, Growing and Recognising Engineers Everyone’s Job',
        speaker: 'Maria Gutierrez, Director of Engineering @ Intercom London',
        content: 'TBC'
      },
      {
        time: '10:00',
        type: 'Keynote',
        title: 'How We Interview at Facebook',
        speaker: 'Leslie Kivitt, Global Recruiting and Talent Leader @ Facebook, Oculus VR',
        content: 'We build teams that shape the future. AR/VR is hot but hiring engineering teams is tough. Oculus is competing with dozens of promising start-ups, scale-ups and tech giants such as Google, Apple, Microsoft. In this key-note I give you a sneak peak in hiring at Facebook and how you can solve common talent acquisition challenges. I will also touch on topics such as diversity hiring, how we build scalable teams that last and where we find talent.'
      },
      {
        time: '10:30',
        type: 'Case Study',
        title: 'Ideas: Talent Pools, Candidate Relationship Management, Recruitment Automation, GDPR',
        speaker: 'Eva Glanzer, VP of People @ GetYourGuide',
        content: 'TBC'
      },
      {
        time: '11:00',
        title: 'Coffee Break',
        speaker: '',
        content: ''
      },
      {
        time: '11:30',
        type: 'Case Study',
        title: 'Boost Recruitment Effectiveness with Workforce Analytics!',
        speaker: 'Dirk Jonker, Founder & CEO @ Crunchr Workforce Analytics',
        content: 'TBC'
      },
      {
        time: '12:00',
        type: 'Keynote',
        title: 'TBC',
        speaker: 'Sebastian Waschnick, CTO @ Axel Springer Ideas Engineering GmbH',
        content: "TBC"
      },
      {
        time: '12:30',
        title: 'Lunch',
        speaker: '',
        content: ''
      },
      {
        time: '14:00',
        type: 'Case Study',
        title: 'When and How to Mobilize a Growing Product Team',
        speaker: 'Jenny Herald, CPO @ GtmHub',
        content: "TBC"
      },
      {
        time: '14:30',
        type: 'Lightening',
        title: 'That’s What You Get for Letting Your Developers Work on Open-Source',
        speaker: 'Jessica Jordan, Software Engineer and Open Source Developer @ Simplabs',
        content: "TBC"
      },
      {
        time: '14:45',
        type: 'Lightening',
        title: 'That’s What You Get for Letting Your Developers Work on Open-Source',
        speaker: 'Ekaterina Lubenets, Senior Digital Recruiter (IT) @ adidas',
        content: "TBC"
      },
      {
        time: '15:00',
        type: 'Workshop track 1',
        title: 'How to Make Peer2Peer Coaching Work for your Team',
        speaker: 'Jenny Jung - Co-Founder & Anna Löw - Coach @ Mind the Leader',
        content: "In this interactive 60 min talk we will introduce the concept of Peer2Peer Coaching and showcase the benefits and steps of implementing this in your teams. Beside the theoretical input we will share our experiences as Peer2Peer Coaching facilitators and look at specific challenges of engineering leaders. The interactive part will give you the chance to get some first-hand experience in one of the formats we use in our work with fast-growing tech companies. Please bring pen and paper."
      },
      {
        time: '15:00',
        type: 'Workshop',
        title: 'Surprise Workshop',
        speaker: 'Hilary Klassen, TBA @ TBA',
        content: "TBA"
      },
      {
        time: '16:00',
        title: 'Coffee Break',
        speaker: '',
        content: ''
      },
      {
        time: '16:30',
        type: 'Case Study 4',
        title: 'The Psychology of Employee Engagement',
        speaker: 'Ben Dunstan, Head of Organisational Development Science @ Peakon',
        content: "How can we help managers to engage their teams' and 'what can we learn from engineers about managing"
      },
      {
        time: '17:00',
        type: 'Keynote',
        title: 'Developing your Developers: Constructing Career Paths for your Technologists',
        speaker: 'Kevin Goldsmith, VP of Engineering @ Onfido',
        content: "TBC"
      },
      {
        time: '17:45',
        type: '',
        title: 'Closing',
        speaker: 'Emma Tracey, Co-Founder @ Honeypot',
        content: ""
      },
      {
        time: '17:50',
        type: '',
        title: 'Drinks ',
        speaker: '',
        content: ""
      },
    ],
    rowsToDisplay : 4,
    seeAll: false,
    gradient: true,
  }
  };

  seeAllToggle = () => {
    let seeAllLength = this.state.data.length;
    let seeLessLength = 4;
    if(!this.state.seeAll){
      this.setState({rowsToDisplay:seeAllLength, seeAll:!this.state.seeAll });
    }
    if(this.state.seeAll){
      this.setState({rowsToDisplay:seeLessLength, seeAll: !this.state.seeAll});
    }
  }

  toggleGradient = () => {
    console.log('test');
  }

  render() {
    let collapsiblePanel = this.state.data.slice(0, this.state.rowsToDisplay).map(event => {
      const renderSwitch = (param) => {
        switch(param){
          case 'Keynote':
            return (<div style={{height: '30px', width: '98px', borderRadius: '3.6px', backgroundColor: '#4FA8BB'}}><p style={{color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold', lineHeight: '18px', textAlign: 'center', transform: 'translateY(40%)'}}>{param}</p></div>)
          case 'Lightening':
            return (<div style={{height: '30px', width: '98px', borderRadius: '3.6px', backgroundColor: '#F3AE3D'}}><p style={{color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold', lineHeight: '18px', textAlign: 'center', transform: 'translateY(40%)'}}>{param}</p></div>)
          case 'Case Study':
            return (<div style={{height: '30px', width: '98px', borderRadius: '3.6px', backgroundColor: '#4C89A0'}}><p style={{color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold', lineHeight: '18px', textAlign: 'center', transform: 'translateY(40%)'}}>{param}</p></div>)
          case 'Workshop':
              return (<div style={{height: '30px', width: '98px', borderRadius: '3.6px', backgroundColor: '#EF8748'}}><p style={{color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold', lineHeight: '18px', textAlign: 'center', transform: 'translateY(40%)'}}>{param}</p></div>)
          default:
            return ''
        }
      }
      let trigger = <div style={{display: 'flex', fontWeight: 'bold', fontSize: '24px', paddingTop: '40px', paddingBottom: '40px', borderTop: '3px solid #ECECEC', lineHeight: '40px'}}><div style={{width: '12%', marginRight: '8%'}}><p style={{textAlign: 'right'}}>{event.time} </p>{renderSwitch(event.type)}</div><div style={{width: '75%'}}><div>{event.title}</div><div style={{color: '#4A4A4A', fontSize: '24px',	lineHeight: '40px', fontWeight: 'normal'}}>{event.speaker}</div></div><div style={{verticalAlign: 'top', textAlign: 'right', width: '5%'}} onClick={this.toggleGradient}><img style={{marginRight: "24px"}} src="./static/icons/Arrow_Down_Schedule.svg"/></div></div>
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
        {this.state.gradient && <div className="gradient"></div>}
        <div className={"information"}>
            {collapsiblePanel}
        </div>
        <div className="seemore-container" onClick={this.seeAllToggle}>
          <div className="seemore-icon">
            <img src={`/static/icons/Arrow_Down_SeeMore.svg`} alt={"See All Icon"}/>
          </div>
          <div className="seemore-text">
            <p> See All</p>
          </div>
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

          .border-top{
            border-top: 3px solid #ECECEC;
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

          .seemore-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .seemore-icon {
            margin: 2%;
          }

          .seemore-text {
            margin: 2%;
            margin-left: 0%;
            font-size: 27px;
            font-weight: 600;
            line-height: 33px;
            color: #4A4A4A;
            padding-top: 2%;
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
            transition: 2s ease;
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
}

// .gradient {
//   width: 100%;
//   height: 100px;
//   top: 850px;
//   margin: 0 auto;
//   background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
//   z-index: 999;
//   position: absolute;
// }
