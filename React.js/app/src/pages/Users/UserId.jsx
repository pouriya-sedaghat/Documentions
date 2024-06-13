import { Component } from "react";

// class UserId extends Component {
//   render() {
//     return <h2>UserId Page</h2>;
//   }
// }

import { useParams } from "react-router-dom";

function UserId() {
  const { userId } = useParams();

  return <h2>UserId Page : {userId}</h2>;
}

export default UserId;
