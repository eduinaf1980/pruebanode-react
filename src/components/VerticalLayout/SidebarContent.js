import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MetisMenu from 'metismenujs';
import { LinkTo } from './LinkTo';
import { getItem } from '../../utils/index'

const SidebarContent = () => {

  let location = useLocation();

  const initMenu = () => {
    new MetisMenu("#side-menu")

    let matchingMenuItem = null
    const ul = document.getElementById("side-menu")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  }

  useEffect(() => {
    initMenu()
  }, [])

  const activateParentDropdown = item => {
    item.classList.add("active")
    const parent = item.parentElement

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {

        parent2.classList.add("mm-show")

        const parent3 = parent2.parentElement

        if (parent3) {
          parent3.classList.add("mm-active")
          parent3.childNodes[0].classList.add("mm-active")
          const parent4 = parent3.parentElement
          if (parent4) {
            parent4.classList.add("mm-active")
          }
        }
      }
      return false
    }
    return false
  }

  return (
    <React.Fragment>
      <div id='sidebar-menu'>
        <ul className='metismenu list-unstyled' id='side-menu'>
          <li className='menu-title'>Menu</li>
          <li>
            <Link to='/Dashboard' className='waves-effect hoverLi'>
              <i className="bx bx-home-circle color-maxim" />
              <span>Inicio</span>
            </Link>
          </li>
          {(getItem('type') == 1) &&
            <li>
              <Link to="/#" className="has-arrow waves-effect hoverLi">
                <i className="mdi mdi-brightness-5 color-maxim" />
                <span>Parametrización</span>
              </Link>
              <ul className="sub-menu">
                <LinkTo to='/companies' text='Compañías' />
                <LinkTo to='/item' text='Items' />
              </ul>
            </li>
          }
        </ul>
      </div>
    </React.Fragment>
  )
}

export default SidebarContent;
