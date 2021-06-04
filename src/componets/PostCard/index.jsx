import "./styles.css";
/* 
export const PostCard = (props) => {
  const post = props.post;
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div key={post.id} className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
 */
/* 
//destructuring post
export const PostCard = (props) => {
  const {post} = props;
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div key={post.id} className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
 */
/* 
//destructuring post in props parameter
export const PostCard = ({post}) => {

  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div key={post.id} className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
 */
//extensive mode
export const PostCard = ({ title, cover, body, id, _index }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {`${_index + 1} - `}
        {`${title}`}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);
