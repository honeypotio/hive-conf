import AnchorLink from 'react-anchor-link-smooth-scroll';
import PageBreaks from '../utils/page-breaks';

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
    text: "Hive Conf '18",
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

export default function Header() {
  return (
    <div>
      <ul>
        <li><img src="/static/images/hive-logo.svg" alt="Hive Logo"/></li>
        { 
            HeaderLinks.map(item => (<li className={"header-link"} key={ item.link }>
                            <AnchorLink href={`${item.link}`} className={item.btn ? "btn" : "link"}>
                              { item.text }
                            </AnchorLink>
                          </li>))
        }
      </ul>
      <style jsx>{`
        padding-bottom: 80px;

        div {
          background-color: #000000;
          background-image: url("/static/images/nav-bg.jpg");
          background-size: cover;
          background-position: 0 -250px;
        }
        ul {
          display: flex;
          list-style: none;
          flex-direction: column;
          padding-left: 0;
          background-color: rgba(0,0,0,0.6);
          padding: 20px 12px;
          margin: 0;
        }
        @media ${ PageBreaks.smUp } {
          ul {
            display: flex;
            list-style: none;
            flex-direction: row;
            padding: 40px 20px;
          }
        }
        li {
          display: block;
          flex-grow: 1;
          padding: 12px;
          text-align: center;
        }

        li:first-child {
          flex-grow: 5;
        }
        @media ${ PageBreaks.lgUp } {
          li {
            padding: 20px;
          }
        }

        img {
          max-height: 32px;
        }

        @media ${ PageBreaks.smUp } {
          img {
            max-height: 40px;
          }
        }

        .header-link :global(a) {
          font-weight: 400;
          font-size: 16px;
        }
        
        @media ${ PageBreaks.smUp } {
          .header-link :global(a) {
            font-size: 20px;
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
          background-color: #0000bb;
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 2px;
          text-decoration: none;
          font-weight: 600;
          background-image: linear-gradient(to left, #0007ff, #0000bb);
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
      `}</style>
    </div>
  )
}
