import './footer.css'


function Footer() {

    return (
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
    );
}

export default Footer;