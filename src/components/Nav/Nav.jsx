import React from 'react';
import './Nav.css';
import {SiHomeadvisor} from 'react-icons/si';
import {TfiUser} from 'react-icons/tfi';
import {BiBookHeart} from 'react-icons/bi';
import {TbMessageCircleHeart} from 'react-icons/tb';
import {FaUserGraduate} from 'react-icons/fa'
import {useState} from 'react';
const Nav = () => {
  const[activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><SiHomeadvisor /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><TfiUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookHeart/></a>
      <a href='#testimonial' onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><FaUserGraduate/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessageCircleHeart/></a>
    </nav>
  )
}

export default Nav;