import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faMedium
} from '@fortawesome/free-brands-svg-icons'

export const SocialFollow = () => (
  <div className="social-container">
    <h3 className="heading">Created by Nelson Cadenas</h3>
    <a
      href="https://github.com/nca1478"
      className="github social"
      target="blank"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a
      href="https://www.linkedin.com/in/cadenasnelson/"
      className="linkedin social"
      target="blank"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a
      href="https://twitter.com/nca1478"
      className="twitter social"
      target="blank"
    >
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a
      href="https://medium.com/@nca1478"
      className="medium social"
      target="blank"
    >
      <FontAwesomeIcon icon={faMedium} size="2x" />
    </a>
  </div>
)
