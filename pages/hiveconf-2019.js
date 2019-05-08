
import Head from 'next/head';
import Header from '../components/header';
import Intro from '../components/intro';
import Speakers from '../components/speakers';
import Topics from '../components/topics';
import Sponsorships from '../components/sponsorships';
import "../styles/main.scss"

export default function Main() {
  return (
    <div>
      <Head>
        <title>{ "Hive Conf 2019" }</title>
        <link rel={"icon"} type={"image/svg"} href={"/static/images/favicon.png"} />
        <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"} />
      </Head>

      <Header />
      <Intro />
      <Speakers />
      <Topics />
      <Sponsorships />

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
