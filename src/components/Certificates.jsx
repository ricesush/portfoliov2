import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Cetrification = () => {
  return (
    <section className='col-lg-6 py-4 mt-3 '>
      <header className='fs-5 fw-bold '>
        <h2 className='text-center'>
          <span className='yellowText'>Certification</span>
        </h2>
      </header>
      <div className='p-3 border-start border-3 rounded m-5 mt-0 border-yellow shadow bg-light'>
        <div className='fw-bold fs-5'>Full-Stack Web Developer</div>
        <div className='fw-bold opacity-75 d-sm-flex justify-content-between border-bottom border-2 pb-2'>
          <div>KodeGo Bootcamp </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDays} className='yellowText' />
            <span> January, 2023</span>
          </div>
        </div>
        <a
          target={'_blank'}
          href='https://assets.kodego.ph/public/isa/zVJU27vDkXhM3rKqIdEKe3hvLXOlqXNYptlICNiR.pdf'
          className='btn btn-sm custom-btn-accent rounded-5 border-1 mt-2'
        >
          <span>View Certificate</span>
        </a>
      </div>
    </section>
  );
};
