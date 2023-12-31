import React from 'react';
import { Link } from 'react-scroll';
import './topcontent.css';

const topcontent = () => {
  return (
    <div className='topcontent'>
      <div className='topcontent__container'>
        <h1>Mr. Sanjay Krishna G</h1>
        <p>A professional web app developer</p>
        <a href='https://drive.google.com/drive/u/0/folders/1-ywUwHzimYGiORZ3_62rZHzkhPrvFNi_' target='_blank' rel='noopener noreferrer'>
          {/* Added 'https://' to the URL */}
          <button className='topcontent__downloadbutton'>Download cv</button>
        </a>
        <Link to='project' smooth={true} duration={900}>
          <button className='topcontent__myworkbutton'>My work</button>
        </Link>
      </div>
    </div>
  );
}

export default topcontent;
