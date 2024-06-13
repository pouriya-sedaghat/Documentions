import { Component } from "react";

// class Account extends Component {
//   render() {
//     return <h2>Account Page</h2>;
//   }
// }

// function Account() {
//   return <h2>Account Page</h2>;
// }

import { useOutletContext } from "react-router-dom";

function Account() {
  const say = useOutletContext();

  return <h2>Account Page : {say}</h2>;
}

export default Account;
