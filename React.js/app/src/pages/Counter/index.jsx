import { Component } from "react";

import convertor from "number-to-words";

// class Counter extends Component {
//   state = {
//     counter: 0,
//   };

//   minus() {
//     this.setState((preState) => ({ counter: --preState.counter }));
//   }

//   //   plus = function () {
//   //     this.setState((preState) => ({ counter: ++preState.counter }));
//   //   };

//   plus = () => {
//     this.setState((preState) => ({ counter: ++preState.counter }));
//   };

//   render() {
//     return (
//       <>
//         <h2>Conter Page</h2>
//         <div>
//           <button onClick={this.minus.bind(this)}>-</button>
//           <span> {convertor.toWords(this.state.counter)} </span>
//           {/* <button onClick={this.plus.bind(this)}>+</button> */}
//           <button onClick={this.plus}>+</button>
//         </div>
//       </>
//     );
//   }
// }

import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function minus() {
    setCounter((preState) => --preState);
  }

  //   const plus = function () {
  //     setCounter((preState) => ++preState);
  //   }

  const plus = () => {
    setCounter((preState) => ++preState);
  };

  return (
    <>
      <h2>Counter Page</h2>
      <div>
        <button onClick={minus}>-</button>
        <span> {convertor.toWords(counter)} </span>
        <button onClick={plus}>+</button>
      </div>
    </>
  );
}

export default Counter;
