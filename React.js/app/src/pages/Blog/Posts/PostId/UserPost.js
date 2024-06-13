import { Component } from "react";

// class UserPost extends Component {
//   render() {
//     return <h2>UserPost Page</h2>;
//   }
// }

import { useParams } from "react-router-dom";

function UserPost() {
  const { postId, uId } = useParams();

  return (
    <h2>
      UserPost Page : {postId} , {uId}
    </h2>
  );
}

export default UserPost;
