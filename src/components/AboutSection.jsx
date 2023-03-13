import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const AboutSection = () => {
  return (
    <section className='col-lg-6 m-1 rounded-4 shadow'>
      <div className='p-5 fw-lighter'>
        <div>
          <div>
            <FontAwesomeIcon
              icon={icon({
                name: 'location-dot',
                style: 'solid',
              })}
              className='yellowText'
            />
            <span className='text-secondary'> Location: </span>
            <span className='fw-bold'>Quezon City, Philippines </span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={icon({
                name: 'comment',
                style: 'solid',
              })}
              className='yellowText'
            />
            <span className='text-secondary'> Language: </span>
            <span className='fw-bold'>English, Filipino</span>
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
