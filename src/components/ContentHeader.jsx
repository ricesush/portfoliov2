export const ContentHeader = (props) => {
  return (
    <header className='fs-5 fw-bold position-absolute px-3 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow text-center text-light'>
      <small>{props.title}</small>
    </header>
  );
};
