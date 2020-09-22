import React from 'react'
import '../css/Footer.css'
import Github from '../images/Github.png'
import Linkedin from '../images/Linkedin.png'

export default function Footer() {
  return (
    <footer>
      <p className='footer-p'>
        &copy; Ricardo Martini 2020 Joystick 8-bit image provided by
        pixelartmaker.com. Mario pixel image courtesy of Nintendo. Linkedin and
        Github images provided by icons-icons.com. Special thanks to the GA
        instructional staff for providing help on ths project.
      </p>
      <a
        href={'https://github.com/mrricardom'}
        target='_blank'
        className='footer-img'
      >
        <img src={Github} alt='Github Logo'></img>
      </a>
      <a
        href={'https://www.linkedin.com/in/ricardo-martini/'}
        target='_blank'
        className='footer-img'
      >
        <img src={Linkedin} alt='LinkedIn Logo'></img>
      </a>
    </footer>
  )
}
