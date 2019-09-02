import React, {Component, Fragment} from 'react'
import PageBreaks from '../utils/page-breaks';

export default class Schedule extends Component{
  constructor() {
    super();
    this.state = {data: [
      {
        time: '08:30',
        title: 'Registration & Breakfast',
      },
      {
        time: '09:00',
        type: 'Opening',
        title: 'Welcome Talk',
        speaker: 'Emma Tracey & Kaya Taner, Co-Founders @ Honeypot',
      },
      {
        time: '09:20',
        type: 'Keynote',
        title: 'How We Made Hiring, Growing and Recognising Engineers Everyone’s Job',
        speaker: 'Maria Gutierrez, Director of Engineering @ Intercom London',
      },
      {
        time: '10:00',
        type: 'Keynote',
        title: 'Facebook Zurich, Building a Site from Scratch',
        speaker: 'Leslie Kivit, Global Recruiting and Talent Leader @ Facebook, Oculus VR',
      },
      {
        time: '10:30',
        type: 'Case Study',
        title: 'Tech Hiring at Scale without Lowering the Bar: Introducing a Hire by Committee Approach; Wins, Pitfalls and Learnings.',
        speaker: 'Eva Glanzer, VP of People @ GetYourGuide',
      },
      {
        time: '11:00',
        title: 'Coffee Break',
        speaker: '',
      },
      {
        time: '11:30',
        type: 'Case Study',
        title: 'Boost Recruitment Effectiveness with Workforce Analytics!',
        speaker: 'Dirk Jonker, Founder & CEO @ Crunchr Workforce Analytics',
      },
      {
        time: '12:00',
        type: 'Keynote',
        title: 'How to Self-organize the On-boarding Process for New Colleagues',
        speaker: 'Sebastian Waschnick, CTO @ Axel Springer Ideas Engineering GmbH',
      },
      {
        time: '12:30',
        title: 'Lunch',
        speaker: '',
      },
      {
        time: '14:00',
        type: 'Case Study',
        title: 'When and How to Mobilize a Growing Product Team',
        speaker: 'Jenny Herald, CPO @ Gtmhub',
      },
      {
        time: '14:30',
        type: 'Lightning',
        title: 'That’s What You Get for Letting Your Developers Work on Open-Source',
        speaker: 'Jessica Jordan, Software Engineer and Open Source Developer @ Simplabs',
      },
      {
        time: '14:45',
        type: 'Lightning',
        title: 'Digital Transformation at Adidas',
        speaker: 'Ekaterina Lubenets, Senior Digital Recruiter @ adidas',
      },
      {
        time: '15:00',
        type: 'Workshop',
        title: 'How to Make Peer2Peer Coaching Work for your Team',
        speaker: 'Jenny Jung - Co-Founder & Anna Löw - Coach @ Mind the Leader',
      },
      {
        time: '15:00',
        type: 'Workshop',
        title: 'Surprise Workshop',
        speaker: '',
      },
      {
        time: '16:00',
        title: 'Coffee Break',
        speaker: '',
      },
      {
        time: '16:30',
        type: 'Case Study',
        title: 'What Can We Learn from Engineers about Building Engaged Teams',
        speaker: 'Ben Dunstan, Head of Organisational Development Science @ Peakon',
      },
      {
        time: '17:00',
        type: 'Keynote',
        title: 'Developing your Developers: Constructing Career Paths for your Technologists',
        speaker: 'Kevin Goldsmith, CTO @ Onfido',
      },
      {
        time: '17:45',
        type: 'Closing',
        title: 'Closing Talk',
        speaker: 'Emma Tracey, Co-Founder @ Honeypot',
      },
      {
        time: '17:50',
        type: '',
        title: 'Drinks ',
        speaker: '',
      },
    ],
    rowsToDisplay : 8,
    seeAll: false,
    gradient: true,
  }
  this.myRef = React.createRef();
  };

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

  seeAllToggle = () => {
    let seeAllLength = this.state.data.length;
    if(!this.state.seeAll){
      this.setState({rowsToDisplay:seeAllLength, seeAll:!this.state.seeAll, gradient: !this.state.gradient });
    }
    if(this.state.seeAll){
      this.setState({rowsToDisplay: 8, seeAll: !this.state.seeAll, gradient: true});
      this.scrollToMyRef()
    }
  }

  render() {

    return (
      <div id={"schedule"} className={"wrapper"} ref={this.myRef}>
        <h2>Schedule</h2>
        <div className={"oval"}></div>
        <div className={"oval-small"}></div>
        <div className={"date"}><img src={`/static/icons/Calendar.svg`} alt={"Calendar Icon"}/>September 19, 2019</div>
        {this.state.gradient && <div className="gradient"></div>}
        <div className={"information"}>
            {this.state.data.slice(0, this.state.rowsToDisplay).map(event => {
      const renderSwitch = (param) => {
        switch(param){
          case 'Keynote':
            return (<div style={{height: '30px', width: '98px', borderRadius: '3.6px', backgroundColor: '#4FA8BB'}}><p style={{color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold', lineHeight: '18px', textAlign: 'center', transform: 'translateY(40%)'}}>{param}</p></div>)
          case 'Lightning':
            return (<div style={{height: '30px', width: '98px', borderRadius: '3.6px', backgroundColor: '#F3AE3D'}}><p style={{color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold', lineHeight: '18px', textAlign: 'center', transform: 'translateY(40%)'}}>{param}</p></div>)
          case 'Case Study':
            return (<div style={{height: '30px', width: '98px', borderRadius: '3.6px', backgroundColor: '#4C89A0'}}><p style={{color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold', lineHeight: '18px', textAlign: 'center', transform: 'translateY(40%)'}}>{param}</p></div>)
          case 'Workshop':
            return (<div style={{height: '30px', width: '98px', borderRadius: '3.6px', backgroundColor: '#EF8748'}}><p style={{color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold', lineHeight: '18px', textAlign: 'center', transform: 'translateY(40%)'}}>{param}</p></div>)
          case 'Opening':
            return (<div style={{height: '30px', width: '98px', borderRadius: '3.6px', backgroundColor: '#76A1CF'}}><p style={{color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold', lineHeight: '18px', textAlign: 'center', transform: 'translateY(40%)'}}>{param}</p></div>)
          case 'Closing':
            return (<div style={{height: '30px', width: '98px', borderRadius: '3.6px', backgroundColor: '#76A1CF'}}><p style={{color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold', lineHeight: '18px', textAlign: 'center', transform: 'translateY(40%)'}}>{param}</p></div>)
          default:
            return ''
        }
      }
      return (
        <Fragment key={event.time}>
            <div className={"section"} >
              <div className={"section-time"}><p style={{textAlign: 'right',color: '#1A1A1A', marginBottom: '0px'}}>{event.time} </p>{renderSwitch(event.type)}</div>
              <div className="section-title" style={{width: '88%'}}>
                <div>{event.title}</div>
                <div style={{color: '#4A4A4A', fontSize: '24px', lineHeight: '40px', fontWeight: 'normal'}}>{event.speaker}</div>
              </div>
            </div>
        </Fragment>

      )
    })}
        </div>
        <div className="seemore-container" onClick={this.seeAllToggle}>
          <div className="seemore-icon">
            {this.state.seeAll ? <img src={`/static/icons/Arrow_Up_SeeLess.svg`} alt={"See Less Icon"}/> : <img src={`/static/icons/Arrow_Down_SeeMore.svg`} alt={"See All Icon"}/>}
          </div>
          <div className="seemore-text">
            <p>{this.state.seeAll ? 'See Less' : 'See All'}</p>
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
          @media ${ PageBreaks.smUp } {
            .wrapper {
              padding: 60px 0;
              margin: 0 auto;
              margin-bottom: 0px;
            }
          }

          .section {
            display: block;
            font-weight: bold;
            font-size: 24px;
            padding-top: 35px;
            padding-bottom: 35px;
            border-bottom: 3px solid #ECECEC;
            line-height: 40px;
          }
          @media  ${ PageBreaks.smUp } {
            .section {
              display: flex
            }
          }

          .section-time {
            width: 12%;
            margin-right: 6%;
          }
          @media  ${ PageBreaks.smUp } {
            .section-time{
              width: 12%;
              margin-right: 8%;
            }
          }

          .section-title {
            margin-top: 13%;
            color: #1A1A1A;
          }
          @media  ${ PageBreaks.smUp } {
            .section-title{
              width: 88%;
              margin-top: 0%;
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
            margin-left: 0px;
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
            margin-bottom: 10px;
          }
          @media ${ PageBreaks.smUp } {
            .information p {
              white-space: nowrap;
              margin-bottom: 20px;
              font-size: 24px;
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
          .gradient {
             width: 100%;
             height: 500px;
             top: 2500px;
             margin: 0 auto;
             background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
             z-index: 999;
             position: absolute;
          }
          @media ${ PageBreaks.smUp } {
            .gradient {
              top: 1250px;
              height: 300px;
            }
          }
        `}</style>
      </div>
    )
  }
}
