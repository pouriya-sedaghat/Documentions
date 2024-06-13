import { Component } from "react";

// class PostId extends Component {
//   render() {
//     return <h2>PostId Page</h2>;
//   }
// }

import { useParams } from "react-router-dom";

function PostId() {
  const { postId } = useParams();
  return <h2>PostId Page : {postId}</h2>;
}

export default PostId;
