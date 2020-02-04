import React from 'react';
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer_content">
          <div className="footer-info">
            <p> mail: tastyplan@gmail.com</p>
            <p> instagram: @tastyplan</p>
            <p> Tel: +996500100200</p>
          </div>
          <div className="footer-info1">
            <p>Пожертвования</p>
            <p>Преимущества</p>
            <p>Помощь</p>
          </div>
          <div className="footer-info"></div>
        </div>
      </div>
    );
  }
}

export default Footer;