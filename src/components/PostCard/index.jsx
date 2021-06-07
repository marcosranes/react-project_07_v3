import P from 'prop-types';
import './styles.css';

export const PostCard = ({ title, cover, body, id, _index }) => (
  <div className="post">
    <p>{id}</p>
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

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
  _index: P.number.isRequired,
};
