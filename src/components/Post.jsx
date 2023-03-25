export const Post = (props) => {
  return (
    <div class='card mb-3 post'>
      <div class='card-header'>{props.name}</div>
      <div class='card-body'>
        <h5 class='card-title'>{props.caption}</h5>
        <p class='card-text'>{props.content}</p>
      </div>
      <div class='card-footer text-body-light'>2 days ago</div>
    </div>
  );
};
