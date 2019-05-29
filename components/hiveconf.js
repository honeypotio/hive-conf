import PageBreaks from '../utils/page-breaks';
import Carousel from 'react-bootstrap/Carousel';

const Testimonials = [{
  "title" : "Share Experiences Across Teams",
  "name" : "Teddy",
  "position" : "Talent Manager",
  "text" : "Finally a conference where I can take my CTO to and make use of the learnings to make a game plan for our recruitment. I really loved to see people who were interested in how to improve recruitment in their companies! After all, we are all in it and the sooner we become \"partners in crime\" (Thanks Kevin!) the better!"
},
{
  "title" : "Share Experiences Across Teams",
  "name" : "Ayca",
  "position" : "Senior Recruiter & Employer Branding ",
  "text" : "Hive Conference connects modern HR professionals who have an understanding of people and people management. It's not traditional, that's what works best."
},
{
  "title" : "Enjoy diverse topics",
  "name" : "Barbara",
  "position" : "HR Manager",
  "text" : "Being an HR Manager in tech for many years I always looked for something just like this. It fulfilled all my expectations. Very interesting, very inspirational. Thanks a million and I will look forward to attend again next year!"
},
{
  "title" : "Enjoy diverse topics",
  "name" : "Lars",
  "position" : "Head of Technology",
  "text" : "Recruitment does not stop when you have successfully hired a new engineer. Each company needs to continue providing a great employee experience to retain and grow their talents. The makers of the Hive conference and their speakers definitely understand that recruiting is a full cycle."
},
{
  "title" : "Have fun and network",
  "name" : "José",
  "position" : "Talent Acquisition Lead / Product & Technology",
  "text" : "If you are looking for a small but very exclusive HR-Tech conference, Hive is the right one for you."
},
{
  "title" : "Have fun and network",
  "name" : "Dominik",
  "position" : "Head of Engineering",
  "text" : "I had an amazing time at the HiveConf18. Gained a lot of insights and already put some of those into action. #PartnersInCrime Honeypot for organizing this event! Thanks to all of you! Looking forward to next time!"
},
];

const Logos = ["Logo_Soundcloud_White", "Logo_ProSieben_White", "Logo_DeliveryHero_White", "Logo_Blacklane_White", "Logo_HeyCar_White", "Logo_Lufthansa_White", "Logo_Zalando_White", "Logo_Flixbus_White", "Logo_Auto1_White", "Logo_Omio_White"
];

const Quotes = [{
  "img" : "MarkLevy",
  "text" : "All functions that touch the employee journey should be \"in service\" to the employee.",
  "name" : "Mark Levy",
  "position" : "Former Airbnb Employee Experience Pioneer"
},
{
  "img" : "AleksandraGavrilovska",
  "text" : "A team is a group of people doing a better job together.",
  "name" : "Aleksandra Gavrilovska",
  "position" : "Engineering Manager @ SoundCloud"
},
{
  "img" : "DanielKrauss",
  "text" : "Hire people who are better than you in the roles you hired them for.",
  "name" : "Daniel Krauss",
  "position" : "Co-Founder & CIO @ Flixbus"
},
{
  "img" : "KevinGoldsmith",
  "text" : "We went from only using Ruby to implementing Elixir 30% of the time and were the only ones in town doing it. That makes you different and helps a lot.",
  "name" : "Kevin Goldsmith",
  "position" : "VP of Engineering @ AstrumU"
},
{
  "img" : "MartinaNiemann",
  "text" : "It’s our job to support employees to adapt to new developments and help drive them forward.",
  "name" : "Martina Niemann",
  "position" : "VP HR Management @ Lufthansa"
}]

export default function Hiveconf() {
  return (
    <div id={"hiveconf18"}>
      <div className={"wrapper"}>
        <div className={"oval"}></div>
        <h2>HiveConf'18</h2>
        <div className={"hive18-logo"}><img src={`/static/images/logos/Logo_Hive2018.svg`} alt={"HiveConf 18 Logo"} /></div>
        <div className={"description"}>
          <p>Last year, HiveConf brought together 200 attendees, from C-level executives to team leads and managers in HR and Tech. With 22 speakers and topics including scaling tech teams, optimizing organizational design and preparing engineering pipelines, the first edition of HiveConf was a blast. Let’s check out some highlights from last year’s event!
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NP0tIEelhFM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className={"feedback"}>
          <div className={"thumbsup"}>
            <img src={`/static/icons/ThumbsUp.svg`} alt={"Thumps Up"}/>
          </div>
          <p><strong>97% of our attendees</strong> shared that they are likely to come back for HiveConf’19</p>
        </div>
      </div>
      <div className={"testimonials"}>
        <div className={"carouseloval"}></div>
          <Carousel
          pauseOnHover={true}
          indicators={false}
          nextIcon={<img aria-hidden="true" src={`/static/icons/ArrowYellow_Right.svg`} className={ "hide-mobile" } />}
          prevIcon={<img aria-hidden="true" src={`/static/icons/ArrowYellow_Left.svg`} className={ "hide-mobile" } />}>
            {Testimonials.map(testimonial => (
              <Carousel.Item key={testimonial.name}>
                <div className={"narrow"}>
                  <img className={"quotesign hide-mobile"} src={`/static/icons/Quote.svg`} alt={"Quote Signs"}/>
                  <div className={"testimonial"}>
                    <div className={"left"}>
                      <img className={"quotesign hide-desktop"} src={`/static/icons/Quote.svg`} alt={"Quote Signs"}/>
                      <h3 className={"title"}>{testimonial.title}</h3>
                      <div className={"info hide-mobile"}>
                        <h3 className={"name"}>{testimonial.name}</h3>
                        <div className={"position"}>{testimonial.position}</div>
                      </div>
                    </div>
                    <div className={"right"}>
                      <p>{testimonial.text}</p>
                    </div>
                    <div className={ "info hide-desktop" }>
                      <h3 className={"name"}>{testimonial.name}</h3>
                      <div className={"position"}>{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
      </div>
      <div className={"companies"}>
        <h5>Companies at HiveConf'18</h5>
        <div className={"logos"}>
          {Logos.map(logo =>(
            <img key={logo} src={`/static/images/logos/${logo}.svg`} alt={`${logo}`}/>
          ))}
        </div>
      </div>
      <div className={"quotes"}>
        <Carousel
        indicators={false}
        nextIcon={<img aria-hidden="true" src={`/static/icons/ArrowYellow_Right.svg`} className={ "hide-mobile" } />}
        prevIcon={<img aria-hidden="true" src={`/static/icons/ArrowYellow_Left.svg`} className={ "hide-mobile" } />}>
          {Quotes.map(quote => (
            <Carousel.Item key={quote.name}>
              <div className={"quotewrap"}>
                <img src={`/static/images/quotes/${quote.img}@2x.png`} className={ "hide-mobile" } />
                <div className={"speaker-info"}>
                  <img className={"quotesign"} src={`/static/icons/Quote.svg`} alt={"Quote Signs"}/>
                  <p className={"quote-text"}>{quote.text}</p>
                  <h3 className={""}>{quote.name}</h3>
                  <h4 className={""}>{quote.position}</h4>
                  <div className={"quote-hive18"}><img src={`/static/images/logos/Logo_Hive2018.svg`} alt={"HiveConf 18 Logo"} /></div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={"cta-wrapper"}>
        <div className={"cta-container"}>
          <h3>HR Analytics: The Biggest Buzz at HiveConf’18</h3>
          <p>Read what our amazing speakers said last year about HR Analytics in our blog. </p>
          <a target="_blank" href="https://blog.honeypot.io/HR-analytics-shaping-hiring-trends-2019/" className={"cta"}>Read Now</a>
        </div>

      </div>

<style jsx>{`
  #hiveconf18 {
    background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
  }

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 0;
    position: relative;
    z-index: 1;
  }
  @media  ${ PageBreaks.smUp } {
    .wrapper {
      padding: 150px 0 60px 0;
    }
  }

  h2 {
    font-size: 36px;
    color: white;
    font-weight: bold;
    letter-spacing: -0.4px;
    text-align: center;
  }
  @media ${ PageBreaks.smUp } {
    h2 {
      font-size: 60px;
      margin-top: 0;
      margin-bottom: 40px;
      text-align: initial;
    }
  }

  .oval {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
    position: absolute;
    left: 0;
    top: -20px;
    z-index: -1;
  }
  .hive18-logo {
    position: absolute;
    left: 0px;
  }

  .quote-hive18 {
    margin-top: -110px;
    margin-left: 360px;
  }

  .quote-hive18 img{
    width: 65%;
  }

  @media  ${ PageBreaks.smUp } {
    .oval {
      height: 413px;
      width: 413px;
      top: -40px;
      left: 100px;
    }
    .hive18-logo {
      left: -250px;
      margin-top: 115px;
    }

    .quote-text{
      min-height: 500px;
    }
  }

  .description {
    display: grid;
    width: 100%;
    margin: 0px auto;
    margin-left: 20px;
    grid-template-columns: 100%;
    grid-column-gap: 30px;
    grid-template-rows: auto;
  }
  @media  ${ PageBreaks.smUp } {
    .description {
      margin: 0px auto;
      width: 80%;
      grid-template-columns: repeat(2, calc(50% - 15px));
    }
  }

  .description p {
    color: white;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 40px;
  }
  @media ${ PageBreaks.smUp } {
    .description p {
      font-size: 18px;
      line-height: 46px;
      text-align: initial;
      margin-bottom: initial;
    }
  }

  .description img {
    max-width: 100%;
    max-height: 90%;
    align-self: center;
  }

  .feedback {
    margin-top: 40px;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 12px;
  }
  @media ${ PageBreaks.smUp } {
    .feedback {
      width: 60%;
      margin: 100px auto 0 auto;
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 32px;
    }
  }

  .thumbsup {
    background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    text-align: center;
  }
  @media ${ PageBreaks.smUp } {
    .thumbsup {
      background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
      width: 105px;
      height: 105px;
      border-radius: 50%;
      position: relative
    }
  }

  .thumbsup img {
    height: 24px;
    margin-top: 10px;
    margin-left: 8px;
  }
  @media ${ PageBreaks.smUp } {
    .thumbsup img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      height: auto;
    }
  }

  .feedback p {
    font-size: 16px;
    line-height: 30px;
    color: white;
    margin: 0;
  }
  @media ${ PageBreaks.smUp } {
    .feedback p {
      font-size: 27px;
      line-height: 52px;
    }
  }

  .testimonials {
    position: relative;
  }
  @media ${ PageBreaks.smUp } {
    .testimonials {
      height: 650px;
    }
  }

  .testimonials > :global(.carousel) {
    margin: 20px 0;
    margin-bottom: 40px;
  }
  @media ${ PageBreaks.smUp } {
    .testimonials > :global(.carousel) {
      margin: 0;
      margin-bottom: 0;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
    }
  }

  @media ${ PageBreaks.smUp } {
    .testimonials > :global(.carousel) > :global(.carousel-inner) {
      max-width: 1100px;
      margin: 0 auto;
      height: 500px;
    }
  }

  .carouseloval {
    display: none;
  }
  @media ${ PageBreaks.smUp } {
    .carouseloval {
      display: initial;
      width: 650px;
      height: 650px;
      background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      border-radius: 50%;
    }
  }

  .testimonial {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-column-gap: 30px;
    grid-template-rows: auto;
    color: white;
  }
  @media ${ PageBreaks.smUp } {
    .testimonial {
      display: grid;
      grid-template-columns: repeat(2, calc(50% - 15px));
      grid-column-gap: 30px;
      grid-template-rows: auto;
      color: white;
    }
  }

  .hide-mobile {
    display: none;
  }
  @media ${ PageBreaks.smUp } {
    .hide-mobile {
      display: initial;
    }
  }

  @media ${ PageBreaks.smUp } {
    .hide-desktop {
      display: none;
    }
  }

  .testimonial p {
    font-size: 16px;
    line-height: 30px;
    margin: 0;
  }
  @media ${ PageBreaks.smUp } {
    .testimonial p {
      font-size: 18px;
      line-height: 46px;
      margin: 0;
      min-height: 380px;
    }
  }

  .testimonial h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
  }
  @media ${ PageBreaks.smUp } {
    .testimonial h3 {
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
    }
  }

  .testimonial .left {
    position: relative;
  }

  .testimonial .info {
    margin-top: 20px;
  }

  @media ${ PageBreaks.smUp } {
    .testimonial .info {
      position: absolute;
      margin-top: 0;
      bottom: 0;
      right: 0;
    }
  }

  .title {
    font-size: 22px;
    margin-bottom: 20px;
  }

  @media ${ PageBreaks.smUp } {
    .title {
      font-size: initial;
      margin-bottom: 0;
      max-width: 400px;
    }
  }

  .testimonial .name {
    font-size: 22px;
    margin-bottom: 0;
    text-align: right;
  }
  @media ${ PageBreaks.smUp } {
    .testimonial .name {
      font-size: 36px;
    }
  }

  .testimonial .position {
    font-size: 18px;
    font-weight: 500;
    text-align: right;
    max-width: 260px;
  }
  @media ${ PageBreaks.smUp } {
    .testimonial .position {
      font-size: 24px;
      font-weight: 500;
      line-height: 45px;
    }
  }

  .quotesign {
    width: 32px;
    margin-bottom: 16px;
    margin-right: 10px;
    float: left;
  }
  @media ${ PageBreaks.smUp } {
    .quotesign {
      width: 80px;
      margin-bottom: 50px;
      float: none;
    }
  }

  @media ${ PageBreaks.smUp } {
    .narrow {
      width: 80%;
      margin: 0 auto;
    }
  }

  .companies {
    max-width: 1100px;
    margin: 0 auto 100px;
  }

  .companies h5 {
    margin: 0 auto;
    color: white;
    font-size: 24px;
    line-height: 41px;
    font-weight: bold;
    text-align: center;
    margin-top: 40px;
  }
  @media ${ PageBreaks.smUp } {
    .companies h5 {
      width: 80%;
      margin-bottom: 30px;
      margin-top: 0px;
      font-size: 30px;
      text-align: initial;
    }
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 40px;
  }
  @media ${ PageBreaks.smUp } {
    .logos {
      margin-bottom: 20px;
    }
  }

  .logos img {
    flex: 0 0 calc(16.66% - 20px);
    padding: 8px;
    max-width: 80px;
  }

  @media ${ PageBreaks.smUp } {
    .logos img {
      max-height: 100px;
      max-width: none;
      padding: 20px;
    }
  }

  .quotes {
    margin: 0 -20px;
    padding: 20px;
    background-image: linear-gradient(to right, #0000c1 , #0000fc);
  }
  @media ${ PageBreaks.smUp } {
    .quotes {
      margin: 0;
      padding: 0;
      background-image: none;
    }
  }

  @media ${ PageBreaks.smUp } {
    .quotewrap {
      display: grid;
      grid-template-columns: auto 1fr;
    }
  }

  .speaker-info {
    color: white;
    position: relative;
  }
  @media ${ PageBreaks.smUp } {
    .speaker-info {
      background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
      padding: 80px 0 0 300px;
      color: white;
      position: relative;
    }
  }

  @media ${ PageBreaks.smUp } {
    .quotewrap > img {
      height: 500px;
      z-index: 10;
      margin-right: -200px;
    }
  }

  @media ${ PageBreaks.smUp } {
    .speaker-info p {
      font-size: 27px;
      line-height: 52px;
      margin: 0;
      width: 500px;
    }
  }

  .speaker-info h3 {
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    text-align: right;
    margin-bottom: 0;
  }
  @media ${ PageBreaks.smUp } {
    .speaker-info h3 {
      margin-top: 40px;
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
      text-align: initial;
    }
  }

  .speaker-info h4 {
    font-size: 14px;
    font-weight: 600;
    text-align: right;
  }
  @media ${ PageBreaks.smUp } {
    .speaker-info h4 {
      font-size: 24px;
      font-weight: 500;
      line-height: 45px;
      text-align: initial;
    }
  }

  .speaker-info .quotesign {
    width: 40px;
    margin-bottom: 20px;
    z-index: 101;
  }
  @media ${ PageBreaks.smUp } {
    .speaker-info .quotesign {
      position: absolute;
      width: 100px;
      top: 95px;
      left: 135px;
      margin-bottom: 0px;
    }
  }

  .quotes > :global(.carousel) > :global(.carousel-control-prev) {
    z-index: 101;
  }

  .cta-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 0;
  }

  .cta-container {
    margin: 0 auto;
    color: white;
    position: relative;
  }
  @media ${ PageBreaks.smUp } {
    .cta-container {
      width: 80%;
      margin: 0 auto;
      color: white;
      position: relative;
    }
  }

  .cta-container h3 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  @media ${ PageBreaks.smUp } {
    .cta-container h3 {
      font-size: 30px;
      line-height: 41px;
      font-weight: bold;
      text-align: initial;
    }
  }

  .cta-container p {
    font-size: 14px;
    text-align: center;
    font-weight: 600;
  }
  @media ${ PageBreaks.smUp } {
    .cta-container p {
      font-size: 18px;
      line-height: 46px;
      text-align: initial;
      font-weight: 400;
    }
  }

  .cta {
    display: inline-block;
    border-radius: 6px;
    background-color: #F9FF00;
    color: #000000;
    font-size: 12px;
    font-weight: bold;
    padding: 8px 30px;
    cursor: pointer;
    text-decoration: none;
    margin-left: calc(50vw - 80px);
  }
  @media ${ PageBreaks.smUp } {
    .cta {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 18px;
      line-height: 22px;
      padding: 15px 40px;
      margin-left: 0;
    }
  }
  .cta:hover {
    background-color: #FFF;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
  }
`}</style>
    </div>
  )
}
