import React from 'react';
import { Element } from 'react-scroll';
import Project from '../project/Project'; // Make sure the path and component name are correct
import './Projectcontainer.css';

const ProjectContainer = () => {
  const Projects = [
    {
      img: 'https://taxvibes.com/app/uploads/2022/09/JustEatTakeaway.jpg',
      title: 'TakeAway',
      desc: "It seems like you're asking about implementing a subscription model within your takeaway food delivery website.",
      link: 'www.google.com',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCJZEcBbYqoh1FPJd9zKFYenJf68jJt7hzQ&usqp=CAU',
      title: 'Smart E-Ticketing System',
      desc: 'It seems like youre looking for information about "smart e-tickets Smart e-tickets, often referred to as electronic tickets or e-tickets, are digital versions of traditional paper tickets.',
      link: 'www.google.com',
    },
  ];

  return (
    <Element className='projectcontainer' id='projects'>
    <h1>Project</h1>
    <p>
      Here some projects are done
    </p>
    <div className='projectcontainer__projects'>

    {
      Projects.map((project,index)=>{
         return(
          <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/> 
         )
      })
    }

    </div>
    </Element>
  );
};

export default ProjectContainer;
