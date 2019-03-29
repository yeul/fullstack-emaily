import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='brand-logo left'>Emaily</a>
          <ul id='nav-mobile' className='right'>
            <li>
              <a href='sass.html'>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
