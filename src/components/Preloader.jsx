import '../css/loader.css';

const Preloader = () => {
  return (
    <>
      <div className='containerHeight'></div>
      <section className='loader' id='loader'>
        <div className='bg-glass p-5 rounded-1'>
          <div className='scanner text-center'>
            <p>
              <b>Erick-John Santosidad</b>
            </p>
            <span>SANTOSIDAD.</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preloader;
