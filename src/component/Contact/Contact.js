import React from 'react';
import { Element } from 'react-scroll';
import { IconButton } from '@mui/material'; // Updated import path
import { Facebook, LinkedIn, Instagram } from '@mui/icons-material'; // Updated import path
import './Contact.css';

const Contact = () => {
  return (
    <Element className='Contact' id='contact'>
      <h1>Contact</h1>
      <div className='Contact__container'>
        <p>
          Email: <span>Sanjaykrishna1930@gmail.com</span>
        </p>
        <p>
          Github username: <span>@Sanjaykrishna</span>
        </p>
        <div className='contact__icons'>
          <a href='https://in.linkedin.com/'>
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href='https://www.facebook.com/'>
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
