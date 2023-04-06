import html from '../assets/HTML5.svg.png';
import css from '../assets/CSS3.svg.png';
import bs5 from '../assets/Bootstrap.svg.png';
import js from '../assets/JavaScript.png';
import react from '../assets/React.svg.png';
import php from '../assets/PHP.svg.png';
import laravel from '../assets/Laravel.svg.png';
import mongodb from '../assets/MongoDB.svg.png';
import nodejs from '../assets/Node.js_logo.svg.png';
import express from '../assets/Express.png';

const TechStack = () => {
  const techStacks = [
    { src: mongodb, title: 'MongoDB', id: 1 },
    { src: express, title: 'Express', id: 2 },
    { src: react, title: 'React', id: 3 },
    { src: nodejs, title: 'NodeJs', id: 4 },
    { src: js, title: 'JavaScript', id: 5 },
    { src: html, title: 'HTML5', id: 6 },
    { src: css, title: 'CSS3', id: 7 },
    { src: bs5, title: 'Bootstrap', id: 8 },
    { src: php, title: 'PHP', id: 9 },
    { src: laravel, title: 'Laravel', id: 10 },
  ];

  return (
    <section className='col-lg-6 border homeSections shadow pb-4 bg-glass rounded-1'>
      <header className=' fw-bold position-absolute px-5 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow'>
        <small className='text-center text-light'>
          <span className=''>Tech</span> Stack
        </small>
      </header>
      <div className=''>
        <br />
        <div className='d-sm-flex my-auto pt-4'>
          {techStacks.map((tech) => {
            if (tech.id < 6) {
              return (
                <div className='d-grid p-2 mx-auto' key={tech.id}>
                  <img
                    src={tech.src}
                    title={tech.title}
                    alt={tech.title}
                    width={55}
                    className='mx-auto'
                  />
                  <small className='text-center mt-auto'>{tech.title}</small>
                </div>
              );
            }
          })}
        </div>
        <div className='d-sm-flex my-auto pt-4'>
          {techStacks.map((tech) => {
            if (tech.id > 5) {
              return (
                <div className='d-grid p-2 mx-auto' key={tech.id}>
                  <img
                    src={tech.src}
                    title={tech.title}
                    alt={tech.title}
                    width={55}
                    className='mx-auto'
                  />
                  <small className='text-center mt-auto'>{tech.title}</small>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
