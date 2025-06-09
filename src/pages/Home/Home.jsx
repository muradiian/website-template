// Pages and Components
import App from '../../App';
import Header from '../../components/header/Header';
// Styles
import '../../App.css'
import './Home.css'

function Home() {
  return (
    <div className='main'>
        <Header/>
        <section className='home-mainBanner'>
           <div className='mainBanner-childBox1'>
                <div className='blackBackgroundBox'>
                  <div className='childBox1--informativeBlock'>
                    <div className='informativeBlock--title'>
                      <p>Հաշվապահական <br/>և Ֆինանսական ծառայություններ</p>
                    </div>
                    <div className='informativeBlock--paragraph'>
                      <p>Այստեղ կարող է լինել գովազդային տեքստ կամ կարգախոս</p>
                    </div>
                    <div className='informativeBlock--btn'>
                      <button>Դիմել</button>
                    </div>
                  </div>
                </div>
                <div className='goldenBackgroundBox'></div>
           </div>
           <div className='mainBanner-childBox2'>
            <div className='decorative-box-image'></div>
           </div>
        </section>

        {/* ----------------------------------- */}
        <div className='seperator-box'></div>
        {/* ----------------------------------- */}
        <section className='aboutUs-section'>
            <div className='aboutUs--headingBox'>
              <div className='headingBox-textBox'>
                <div className='decorLine-left'></div>
                <div className='textBox-text'>
                  <p>Մեր Մասին</p>
                </div>
                <div className='decorLine-right'></div>
              </div>
              <div className='aboutUs--title'>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id. Urna posuere consequat velit vulputate faucibus pretium arcu accumsan sit. Vel venenatis sapien.
                </p>
              </div>
            </div>
            <div className='aboutUs--container'>
              <div className='images-container'>
                <div className='rectangle-left'></div>
                <div className='rectangle-right'></div>
                <div className='rectangle-bottom'></div>
              </div>
              <div className='services-container'>
                <div className='container--item'>
                  <div className='container--itemVector'></div>
                  <div className='container--text'>
                    <p>Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.</p>
                  </div>
                </div>
                <div className='container--item'>
                  <div className='container--itemVector'></div>
                  <div className='container--text'>
                    <p>Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.</p>
                  </div>
                </div>
                <div className='container--item'>
                  <div className='container--itemVector'></div>
                  <div className='container--text'>
                    <p>Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.</p>
                  </div>
                </div>
                <div className='container--item'>
                  <div className='container--itemVector'></div>
                  <div className='container--text'>
                    <p>Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.</p>
                  </div>
                </div>
                <div className='container--item'>
                  <div className='container--itemVector'></div>
                  <div className='container--text'>
                    <p>Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.</p>
                  </div>
                </div>
                <div className='container--btnBox'>
                  <button>Դիմել</button>
                </div>
              </div>
            </div>
            <div className='decorativeVector'></div>
        </section>
        {/* ------------------------ */}
        <section className='our-successes-Section'>
            <div className='successes-headingBox'>
              <div className='headingBox-textBox'>
                <div className='decorLine-left'></div>
                <div className='textBox-text'>
                  <p>Մեր գրանցած հաջողությունները<br/>businesses across the globe</p>
                </div>
                <div className='decorLine-right'></div>
              </div>
              <div className='headingBox--paragraph'>
                <p>Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id</p>
              </div>
            </div>
            <div className='oursuccesses-informativeNums'>
                <div className='informativeNums--itemBox'>
                  <div className='item--name'>
                    <p>Clients</p>
                  </div>
                  <div className='item--nums'>
                    <p>12K</p>
                  </div>
                </div>
                {/* ---------- */}
                <div className='divider-line'></div>
                {/* ---------- */}
                <div className='informativeNums--itemBox'>
                  <div className='item--name'>
                    <p>Annual Growth</p>
                  </div>
                  <div className='item--nums'>
                    <p>55%</p>
                  </div>
                </div>
                {/* ---------- */}
                <div className='divider-line'></div>
                {/* ---------- */}
                <div className='informativeNums--itemBox'>
                  <div className='item--name'>
                    <p>No of Projects</p>
                  </div>
                  <div className='item--nums'>
                    <p>5k</p>
                  </div>
                </div>
                {/* ---------- */}
                <div className='divider-line'></div>
                {/* ---------- */}
                <div className='informativeNums--itemBox'>
                  <div className='item--name'>
                    <p>Positive Ratings</p>
                  </div>
                  <div className='item--nums'>
                    <p>80%</p>
                  </div>
                </div>
            </div>
            <div className='cornerDecorative'></div>
        </section>

        {/* ------------------------ */}
        
        <section className='services-section'>
            <div className='services-section--heading'>
              <div className='heading--text'>
                <div className='headingBox-textBox'>
                  <div className='decorLine-left'></div>
                  <div className='textBox-text'>
                    <p>Ծառայություններ</p>
                  </div>
                  <div className='decorLine-right'></div>
                </div>
              </div>
            </div>
            <div className='services-section--Item-container'>
              <div className='item-container--box'>
                <div className='containerBox--item'>
                  <div className='item--childBox'>
                    <div className='childBox--vector'></div>
                    <div className='childBox--text'>
                      <p>Ծառայություն 1</p>
                    </div>
                  </div>
                </div>
                <div className='containerBox--item'>
                  <div className='item--childBox'>
                    <div className='childBox--vector'></div>
                    <div className='childBox--text'>
                      <p>Ծառայություն 2</p>
                    </div>
                  </div>
                </div>
                <div className='containerBox--item'>
                  <div className='item--childBox'>
                    <div className='childBox--vector'></div>
                    <div className='childBox--text'>
                      <p>Ծառայություն 3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item-container--box'>
                <div className='containerBox--item'>
                  <div className='item--childBox'>
                    <div className='childBox--vector'></div>
                    <div className='childBox--text'>
                      <p>Ծառայություն 4</p>
                    </div>
                  </div>
                </div>
                <div className='containerBox--item'>
                  <div className='item--childBox'>
                    <div className='childBox--vector'></div>
                    <div className='childBox--text'>
                      <p>Ծառայություն 5</p>
                    </div>
                  </div>
                </div>
                <div className='containerBox--item'>
                  <div className='item--childBox'>
                    <div className='childBox--vector'></div>
                    <div className='childBox--text'>
                      <p>Ծառայություն 6</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='services-decorativeVector'></div>
        </section>
        {/* ------------ */}
        <section className='partners-section'>
            <div className='partners-section--heading'>
              <div className='headingBox-textBox'>
                <div className='decorLine-left'></div>
                <div className='textBox-text'>
                  <p>Գործընկերներ</p>
                </div>
                <div className='decorLine-right'></div>
              </div>
            </div>
            <div className='partners-graphic-items'>
                <div className='partner-item'></div>
                <div className='partner-item'></div>
                <div className='partner-item'></div>
                <div className='partner-item'></div>
            </div>
        </section>
        {/* ------------ */}
        <div className='seperator-box'></div>
        {/* ------------ */}
        <section className='news-section'>
          <div className='partners-section--heading'>
              <div className='headingBox-textBox'>
                <div className='decorLine-left'></div>
                <div className='textBox-text'>
                  <p>Նորություններ</p>
                </div>
                <div className='decorLine-right'></div>
              </div>
            </div>
            <div className='postItems-Container'>
                <div className='newPost-item'></div>
              <div className='newPost-item'></div>
              <div className='newPost-item'></div>
            </div>
            <div className='footerBtn'>
                <button>Ավելին</button>
            </div>
            <div className='newsSec-decorative'></div>
        </section>
        {/* ------------ */}
        <section className='faq-section'>
            <div className='faq-container'>
                <div className='container--imgBox'></div>
                <div className='container-questionsBox'>
                  <div className='questionsBox-heading'>
                    <p>Frequently asked questions</p>
                  </div>
                  <div className='content-box1'>
                    <div className='box1-heading headingTxt'>
                      <p>Lorem ipsum dolar sit amet consectetur</p>
                    </div>
                    <div className='box1-paragraph'>
                      <p>Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas.</p>
                    </div>
                    <div className='box1-controlBtn'></div>
                  </div>
                  <div className='content-box2'>
                    <div className='box2-heading headingTxt'>
                      <p>Lorem ipsum dolar sit amet consectetur</p>
                    </div>
                    <div className='box2-controlBtn'></div>
                  </div>
                  <div className='content-box3'>
                    <div className='box2-heading headingTxt'>
                      <p>Lorem ipsum dolar sit amet consectetur</p>
                    </div>
                    <div className='box2-controlBtn'></div>
                  </div>
                </div>
            </div>
        </section>
        {/* ------------ */}
      <section className='be-informed-Section'>
            <div className='beInformed-container'>
                <div className='beInformed--title'>
                  <div className='title--heading'>
                    <p>Եղի՛ր տեղեկացված</p>
                  </div>
                  <div className='title-paragraph'>
                    <p>Իմացիր նորությունների մասին առաջինը</p>
                  </div>
                </div>
                <div className='beInformed--emailInput'>
                  <div className='emailInput--titleBox'>
                    <p>Email:</p>
                  </div>
                  <div className='emailInput--inputBox'></div>
                </div>
                <div className='beInformed--subscribeButton'>
                  <button>Բաժանորդագրվել</button>
                </div>
            </div>
      </section>
      <div className='seperator-box'></div>
      <div className='seperator-box'></div>
      <div className='seperator-box'></div>
      <div className='seperator-box'></div>
      <div className='seperator-box'></div>
      <div className='seperator-box'></div>
      <div className='seperator-box'></div>
      <div className='seperator-box'></div>
      <div className='seperator-box'></div>
      <div className='seperator-box'></div>
      <footer>
          <div className='comp-logoBox'>
            <div className='logoBox--logoVector'></div>
            <div className='logoBox--title'>
              <p>Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet
                sintelit officia consequat</p>
            </div>
          </div>
          <div className='website-linksBox'>
            <div className='linksItem'>
              <p className='linksHeader'>Heading</p>
              <p className='links-pages'>Link here</p>
              <p className='links-pages'>Link here</p>
              <p className='links-pages'>Link here</p>
              <p className='links-pages'>Link here</p>
            </div>
            <div className='linksItem'>
              <p className='linksHeader'>Heading</p>
              <p className='links-pages'>Link here</p>
              <p className='links-pages'>Link here</p>
              <p className='links-pages'>Link here</p>
              <p className='links-pages'>Link here</p>
            </div>
            <div className='linksItem'>
              <p className='linksHeader'>Heading</p>
              <p className='links-pages'>Link here</p>
              <p className='links-pages'>Link here</p>
              <p className='links-pages'>Link here</p>
              <p className='links-pages'>Link here</p>
            </div>
          </div>
          <div className='connectBox'>
            <div className='connectBox--heading'>
              <p>Connect with us</p>
            </div>
            <div className='connectBox--socials'>
              <div className='social-item'></div>
              <div className='social-item'></div>
              <div className='social-item'></div>
              <div className='social-item'></div>
            </div>
            <div className='connectBox--footer'>
                Կայքի դիզայնը և մշակումը իրականցվել է <span className='highlight'>Global IT Academy</span>-ի կողմից 2024թ․
            </div>
          </div>
          <div className='leftBottomDecorative'></div>
          <div className='footerRightDecorative'></div>
      </footer>
    </div>
  );
}

export default Home;