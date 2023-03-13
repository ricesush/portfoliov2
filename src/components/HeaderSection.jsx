import myImage from '../images/profilePic.png';
import '../css/buttons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const HeaderSection = () => {
  return (
    <div className='d-md-flex mt-5 '>
      <div className='ms-md-auto p-lg-0 ps-md-5'>
        <img src={myImage} className='img-size mx-auto'></img>
      </div>
      <div className='align-middle my-auto me-auto ps-md-5 text-center text-md-start'>
        <h5 className='fw-bold fs-1 pt-lg-0 pt-sm-3'>Erick-John Santosidad</h5>
        <p className='yellowText fw-bold'>
          <FontAwesomeIcon
            icon={icon({
              name: 'laptop-code',
              style: 'solid',
            })}
          />
          <span> Jr. Full-Stack Developer</span>
        </p>
        <div>
          An enthusiastic Web Developer with passion for programming and love
          for work.
        </div>
        <a
          type='button'
          className='btn custom-btn mt-3'
          target='_blank'
          href='https://drive.google.com/file/d/17XOk7XZZzX3RKqRqboJVWuuDHR_jnZ-X/view?usp=share_link'
        >
          <small>
            <span>Download CV </span>
            <FontAwesomeIcon
              icon={icon({
                name: 'download',
                style: 'solid',
              })}
            />
          </small>
        </a>
      </div>
    </div>
  );
};

export default HeaderSection;
