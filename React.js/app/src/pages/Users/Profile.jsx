import { Component } from "react";

// class Profile extends Component {
//   render() {
//     return <h2>Profile Page</h2>;
//   }
// }

// function Profile() {
//   return <h2>Profile Page</h2>;
// }

import { useOutletContext } from "react-router-dom";

function Profile() {
  const say = useOutletContext();
  return <h2>Profile Page : {say}</h2>;
}

export default Profile;
