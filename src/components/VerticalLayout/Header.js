import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-maxim.png"
import LogoSm from '../../assets/images/logo-sm-maxim.jpg'
import ProfileMenu from './ProfileMenu';

const Header = (props) => {
  const [isToggle, setIsToggle] = React.useState(false)

  const changeToggle = () => {
    if (isToggle) {
      if (document.body) {
        document.body.classList.remove('sidebar-enable')
        document.body.classList.remove('vertical-collpsed')
      }
    } else {
      if (document.body) {
        document.body.classList.add('sidebar-enable')
        document.body.classList.add('vertical-collpsed')
      }
    }
    setIsToggle(!isToggle)
  }

  return (
    <React.Fragment >
      <header id="page-topbar" style={{background:'#ffffff'}}>
        <div className="navbar-header">
          <div className="d-flex">

            <div className="navbar-brand-box p-0">
              <Link to="/" className="logo">
                <span className="logo-sm align-center">
                  <img src={LogoSm} height="50" />
                </span>
                <span className="logo-lg">
                  
                </span>
              </Link>
            </div>
            <button
              type="button"
              onClick={() => changeToggle()}
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>
          </div>
          <div className='d-flex'>
            <ProfileMenu />            
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
