function formatDate(date){
  return date.toLocalDateString();
}

function Avatar(props){
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div
      className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

pointer = document.getElementById('root');

// Probably from an API Response :)
const comment = {
  date: new Date(),
  text: 'I am enjoying REACT!',
  author: {
    name: 'Hello Aalamin',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/11760918?s=460&v=4'
  }
}

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  pointer
);
