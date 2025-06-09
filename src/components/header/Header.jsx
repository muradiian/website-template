// Pages and Components
import App from '../../App';
import Home from '../../pages/Home/Home'
// Styles
import '../../App.css'
import './Header.css'

function Header() {
  return (
    <div className="header">
        <div className='navigation-bar'>
          <div className='navigation-bar--itemBox'>
            <div className='itemBox--logo'></div>
            <div className='itemBox--items'>
                <div className='aboutUs item'>
                  <p>Մեր Մասին</p>
                </div>
                <div className='services item'>
                  <p>Ծառայություններ</p>
                </div>
                <div className='database item'>
                  <p>Շտետամարան</p>
                </div>
                <div className='blog item'>
                  <p>Բլոգ</p>
                </div>
                <div className='contact item'>
                  <p>Կապ</p>
                </div>
                <div className='language-item'>
                  <div className='language-icon'></div>
                  <div className='language-btn'></div>
                </div>
            </div>
          </div>
          <div className='navigation-bar--callBox'>
            <button className='callBox-btn'>Զանգահարել</button>
          </div>
        </div>
    </div>
  );
}

export default Header;
