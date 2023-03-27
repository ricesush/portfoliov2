import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faCss3,
  faFigma,
  faHtml5,
  faJs,
  faLaravel,
  faPhp,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const TechStack = () => {
  const techStackList1 = [
    { icon: faHtml5, title: 'HTML5', id: 1 },
    { icon: faCss3, title: 'CSS3', id: 2 },
    { icon: faBootstrap, title: 'Bootstrap', id: 3 },
    { icon: faJs, title: 'Javascript', id: 4 },
  ];

  const techStackList2 = [
    { icon: faReact, title: 'React', id: 5 },
    { icon: faFigma, title: 'Figma', id: 6 },
    { icon: faPhp, title: 'PHP', id: 7 },
    { icon: faLaravel, title: 'Laravel', id: 8 },
  ];

  return (
    <section className='col-lg-6 border homeSections shadow'>
      <header className='fs-5 fw-bold position-absolute px-3 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow'>
        <h2 className='text-center text-light'>
          <span className=''>Tech</span> Stack
        </h2>
      </header>
      <div className='my-5'>
        <div className=' d-flex justify-content-around pt-4 ps-0 pe-0'>
          {techStackList1.map((tech) => {
            return (
              <div className='d-grid ' key={tech.id}>
                <FontAwesomeIcon
                  icon={tech.icon}
                  title={tech.title}
                  className='mx-auto fs-1'
                />
                <small className='text-center'>{tech.title}</small>
              </div>
            );
          })}
        </div>
        <div className='fs-1 d-flex justify-content-around mt-4 ps-0 pe-0'>
          {techStackList2.map((tech) => {
            return (
              <div className='d-grid ' key={tech.id}>
                <FontAwesomeIcon
                  icon={tech.icon}
                  title={tech.title}
                  className='mx-auto'
                />
                <label htmlFor='' className='fs-6 text-center'>
                  {tech.title}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
