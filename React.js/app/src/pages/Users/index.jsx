import { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import axios from "axios";

// class Users extends Component {
//   state = {
//     firstName: "",
//     lastName: "",
//     users: [],
//   };
//   componentDidMount() {
//     this.getData();
//   }

//   getData() {
//     axios({ url: "http://localhost:5000/users" })
//       .then(({ data }) => {
//         this.setState({ users: data });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   submitHandler = async (e) => {
//     e.preventDefault();

//     if (!this.state.firstName && !this.state.lastName)
//       return alert("Enter Your First Name Or Last Name.");

//     const newUser = {
//       firstName: this.state.firstName.trim(),
//       lastName: this.state.lastName.trim(),
//     };

//     this.setState({ firstName: "", lastName: "" });

//     try {
//       await axios({
//         url: "http://localhost:5000/users",
//         method: "POST",
//         data: JSON.stringify(newUser),
//         headers: { "Content-Type": "application/json" },
//       });
//       this.getData();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   deleteHandler = async (id) => {
//     try {
//       await axios({
//         url: "http://localhost:5000/users/" + id,
//         method: "Delete",
//       });
//       this.getData();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   editHandler = async (item) => {
//     const firstName = window.prompt("Enter Your First Name :", item.firstName);
//     const lastName = window.prompt("Enter Your Last Name :", item.lastName);

//     const newUser = {
//       firstName,
//       lastName,
//     };

//     try {
//       await axios({
//         url: "http://localhost:5000/users/" + item.id,
//         method: "PATCH",
//         data: JSON.stringify(newUser),
//         headers: { "Content-Type": "application/json" },
//       });
//       this.getData();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   render() {
//     return (
//       <>
//         <Container>
//           <Row>
//             <Col xxl={12} className="p-5 text-center">
//               <form onSubmit={this.submitHandler}>
//                 <h2>User Data</h2>
//                 <div>
//                   <label htmlFor="firstName">Enter Your Frist Name :</label>
//                   <br />
//                   <input
//                     type="text"
//                     onChange={(e) =>
//                       this.setState({ firstName: e.target.value })
//                     }
//                     placeholder="First Name"
//                     value={this.state.firstName}
//                     id="firstName"
//                     autoFocus
//                   />
//                 </div>
//                 <div className="my-2">
//                   <label htmlFor="lastName">Enter Your Last Name :</label>
//                   <br />
//                   <input
//                     type="text"
//                     onChange={(e) =>
//                       this.setState({ lastName: e.target.value })
//                     }
//                     placeholder="First Name"
//                     value={this.state.lastName}
//                     id="firstName"
//                     autoFocus
//                   />
//                 </div>
//                 <button className="btn btn-success">Add To Table</button>
//               </form>
//             </Col>
//           </Row>
//           <Row>
//             <Col xxl={12}>
//               <table className="table table-bordered table-light text-center">
//                 <thead>
//                   <tr>
//                     <th className="text-primary">First Name</th>
//                     <th className="text-primary">Last Name</th>
//                     <th className="text-primary">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.users.length !== 0 ? (
//                     this.state.users.map((item) => (
//                       <tr key={item.id.toString()}>
//                         <td>{item.firstName}</td>
//                         <td>{item.lastName}</td>
//                         <td>
//                           <div className="btn-group">
//                             <button
//                               className="btn btn-warning"
//                               onClick={this.editHandler.bind(null, item)}
//                             >
//                               Edite
//                             </button>
//                             <button
//                               className="btn btn-danger"
//                               onClick={() => this.deleteHandler(item.id)}
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan={3}>No Item</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </Col>
//           </Row>
//         </Container>
//       </>
//     );
//   }
// }

import { useState, useEffect } from "react";

import { useOnChangeHandler } from "../../hooks/useOnChangeHandler";
import { Outlet, Link } from "react-router-dom";

function Users() {
  const [firstName, setFirstName, onChangeFirstName] = useOnChangeHandler("");
  const [lastName, setLastName, onChangeLastName] = useOnChangeHandler("");
  const [users, setUsers] = useState([]);
  const myUsers = [
    { useName: "Pouriya Sedaghat", id: 1 },
    { useName: "Masood Sadri", id: 2 },
  ];

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios({ url: "http://localhost:5000/users" })
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!firstName && !lastName)
      return alert("Enter Your First Name Or Last Name.");

    const newUser = {
      firstName,
      lastName,
    };

    setFirstName("");
    setLastName("");

    try {
      await axios({
        url: "http://localhost:5000/users",
        method: "POST",
        data: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios({
        url: "http://localhost:5000/users/" + id,
        method: "Delete",
      });
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = async (item) => {
    const f = window.prompt("Enter Your First Name :", item.firstName);
    const l = window.prompt("Enter Your Last Name :", item.lastName);

    const newUser = {
      firstName: f,
      lastName: l,
    };

    try {
      await axios({
        url: "http://localhost:5000/users/" + item.id,
        method: "PATCH",
        data: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col xxl={12} className="p-5 text-center">
            <form onSubmit={submitHandler}>
              <h2>User Data</h2>
              <div>
                <label htmlFor="firstName">Enter Your Frist Name :</label>
                <br />
                <input
                  type="text"
                  onChange={onChangeFirstName}
                  placeholder="First Name"
                  value={firstName}
                  id="firstName"
                  autoFocus
                />
              </div>
              <div className="my-2">
                <label htmlFor="lastName">Enter Your Last Name :</label>
                <br />
                <input
                  type="text"
                  onChange={onChangeLastName}
                  placeholder="First Name"
                  value={lastName}
                  id="firstName"
                  autoFocus
                />
              </div>
              <button className="btn btn-success">Add To Table</button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col xxl={12}>
            <table className="table table-bordered table-light text-center">
              <thead>
                <tr>
                  <th className="text-primary">First Name</th>
                  <th className="text-primary">Last Name</th>
                  <th className="text-primary">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length !== 0 ? (
                  users.map((item) => (
                    <tr key={item.id.toString()}>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>
                        <div className="btn-group">
                          <button
                            className="btn btn-warning"
                            onClick={editHandler.bind(null, item)}
                          >
                            Edite
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteHandler(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>No Item</td>
                  </tr>
                )}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <Col xxl={12}>
            <ul>
              {myUsers.map((item) => (
                <li key={item.id.toString()}>
                  <Link to={`/users/${item.id}`}>{item.useName} Page</Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xxl={12}>
            <div className="btn-group">
              <button>
                <Link to="/users/profile">Profile</Link>
              </button>
              <button>
                <Link to="/users/account">Account</Link>
              </button>
            </div>
            {/* <Outlet /> */}
            <Outlet context={"Hello To useOutletContent"} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Users;
