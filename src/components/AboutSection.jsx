const AboutSection = () => {
  return (
    <section className='border'>
      <div className='p-5 fw-lighter'>
        <div>
          <div>
            <span className='text-secondary'>Country:</span> Philippines
          </div>
          <div>
            <span className='text-secondary'>Language:</span> English, Filipino
          </div>
        </div>
        <div className='pt-3 pt-md-5'>
          Proficient in an assortment of technologies, including
          <span className='yellowText'> HTML5</span>,
          <span className='yellowText'> CSS3</span>,
          <span className='yellowText'> Javascript</span>,
          <span className='yellowText'> React.Js</span>,
          <span className='yellowText'> PHP</span>,
          <span className='yellowText'> Laravel</span>, and
          <span className='yellowText'> MySQL</span>. Able to efficiently
          self-manage during independent projects, as well as collaborate in a
          team setting.
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
