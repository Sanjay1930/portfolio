import React from 'react';
import { Element } from 'react-scroll';
import image from '../../component/image/web.png';
import LinearProgress from '@mui/material/LinearProgress'; // Corrected the case here
import './skillset.css';

const Skillset = () => {
  return (
    <Element className='skills' id='Skills__1'>
      <div className='Skillcontainer__image'>
        <img src={image} alt='' />
      </div>
      <div className='Skillcontainer__text'>
        <h2>Skill Set</h2>
        <div className='skillcontainer__skillset'>
          <h5>HTML</h5>
          <div className='skillcontainer__slider skillcontainer__slider1'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div className='skillcontainer__skillset'>
          <h5>CSS</h5>
          <div className='skillcontainer__slider skillcontainer__slider2'>
            <LinearProgress variant='determinate' value={70} />
          </div>
        </div>
        <div className='skillcontainer__skillset'>
          <h5>REACT JS</h5>
          <div className='skillcontainer__slider skillcontainer__slider3'>
            <LinearProgress variant='determinate' value={60} />
          </div>
        </div>
        <div className='skillcontainer__skillset'>
          <h5>JAVA SCRIPT</h5>
          <div className='skillcontainer__slider skillcontainer__slider4'>
            <LinearProgress variant='determinate' value={50} />
          </div>
        </div>
        <div className='skillcontainer__skillset'>
          <h5>SQL</h5>
          <div className='skillcontainer__slider skillcontainer__slider5'>
            <LinearProgress variant='determinate' value={75} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skillset;
