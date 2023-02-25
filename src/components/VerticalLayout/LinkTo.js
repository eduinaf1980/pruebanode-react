import React from 'react'

import { Link } from 'react-router-dom'

export const LinkTo = (props) => {
  return (
    <>
      <li className='hoverLi'>
        <Link to={props.to} className='hoverLi'>
          {props.text}
        </Link>
      </li>
    </>
  )
}
