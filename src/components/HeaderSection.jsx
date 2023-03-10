import myImage from '../images/profilePic.png';
import '../css/buttons.css';

const HeaderSection = () => {
  return (
    <div className='bg-accent'>
      <div className='imgContainer'>
        <img src={myImage} className='imgItem'></img>
        <h5 className='fw-bold text-light'>Erick-John Santosidad</h5>
        <p className=''>
          <small className='yellowText opacity-75'>
            Full-Stack Web Developer
          </small>
        </p>
      </div>

      <header className='p-5 text-light headerSectionContainer'>
        <h3>
          Hi, I'm <span className='fw-bold'>Erick</span>
        </h3>
        <div className='outer-headings'>
          <h1>
            <div className='inner-headings'>
              <span className=''>
                Full-Stack Developer <br />
                Front-End Developer <br />
                Back-End Developer <br />
                Freelancer <br />
              </span>
            </div>
          </h1>
        </div>
        <div>
          An enthusiastic Web Developer with passion for programming and love
          for work.
        </div>
      </header>
    </div>
  );
};

export default HeaderSection;
