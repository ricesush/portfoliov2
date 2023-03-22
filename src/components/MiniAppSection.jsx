export const MiniAppSection = (props) => {
  return (
    <section className='shadow'>
      <div className='position-absolute bg-accent text-light fw-bold px-3 py-2 rounded rounded-top-0 rounded-start-0 '>
        {props.title}
      </div>
      <div>Description: {props.description}</div>
      {props?.miniApp}
    </section>
  );
};
