import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route) => (path === route ? 'active' : '');

  return (
    <div className="header">
      <div className='navigation-bar'>
        <div className='navigation-bar--itemBox'>
          <div className='itemBox--logo'>
            <a href="/"></a>
          </div>
          <div className='itemBox--items'>
            <Link to="/" className={`mainPage item ${isActive('/')}`}>
              <p>Գլխավոր</p>
            </Link>
            <Link to="/about" className={`aboutUs item ${isActive('/about')}`}>
              <p>Մեր Մասին</p>
            </Link>
            <Link to="/services" className={`services item ${isActive('/services')}`}>
              <p>Ծառայություններ</p>
            </Link>
            <Link to="/database" className={`database item ${isActive('/database')}`}>
              <p>Շտետամարան</p>
            </Link>
            <Link to="/blog" className={`blog item ${isActive('/blog')}`}>
              <p>Բլոգ</p>
            </Link>
            <Link to="/contact" className={`contact item ${isActive('/contact')}`}>
              <p>Կապ</p>
            </Link>
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
