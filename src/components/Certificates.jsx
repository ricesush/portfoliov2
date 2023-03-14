import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

export const Cetrification = () => {
  return (
    <section className='col-lg-6 m-1 p-5'>
      <header className='fs-5 fw-bold'>
        <h2 className='text-center'>
          <span className='yellowText'>Certification</span>
        </h2>
      </header>
      <div className='p-3 border-start border-3 rounded '>
        <div className='fw-bold fs-5'>Full-Stack Web Developer</div>
        <div className='fw-bold opacity-75 d-sm-flex justify-content-between'>
          <div>KodeGo Bootcamp </div>
          <div>
            <FontAwesomeIcon
              icon={icon({
                name: 'calendar-days',
                style: 'solid',
              })}
              className='yellowText'
            />
            <span> January, 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};
