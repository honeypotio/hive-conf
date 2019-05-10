
import Head from 'next/head';
import Header from '../components/header';
import Intro from '../components/intro';
import Speakers from '../components/speakers';
import Topics from '../components/topics';
import Sponsorships from '../components/sponsorships';
import Honeypot from '../components/honeypot';
import Hiveconf from '../components/hiveconf';
import "../styles/main.scss"

export default function Main() {
  return (
    <div>
      <Head>
        <title>{ "Hive Conf 2019" }</title>
        <link rel={"icon"} type={"image/svg"} href={"/static/images/favicon.png"} />
        <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"} />
        <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
      </Head>

      <Header />
      <Intro />
      <Speakers />
      <Topics />
      <Hiveconf />
      <Sponsorships />
      <Honeypot />

      <style jsx>{`
        :global(body) {
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
