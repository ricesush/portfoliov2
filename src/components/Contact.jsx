import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const contacts = [
    { icon: faEnvelope, details: 'Pixelartme@gmail.com' },
    { icon: faSquarePhone, details: '+63999-551-4413' },
  ];
  return (
    <section className='col-md-6 rounded-1 border homeSections'>
      <header className='fs-5 fw-bold position-absolute px-3 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow'>
        <h2 className='text-center text-light'>
          <span>Contact</span> Details
        </h2>
      </header>
      <div className='pt-4 text-sm-start text-center p-5 mt-5'>
        <div className='justify-content-around'>
          {contacts.map((contact) => {
            return (
              <div>
                <FontAwesomeIcon icon={contact.icon} />
                <small> {contact.details}</small>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
