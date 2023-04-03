import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { ContentHeader } from './ContentHeader';

const Contact = () => {
  const contacts = [
    { icon: faEnvelope, details: 'Pixelartme@gmail.com', id: 1 },
    { icon: faSquarePhone, details: '+63999-551-4413', id: 2 },
  ];
  return (
    <section className='col-md-6 rounded-1 border homeSections bg-glass'>
      <ContentHeader title='Contact Details' />
      <div className='pt-4 text-sm-start text-center p-5 mt-5'>
        <div className='justify-content-around flex-md-column d-flex'>
          {contacts.map((contact) => {
            return (
              <div key={contact.id}>
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
