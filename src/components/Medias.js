import React from 'react'
import './Medias.css'
import Instagram from '../image/instagram.svg'
import Github from '../image/GitHub-Mark-Light-32px.png'

function Medias(props) {
  return (
    <div className='medias'>
      <ul>
        <li>
          <img width={15} src={Instagram} />
          <a href="#">{props.instagram}</a>
        </li>
        <li>
          <img width={15} src={Github} />
          <a href="#">{props.github}</a>
        </li>
      </ul>
    </div>
  )
}

export default Medias
