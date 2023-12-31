import React from 'react';
import { Element } from 'react-scroll';
import TopContent from '../topcontent/topcontent'; // Corrected the component name here
import './topcontainer.css';

const TopContainer = () => {
  return (
    <Element name='about' className='topcontainer'>
      <TopContent />
    </Element>
  );
};

export default TopContainer;
