import { Component } from "react";

// class Todo extends Component {
//   state = {
//     todo: [],
//     firstName: "",
//     lastName: "",
//   };

//   //   changeFirstNameHandler = (e) => {
//   //     this.setState({ firstName: e.target.value });
//   //   };
//   //   changeLastNameHandler = (e) => {
//   //     this.setState({ lastName: e.target.value });
//   //   };

//   changeInputHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     this.setState((preState) => ({
//       todo: [
//         ...preState.todo,
//         { firstName: this.state.firstName, lastName: this.state.lastName },
//       ],
//     }));
//   };

//   deleteHandler = (item, index) => {
//     this.setState((preState) => {
//       const todoItems = preState.todo.filter(
//         (PrevItem, indexItem) => indexItem !== index
//       );
//       return { todo: todoItems };
//     });
//   };

//   editHandler = (item, index) => {
//     const firstName = window.prompt("Enter Your First Name :", item.firstName);
//     const lastName = window.prompt("Enter Your Last Name :", item.lastName);
//     const newItem = { firstName, lastName };
//     this.setState((preState) => {
//       const newTodo = preState.todo.map((item, indexItem) =>
//         indexItem === index ? newItem : item
//       );
//       return { todo: newTodo };
//     });
//   };

//   render() {
//     return (
//       <>
//         <h2>Todo Page</h2>
//         <form onSubmit={this.submitHandler}>
//           <h3>Form Data</h3>
//           <div>
//             <label htmlFor="firstName">Enter Your First Name :</label>
//             <br />
//             {/* <input
//               type="text"
//               placeholder="First Name"
//               value={this.state.firstName}
//               id="firstName"
//               onChange={this.changeFirstNameHandler}
//               autoFocus
//             /> */}
//             <input
//               type="text"
//               placeholder="First Name"
//               value={this.state.firstName}
//               id="firstName"
//               name="firstName"
//               onChange={this.changeInputHandler}
//               autoFocus
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName">Enter Your Last Name :</label>
//             <br />
//             {/* <input
//               type="text"
//               placeholder="Last Name"
//               value={this.state.lastName}
//               id="lastName"
//               onChange={this.changeLastNameHandler}
//               autoFocus
//             /> */}
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={this.state.lastName}
//               id="lastName"
//               name="lastName"
//               onChange={this.changeInputHandler}
//               autoFocus
//             />
//           </div>
//           <button>Add To Table</button>
//         </form>
//         <table>
//           <fieldset>
//             <legend>Todo</legend>
//             <thead>
//               <tr>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.todo.length !== 0 ? (
//                 this.state.todo.map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.firstName}</td>
//                     <td>{item.lastName}</td>
//                     <td>
//                       <button
//                         onClick={this.editHandler.bind(null, item, index)}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={this.deleteHandler.bind(null, item, index)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={3}>No Item</td>
//                 </tr>
//               )}
//             </tbody>
//           </fieldset>
//         </table>
//       </>
//     );
//   }
// }

import { useState, useRef } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const firstName = firstNameInputRef.current.value;
    const lastName = lastNameInputRef.current.value;

    const newItem = { firstName, lastName };

    setTodo((preState) => [...preState, newItem]);
  }

  const deleteHandler = function (item, index) {
    setTodo((preState) => {
      const todoItems = preState.filter(
        (PrevItem, indexItem) => indexItem !== index
      );
      return todoItems;
    });
  };

  const editHandler = (item, index) => {
    const firstName = window.prompt("Enter Your First Name :", item.firstName);
    const lastName = window.prompt("Enter Your Last Name :", item.lastName);
    const newItem = { firstName, lastName };
    setTodo((preState) => {
      const newTodo = preState.map((item, indexItem) =>
        indexItem === index ? newItem : item
      );
      return newTodo;
    });
  };

  return (
    <>
      <h2>Todo Page</h2>
      <form onSubmit={submitHandler}>
        <h3>Form Data</h3>
        <div>
          <label htmlFor="firstName">Enter Your First Name :</label>
          <br />
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            ref={firstNameInputRef}
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="lastName">Enter Your Last Name :</label>
          <br />
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            ref={lastNameInputRef}
            autoFocus
          />
        </div>
        <button>Add To Table</button>
      </form>
      <table style={{ borderCollapse: "collapse" }}>
        <fieldset>
          <legend>Todo</legend>
          <thead>
            <tr>
              <th style={{ border: "1px solid white" }}>First Name</th>
              <th style={{ border: "1px solid white" }}>Last Name</th>
              <th style={{ border: "1px solid white" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {todo.length !== 0 ? (
              todo.map((item, index) => (
                <tr key={index}>
                  <td  style={{border:'1px solid white'}}>{item.firstName}</td>
                  <td  style={{border:'1px solid white'}}>{item.lastName}</td>
                  <td  style={{border:'1px solid white'}}>
                    <button onClick={editHandler.bind(null, item, index)}>
                      Edit
                    </button>
                    <button onClick={deleteHandler.bind(null, item, index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No Item</td>
              </tr>
            )}
          </tbody>
        </fieldset>
      </table>
    </>
  );
}

export default Todo;
