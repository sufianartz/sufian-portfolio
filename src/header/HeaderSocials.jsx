import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import  {FaGithub} from 'react-icons/fa'
import  {ImBehance2} from 'react-icons/im'

const HeaderSocials = () => {
  return (
<div className='header__socials'>
<a href='https://www.linkedin.com/in/muhammad-sufian-38b2a2212/' target="_blank" ><BsLinkedin/></a>
<a href='https://github.com/sufianartz' target="_blank"><FaGithub/></a>
<a href='https://www.behance.net/sufyanbhatti1' target="_blank"><ImBehance2/></a>

    </div>
  )
}

export default HeaderSocials