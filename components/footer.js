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
              <img className={ "hover-hide" } src="/static/images/HiveConf_Icon_Black.svg" alt="Hive Logo"/>
              <img className={ "hover-show" } src={"/static/images/HiveConf_Logo_Black.svg"} alt={"Hive Logo"} />
            </a>
          </li>
          {
            FooterLinks.map(item => (<li className={"footer-link"} key={ item.link }>

                {item.btn ?
                 <Link href={item.link} ><a target="_blank" className="footer-link btn">{item.text}</a></Link>
                :
                <AnchorLink href={`${item.link}`} className="link">
                    { item.text }
                </AnchorLink>}
            </li>))
          }

        </ul>
        <div className="footer-second">
            <div className="left"> <span className=""><i className="fa fa-copyright"></i> 2019 Honeypot</span></div>

            <div className="right">
                <ul className="social-set">
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
          @media ${ PageBreaks.smUp } {
            .footer {
              padding-bottom: 80px;
            }
          }

          .footer {
            background-color: #ffffff;
            background-size: 100vw;
            background-repeat: no-repeat;
            background-position-x: -10px;
          }
          @media ${ PageBreaks.smUp } {
            .footer {
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
              max-height: 48px;
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
          }
          .footer-link :global(.btn){
            color: #ffffff;
            padding: 6px 14px;
            border-radius: 2px;
            text-decoration: none;
            font-weight: 600;
            background-image: linear-gradient(0.66turn, #0007ff, #0000bb);
          }
          @media ${ PageBreaks.mdUp } {
            .footer-link :global(.btn){
              padding: 0px 24px;
              border-radius: 5px;
            }
          }
          .footer-link :global(.link:visited),
          .footer-link :global(.link:hover) {
            text-decoration: none;
          }

          @-webkit-keyframes slide-in-left {
            0% { left: -80px; }
            100% { left: 0; }
          }

          @keyframes slide-in-left {
            0% { left: -80px; }
            100% { left: 0; }
          }

          .hover-logo {
            position: relative;
            display: block;
            overflow: hidden;
            height: 60px;
          }

          .hover-show {
            position: absolute;
            display: block;
          }

          .hover-logo:hover .hover-show {
            display: block;
            animation: slide-in-left 0.5s forwards;
          }

          .hover-logo:hover .hover-hide {
            display: none;
          }

          .social-set {
            display:none;
          }

          .social-link{
            flex-grow: 0;
          }

          .footer-second .left {
            justify-content: flex-end;
            text-align: right;
            margin-top: -20px;
            margin-bottom: 30px;
          }
          @media  ${ PageBreaks.smUp } {
          .footer-second {
            display: flex;
            margin: 40px 20px;
          }
          .social-set{
              display: flex;
              margin: 0 10px 0 20px;
          }
          .footer-second .left {
            text-align: left;
          }
          .left {
            display: flex;
            flex-grow: 4;
            flex-direction: column;
            justify-content: center;
            margin-left: 20px
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
