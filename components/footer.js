import AnchorLink from 'react-anchor-link-smooth-scroll';
import PageBreaks from '../utils/page-breaks';
import React from 'react';
import Link from 'next/link';

const FooterLinks = [
  {
    text: "Speakers",
    link: "#speakers"
  },{
    text: "Schedule",
    link: "#schedule"
  },{
    text: "Topics",
    link: "#topics"
  },{
    text: "HiveConf'18",
    link: `#hiveconf18`
  },{
    text: "Location",
    link: "#location"
  },{
    text: "Sponsorship",
    link: "#sponsorship"
  },{
    text: "Get Tickets",
    link: `https://hiveconf19.eventbrite.com/?aff=website`,
    btn: true,
  },
];

const SocialLinks = [
    {
      link: "https://www.linkedin.com/company/honeypotio",
      logo: "/static/images/social_logos/Linkedin_Icon_Footer.svg"
    },
    {
      link: "https://www.facebook.com/Honeypotio/",
      logo: "/static/images/social_logos/Facebook_Icon_Footer.svg"
    },
    {
      link: "https://www.instagram.com/honeypot.io/",
      logo: "/static/images/social_logos/Instagram_Icon_Footer.svg"
    },
    {
      link: "https://twitter.com/honeypotio",
      logo: "/static/images/social_logos/Twitter_Icon_Footer.svg"
    },
  ];


export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuCollapsed: true };

    this.toggleMenu = () => {
      this.setState(() => ({
        menuCollapsed: !this.state.menuCollapsed
      }));
    };
  }

  render() {
    return (

      <div className={ `footer ${ !this.state.menuCollapsed && "footer-expanded"}` }>
        <ul className={ "mobile-footer" }>
          <li className={ "mobile-logo" }>
            <a href={""}>
              <img className={"mobile-logo-img"} src={"/static/images/HiveConf_Logo_Black.svg"} alt={"Hive Logo"} />
            </a>
          </li>
          {
            SocialLinks.map(item => (
                <li className={"social-link"} key={ item.link }>
                    <Link href={item.link}>
                        <a target="_blank">
                            <img className={ "social-logo" } src={item.logo} alt={"Social Logo"} />
                        </a>
                    </Link>
                </li>))
            }
        </ul>
        <ul className={ "large-footer" }>
          <li>
            <a className={ "hover-logo" } href={""}>
              <img className={ "hover-show" } src={"/static/images/HiveConf_Logo_Black.svg"} alt={"Hive Logo"} />
            </a>
          </li>
          {
            FooterLinks.map(item => (<li className={"footer-link"} key={ item.link }>

                {item.btn ?
                 <Link href={item.link} ><a target="_blank" className="footer-link btn ticket-cta">{item.text}</a></Link>
                :
                <AnchorLink href={`${item.link}`} className="link">
                    { item.text }
                </AnchorLink>}
            </li>))
          }

        </ul>
        <div className="footer-second">
            <div className="left"> <span><i className="fa fa-copyright"></i> 2019 Honeypot</span></div>

            <div className="right">

                <ul className="social-set">
                <p className='social-title'>Honeypot /</p>
                    {
                    SocialLinks.map(item => (
                        <li className={"social-link"} key={ item.link }>
                            <Link href={item.link}>
                                <a target="_blank">
                                    <img className={ "social-logo" } src={item.logo} alt={"Social Logo"} />
                                </a>
                            </Link>
                        </li>))
                    }
                </ul>
            </div>
            </div>

        <style jsx>{`
          .footer {
            background-color: #ffffff;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px 0;
            position: relative;
          }
          @media ${ PageBreaks.smUp } {
            .footer {
              padding-bottom: 40px;
              background-position: 0 -250px;
            }
          }

          ul {
            display: flex;
            list-style: none;
            flex-direction: column;
            padding-left: 0;
            padding: 20px 12px;
            margin: 0;
            padding-bottom: 20px;
            margin-left: -20px;
            margin-right: -20px;
          }
          @media ${ PageBreaks.smUp } {
            ul {
              display: flex;
              list-style: none;
              flex-direction: row;
              padding: 40px 20px;
              padding-bottom: 80px;
              background-color: #ffffff;
            }
          }

          .large-footer {
            display: none;
          }

          .social-link img{
            filter: invert(20%);
          }
          .social-link img:hover{
            filter: invert(0%);
          }

          .mobile-footer {
            flex-direction: row;
            flex-flow: row wrap;
          }

          .mobile-footer > li {
            margin: 0 5px 0 5px;
          }

          @media ${ PageBreaks.smUp } {
            .large-footer {
              display: flex;
            }
            .mobile-footer {
              display: none;
            }
          }

          li {
            display: block;
            flex-grow: 1;
            padding: 12px 0;
            text-align: center;
          }

          li:first-child {
            flex-grow: 5;
          }

          .mobile-logo {
            text-align: left;
            padding-left: 20px;
          }

          .mobile-logo-img {
            height: 80px;
          }

          img {
            max-height: 32px;
          }
          @media ${ PageBreaks.smUp } {
            img {
              max-height: 40px;
              margin-top: 8px;
            }
          }

          .footer-link :global(a) {
            font-weight: 400;
            font-size: 16px;
          }

          @media ${ PageBreaks.smUp } {
            .footer-link {
              line-height: 60px;
            }

            .footer-link :global(a) {
              font-size: 17px;
              line-height: 30px;
            }
          }

          .footer-link :global(.link),
          .footer-link :global(.link:visited),
          .footer-link :global(.link:hover){
            text-decoration: none;
          }
          .footer-link :global(.link:hover){
            font-weight: 600;
          }
          .footer-link :global(.link){
            color: #4A4A4A;
            max-width: 100px;
          }
          .footer-link :global(.btn){
            color: #ffffff;
            padding: 6px 14px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 700;
            line-height: 22px;
            background: linear-gradient(270deg, #0000FF 0%, #0000AA 100%);
          }
          .footer-link :global(.btn:hover){
            color: #1A1A1A;
            background: #FFF;
            box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
          }
          @media ${ PageBreaks.mdUp } {
            .footer-link :global(.btn){
              padding: 10px 24px;
              border-radius: 6px;
              background: linear-gradient(270deg, #0000FF 0%, #0000AA 100%);
            }
          }
          .footer-link :global(.link:visited),
          .footer-link :global(.link:hover) {
            text-decoration: none;
          }

          .hover-logo {
            position: relative;
            display: block;
            overflow: hidden;
            height: 60px;
          }

          .social-set {
            display:none;
          }

          .social-title {
            margin-top: 20px;
            margin-right: 5px;
          }

          .social-link{
            flex-grow: 0;
          }

          .footer-second .left {
            justify-content: flex-end;
            text-align: right;
          }
          @media  ${ PageBreaks.smUp } {
          .footer-second {
            display: flex;
            margin: 40px 20px;
            align-items: center;
          }
          .social-set{
              display: flex;
              margin: 0 10px 0 20px;
              margin-right: 0px;
          }
          .footer-second .left {
            text-align: left;
          }
          .left {
            display: flex;
            flex-grow: 4;
            flex-direction: column;
            justify-content: center;
            margin-left: 10px;
          }
          .right {
            flex-grow: 0;
          }
          ul.social-set{
            padding: 0px
          }
          li.social-link{
            flex-grow: 1;
            margin: 0 5px 0 5px;
          }
        }
        `}</style>
      </div>
    )
  }
}
