import React from 'react'
import './Medias.css'
import Instagram from '../image/instagram.svg'
import Github from '../image/GitHub-Mark-Light-32px.png'

function Medias(props) {
  return (
    <div className='medias'>
      <ul>
        <li>
          <img width={20} src={Instagram} />
          <a href="https://www.instagram.com/willsl123/" target='_blank'>{props.instagram}</a>
        </li>
        <li>
          <img width={20} src={Github} />
          <a href="https://github.com/Willslima/" target='_blank'>{props.github}</a>
        </li>
      </ul>
    </div>
  )
}

export default Medias
