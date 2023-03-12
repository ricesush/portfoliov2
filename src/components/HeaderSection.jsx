import myImage from '../images/profilePic.png';
import '../css/buttons.css';

const HeaderSection = () => {
  return (
    <div className='d-md-flex mt-5 '>
      <div className='ms-md-auto p-lg-0 ps-md-5'>
        <img src={myImage} className='img-size mx-auto'></img>
      </div>
      <div className='align-middle my-auto me-auto ps-md-5 text-center text-md-start'>
        <h5 className='fw-bold fs-1 pt-lg-0 pt-sm-3'>Erick-John Santosidad</h5>
        <p className='yellowText fw-bold'>Full-Stack Developer</p>
        <div>
          An enthusiastic Web Developer with passion for programming and love
          for work.
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
