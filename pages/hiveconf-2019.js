import Head from 'next/head';
import React from 'react';
import Header from '../components/header';
import Intro from '../components/intro';
import Speakers from '../components/speakers';
import Topics from '../components/topics';
import Sponsorships from '../components/sponsorships';
import Honeypot from '../components/honeypot';
import Hiveconf from '../components/hiveconf';
import Location from '../components/location';
import Tickets from '../components/tickets';
import Schedule from '../components/schedule';
import Footer from '../components/footer';

import "../styles/main.scss";

export default class Main extends React.Component {

  state = { sticky: false }

  scrollHander = () => {
    const VERTICAL_THRESHOLD = 48;
    if (window.scrollY >= VERTICAL_THRESHOLD && !this.state.sticky) {
      this.setState(() => ({ sticky: true }));
    } else if (window.scrollY < VERTICAL_THRESHOLD  && this.state.sticky) {
      this.setState(() => ({ sticky: false }));
    }
  }

  componentDidMount() {
    const isDesktop = window.document.body.clientWidth >= 480;

    if (isDesktop) {
      this.scrollHander();
      window.addEventListener('scroll', this.scrollHander);
    }
  }

  componentsWillUnmount() {
    window.removeEventListener('scroll', this.scrollHander);
  }

  render() {
    return (
      <div className={ "main" }>
        <Head>
          <title>HiveConf'19 - Where Tech meets HR</title>
          <link rel={"icon"} type={"image/svg"} href={"/static/images/favicon.png"} />
          <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"} />
          <link rel={"stylesheet"} href={"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"} integrity={"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"} crossOrigin="anonymous" />
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="HiveConf'19 - Where Tech meets HR" />
          <meta property="og:description" content="HiveConf is a one-day conference for HR & Talent Acquisition Leaders, Technical Hiring managers, CTOs and VPs of Engineering focused on all aspects of building & scaling great tech teams."/>
          <meta property="og:image" content="./static/images/201905_HiveConf_Facebook_Cover"/>
          <meta property="og:image:alt" content="HiveConf'19 - Where Tech meets HR"/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@honeypotio"/>
          <meta name="twitter:title" content="HiveConf'19 - Where Tech meets HR"/>
          <meta name="twitter:description" content="HiveConf is a one-day conference for HR & Talent Acquisition Leaders, Technical Hiring managers, CTOs and VPs of Engineering focused on all aspects of building & scaling great tech teams."/>
          <meta name="twitter:image" content="./static/images/201905_HiveConf_Facebook_Cover"/>
        </Head>

        <Header sticky={ this.state.sticky } />
        <Intro />
        <Speakers />
        <Schedule />
        <Topics />
        <Hiveconf />
        <Location />
        <Tickets />
        <Sponsorships />
        <Honeypot />
        <Footer />

        <style jsx>{`
          :global(body) {
            margin: 0;
            overflow-x: hidden;
          }

          :global(html){
            overflow-x:hidden;
          }

          * {
            box-sizing: border-box;
          }

          .main > :global(div) {
            padding-left: 20px;
            padding-right: 20px;
          }
        `}</style>
      </div>
    )
  }
}
