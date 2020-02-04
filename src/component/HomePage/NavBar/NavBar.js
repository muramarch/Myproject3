import React from 'react';
import './NavBar.css'

class NavBar extends React.Component {
  goHome = () => {
    this.props.goTo({}, "hello-page")
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="header">
          
            <h1 onClick={this.goHome}>Tasty plan</h1>
 
          <ul className="menu">
            <li onClick={this.goHome} className="menu__item">ДОМОЙ</li>
            <li className="menu__item">ДОБАВИТЬ РЕЦЕПТ</li>
            <li className="menu__item">О НАС</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;