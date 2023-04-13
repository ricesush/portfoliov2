export const Post = (props) => {
  return (
    <div className='card mb-3 post'>
      <div className='card-header'>{props.name}</div>
      <div className='card-body'>
        <h5 className='card-title'>{props.caption}</h5>
        <p className='card-text'>{props.content}</p>
      </div>
      <div className='card-footer text-body-light'>2 days ago</div>
    </div>
  );
};
