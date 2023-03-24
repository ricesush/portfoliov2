import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import myImage from '../assets/profilePic.png';

const AboutSection = () => {
  return (
    <section className='col-lg-6 rounded-1'>
      <div className='p-5 fw-lighter'>
        <div className='d-md-flex align-items-center justify-content-around'>
          <img src={myImage} className='img-size mx-auto'></img>
          <div className='text-lg-start text-center ps-1'>
            <div>
              <FontAwesomeIcon icon={faLocationDot} className='yellowText' />
              <span className='text-secondary'> Location: </span>
              <span className='fw-bold'>Quezon City, Philippines </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} className='yellowText' />
              <span className='text-secondary'> Language: </span>
              <span className='fw-bold'>English, Filipino</span>
            </div>
          </div>
        </div>

        <div className='pt-3 pt-md-5'>
          Proficient in an assortment of technologies, including
          <span className='yellowText fw-bold'> HTML5</span>,
          <span className='yellowText fw-bold'> CSS3</span>,
          <span className='yellowText fw-bold'> Javascript</span>,
          <span className='yellowText fw-bold'> React.Js</span>,
          <span className='yellowText fw-bold'> PHP</span>,
          <span className='yellowText fw-bold'> Laravel</span>, and
          <span className='yellowText fw-bold'> MySQL</span>. Able to
          efficiently self-manage during independent projects, as well as
          collaborate in a team setting.
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
