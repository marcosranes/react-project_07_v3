import "./styles.css"

import { PostCard } from '../PostCard';
//ctrl + space for auto import

export const Posts = ({posts}) => (
  <div className="posts">
    {posts.map((post, _index) => (
      <PostCard
        key={post.id}
        _index={_index}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
        /* post={post} */
      />
    ))}
  </div>
);
