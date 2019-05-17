import AnchorLink from 'react-anchor-link-smooth-scroll';
import PageBreaks from '../utils/page-breaks';
import React from 'react';

const HeaderLinks = [
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
    link: `https://honeypot.netlify.com/hive-conference-2018/`
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

export default class Header extends React.Component {
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
      <div className={ `header ${ !this.state.menuCollapsed && "header-expanded"}` }>
        <ul className={ "mobile-header" }>
          <li className={ "mobile-logo" }>
            <a href={""}>
              <img src={"/static/images/hive-logo.svg"} alt={"Hive Logo"} />
            </a>
          </li>
          <li className={"menu-toggle"}>
            <a href="#" className="hamburger" onClick={ this.toggleMenu }>
              <span className={`patty ${ !this.state.menuCollapsed && "patty-active" }`}></span>
              <span className={`patty ${ !this.state.menuCollapsed && "patty-active" }`}></span>
              <span className={`patty ${ !this.state.menuCollapsed && "patty-active" }`}></span>
            </a>
          </li>
          <ul className={`mobile-dropdown ${ !this.state.menuCollapsed && "dropdown-expanded" }`}>
            { 
              HeaderLinks.map(item => (<li className={"header-link"} key={ item.link }>
                              <AnchorLink href={`${item.link}`} className={item.btn ? "btn" : "link"}>
                                { item.text }
                              </AnchorLink>
                            </li>))
            }
          </ul>
        </ul>
        <ul className={ "large-header" }>
          <li>
            <a className={ "hover-logo" } href={""}>
              <img className={ "hover-hide" } src="/static/images/hive-logo.svg" alt="Hive Logo"/>
              <img className={ "hover-show" } src={"/static/images/HiveConf_Logo_White.svg"} alt={"Hive Logo"} />
            </a>
          </li>
          { 
              HeaderLinks.map(item => (<li className={"header-link"} key={ item.link }>
                              <AnchorLink href={`${item.link}`} className={item.btn ? "btn" : "link"}>
                                { item.text }
                              </AnchorLink>
                            </li>))
          }
        </ul>
        <style jsx>{`
          @media ${ PageBreaks.smUp } {
            .header {
              padding-bottom: 80px;
            }
          }

          .header {
            background-color: #000000;
            background-image: url("/static/images/nav-bg.jpg");
            background-size: 100vw;
            background-repeat: no-repeat;
            background-position-x: -10px;
          }
          @media ${ PageBreaks.smUp } {
            .header {
              background-position: 0 -250px;
            }
          }

          .header-expanded {
            background-position-x: -10px;
          }

          ul {
            display: flex;
            background-color: rgba(0,0,0,0.1);
            list-style: none;
            flex-direction: column;
            padding-left: 0;
            padding: 20px 12px;
            margin: 0;
            padding-bottom: 120px;
            margin-left: -20px;
            margin-right: -20px;
          }
          @media ${ PageBreaks.smUp } {
            ul {
              display: flex;
              list-style: none;
              flex-direction: row;
              padding: 40px 20px;
              padding-bottom: 180px;
              background-color: rgba(0,0,0,0.6);
            }
          }

          .large-header {
            display: none;
          }

          .mobile-header {
            flex-direction: row;
            flex-flow: row wrap;
          }

          .mobile-header > li {
            flex-grow: 1;
          }

          @media ${ PageBreaks.smUp } {
            .large-header {
              display: flex;
            }
            .mobile-header {
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
            padding-left: 20px
          }

          .menu-toggle {
            text-align: right;
            padding: 20px;
            padding-right: 20px
          }

          .mobile-logo, .menu-toggle {
            flex: 1 0 0;
          }

          .hamburger {
            cursor: pointer;
            float: right;
          }

          .mobile-dropdown {
            flex: 1 100%;
            max-height: 0;
            padding: 0;
            transition: 0.3s ease-in;
            padding-bottom: 0;
            overflow: hidden;
          }

          .dropdown-expanded {
            max-height: 400px;
            background-color: rgba(0, 0, 0, 0.6);
          }

          .patty {
            display: block;
            position: relative;
            margin-bottom: 5px;
            height: 2px;
            width: 30px;
            background-color: #ffffff;
            transform: rotate(0deg);
            transition: 0.2s ease-in;
          }

          .patty-active:nth-child(2) {
            transform: rotate(-45deg);
            top: -6px;
          }

          .patty-active:first-child {
            transform: rotate(45deg);
          }

          .patty-active:last-child {
            transform: rotate(-45deg);
            top: -13px;
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

          .header-link :global(a) {
            font-weight: 400;
            font-size: 16px;
          }

          @media ${ PageBreaks.smUp } {
            .header-link {
              line-height: 60px;
            }

            .header-link :global(a) {
              font-size: 17px;
            }
          }

          .header-link :global(.link),
          .header-link :global(.link:visited),
          .header-link :global(.link:hover){
            text-decoration: none;
          }
          .header-link :global(.link){
            color: #ffffff;
          }
          .header-link :global(.btn){
            color: #ffffff;
            padding: 6px 14px;
            border-radius: 2px;
            text-decoration: none;
            font-weight: 600;
            background-image: linear-gradient(0.66turn, #0007ff, #0000bb);
          }
          @media ${ PageBreaks.mdUp } {
            .header-link :global(.btn){
              padding: 14px 24px;
              border-radius: 5px;
            }
          }
          .header-link :global(.link:visited),
          .header-link :global(.link:hover) {
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
            display: none;
          }

          .hover-logo:hover .hover-show {
            display: block;
            animation: slide-in-left 1s forwards;
          }

          .hover-logo:hover .hover-hide {
            display: none;
          }
        `}</style>
      </div>
    )
  }
}