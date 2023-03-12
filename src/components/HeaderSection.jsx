import myImage from '../images/profilePic.png';
import '../css/buttons.css';

const HeaderSection = () => {
  return (
    <div className='d-flex mt-5'>
      <div className='ms-auto'>
        <img src={myImage} className='img-size'></img>
      </div>

      <div className='align-middle my-auto me-auto ps-5'>
        <h5 className='fw-bold fs-1'>Erick-John Santosidad</h5>
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
