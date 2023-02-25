import React from 'react'
import './Target.scss'

const CardComponent = ({title, subtitle, link}) => {
  return (
    <a href={link}>
      <div>
        <div className="cardComponent">
          <div className="titleComponent">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
          <div className="circleComponent"></div>
        </div>
      </div>
    </a>
  )
}

export default CardComponent