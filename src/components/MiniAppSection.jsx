export const MiniAppSection = (props) => {
  return (
    <section className='shadow border homeSections'>
      <div className='position-absolute bg-accent text-light fw-bold px-3 py-2 rounded rounded-top-0 rounded-start-0 '>
        {props.title}
      </div>
      <div className='py-5'>
        <div className='ps-3 mb-5 py-3 border-bottom shadow-sm'>
          <span className='fw-bold'>Description: </span> {props.description}
        </div>
        {props?.miniApp}
      </div>
    </section>
  );
};
