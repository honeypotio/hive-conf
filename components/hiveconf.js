import PageBreaks from '../utils/page-breaks';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';

const Testimonials = [{
  "title" : "Share Experiences Across Teams",
  "name" : "Teddy",
  "position" : "Talent Manager",
  "text" : "Finally a conference where I can take my CTO to and make use of the learnings to make a game plan for our recruitment. I really loved to see people who were interested in how to improve recruitment in their companies! After all, we are all in it and the sooner we become \"partners in crime\" (Thanks Kevin!) the better!"
},
{
  "title" : "Share Experiences Across Teams",
  "name" : "Teddy Tod",
  "position" : "Talent Manager",
  "text" : "I really loved to see people who were interested in how to improve recruitment in their companies! After all, we are all in it and the sooner we become \"partners in crime\" (Thanks Kevin!) the better!"
}];

const Logos = ["Logo_LinkedIn_White", "Logo_Soundcloud_White", "Logo_ProSieben_White", "Logo_DeliveryHero_White", "Logo_Blacklane_White", "Logo_HeyCar_White", "Logo_Lufthansa_White", "Logo_Zalando_White", "Logo_Flixbus_White", "Logo_Auto1_White", "Logo_Omio_White"
];

const Quotes = [{
  "img" : "MarkLevy",
  "text" : "All functions that touch the employee journey should be \"in service\" to the employee.",
  "name" : "Mark Levy",
  "position" : "Former Airbnb Employee Experience Pioneer"
},
{
  "img" : "AleksandraGavrilovska",
  "text" : "All functions that touch the employee journey should be \"in service\" to the employee.",
  "name" : "Aleksandra Gavrilovska",
  "position" : "Former Airbnb Employee Experience Pioneer"
},
{
  "img" : "DanielKrauss",
  "text" : "All functions that touch the employee journey should be \"in service\" to the employee.",
  "name" : "Daniel Krauss",
  "position" : "Former Airbnb Employee Experience Pioneer"
},
{
  "img" : "KevinGoldsmith",
  "text" : "All functions that touch the employee journey should be \"in service\" to the employee.",
  "name" : "Kevin Goldsmith",
  "position" : "Former Airbnb Employee Experience Pioneer"
},
{
  "img" : "MartinaNiemann",
  "text" : "All functions that touch the employee journey should be \"in service\" to the employee.",
  "name" : "Martina Niemann",
  "position" : "Former Airbnb Employee Experience Pioneer"
}]

export default function Hiveconf() {
  return (
    <div id={"hiveconf18"}>
      <div className={"wrapper"}>
        <div className={"oval"}></div>
        <h2>HiveConf'18</h2>
        <div className={"description"}>
          <p>Last year, HiveConf brought together 200 attendees, from C-level executives to team leads and managers in HR and Tech. With 22 speakers and topics including scaling tech teams, optimizing organizational design and preparing engineering pipelines, the first edition of HiveConf was a blast!  Let’s check out some highlights from last year’s event!
          </p>
          <img src={`/static/images/nav-bg.jpg`} alt={"HiveConf 18 Video"} />
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
          indicators={false}
          nextIcon={<img aria-hidden="true" src={`/static/icons/ArrowYellow_Right.svg`} />}
          prevIcon={<img aria-hidden="true" src={`/static/icons/ArrowYellow_Left.svg`} />}>
            {Testimonials.map(testimonial => (
              <Carousel.Item key={testimonial.name}>
                <div className={"narrow"}>
                  <img className={"quotesign"} src={`/static/icons/Quote.svg`} alt={"Quote Signs"}/>
                  <div className={"testimonial"}>
                    <div className={"left"}>
                      <h3 className={"title"}>{testimonial.title}</h3>
                      <div className={"info"}>
                        <h3 className={"name"}>{testimonial.name}</h3>
                        <div className={"position"}>{testimonial.position}</div>
                      </div>
                    </div>
                    <div className={"right"}>
                      <p>{testimonial.text}</p>
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
      nextIcon={<img aria-hidden="true" src={`/static/icons/ArrowYellow_Right.svg`} />}
      prevIcon={<img aria-hidden="true" src={`/static/icons/ArrowYellow_Left.svg`} />}>
        {Quotes.map(quote => (
          <Carousel.Item key={quote.name}>
            <div className={"quotewrap"}>
              <img src={`/static/images/quotes/${quote.img}@2x.png`}/>
              <div className={"speaker-info"}>
                <img className={"quotesign"} src={`/static/icons/Quote.svg`} alt={"Quote Signs"}/>
                <p>{quote.text}</p>
                <h3>{quote.name}</h3>
                <h4>{quote.position}</h4>
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
          <a target="_blank" href="mailto:hiveconf@honeypot.io" className={"cta"}>Read Now</a>
        </div>

      </div>

<style jsx>{`
  #hiveconf18 {
    background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
  }

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 0;
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
  }
  @media ${ PageBreaks.smUp } {
    h2 {
      font-size: 60px;
      margin-top: 0;
      margin-bottom: 40px;
    }
  }

  .oval {
    height: 413px;
    width: 413px;
    border-radius: 50%; 
    background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
    position: absolute;
    left: 100px;
    z-index: -1;
  }
  @media  ${ PageBreaks.smUp } {
    .oval {
      top: -40px;
    }
  }

  .description {
    display: grid;
    width: 100%;
    margin: 20px auto;
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
    font-size: 18px;
    line-height: 46px;
  }

  .description img {
    max-width: 100%;
    max-height: 90%;
    align-self: center;
  }

  .feedback {
    width: 60%;
    margin: 100px auto 0 auto;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 32px;
  }

  .thumbsup {
    background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
    width: 105px;
    height: 105px;
    border-radius: 50%;
    position: relative
  }
  .thumbsup img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }    

  .feedback p {
    font-size: 27px;
    line-height: 52px;
    color: white; 
    margin: 0;
  }

  .testimonials {
    position: relative;
    height: 650px;
  }

  .testimonials > :global(.carousel) {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }
  .testimonials > :global(.carousel) > :global(.carousel-inner) {
    max-width: 1100px;
    margin: 0 auto;
    height: 500px;
  }
  .carouseloval {
    width: 650px;
    height: 650px;
    background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
  }

  .testimonial {
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 15px));
    grid-column-gap: 30px;
    grid-template-rows: auto;
    color: white;
  }

  .testimonial p {
    font-size: 18px;
    line-height: 46px;
    margin: 0;
  }

  .testimonial h3 {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
  }

  .testimonial .left {
    position: relative;
  }
  .testimonial .info {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .testimonial .position {
    font-size: 24px;
    font-weight: 500;
    line-height: 45px;
    
  }

  .quotesign {
    width: 80px;
    margin-bottom: 50px;
  }

  .narrow {
    width: 80%;
    margin: 0 auto;
  }
  .companies {
    max-width: 1100px;
    margin: 0 auto;
  }

  .companies h5 {
    width: 80%;
    margin: 0 auto;
    color: white;
    font-size: 30px;
    line-height: 41px;
    font-weight: bold;
  }
  @media ${ PageBreaks.smUp } {
    .companies h5 {
      margin-bottom: 50px;
    }
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .logos img {
    flex: 0 0 calc(16.66% - 20px);
    padding: 20px;
    margin: 10px;
    max-width: 120px;
  }
  @media ${ PageBreaks.smUp } {
    .logos img {
      max-height: 100px;
      max-width: none;
    }
  }
  .quotewrap {
    display: grid;
    grid-template-columns: auto 1fr;
    
  }

  .quotewrap > img {
    height: 500px;
    z-index: 10;
    margin-right: -200px;
  }

  .speaker-info {
    background: linear-gradient(90deg, #0000FF 0%, #0000AA 100%);
    padding: 80px 0 0 300px;
    color: white;
    position: relative;
  }
  .speaker-info p {
    font-size: 27px;
    line-height: 52px;
    margin: 0;
    width: 500px;
  }
  .speaker-info h3 {
    margin-top: 40px;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
  }
  .speaker-info h4 {
    font-size: 24px;
    font-weight: 500;
    line-height: 45px;
  }
  .speaker-info .quotesign {
    position: absolute;
    width: 100px;
    margin-bottom: 0;
    top: 130px;
    left: 80px;
    z-index: 101;
    
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
    width: 80%;
    margin: 0 auto;
    color: white;
    position: relative;
  }

  .cta-container h3 {
    font-size: 30px;
    line-height: 41px;
    font-weight: bold;
  }

  .cta-container p {
    font-size: 18px;
    line-height: 46px;
  }
  .cta {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
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
  .cta:hover {
    background-color: #FFF;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
  }
`}</style>
    </div>
  )
}