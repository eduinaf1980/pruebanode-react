import React from 'react'
import '../../components/Card.css'

const CardProfile = (props) => {
  return (
    <div className="containerCardProfile">
      <div className="cover-photo">
        <img src={props.avatar} className="profile" />
      </div>
      <div className="profile-name">{props.userName || 'UserName'}</div>
      <p className="about">{props.email}</p>
      <p> Activo {props.lastLogin}</p>
      <div className='bb-gray bt-gray pt-3'>
        <p> Última conexión: {props.lastLoginDate}</p>
      </div>
      <button onClick={props.singOff} className="follow-btn mt-2 mb-3">Desconectarse</button>
    </div>
  )
}

export default CardProfile