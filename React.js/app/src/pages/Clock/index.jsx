import { Component } from "react";

// export default class Clock extends Component {
//   state = {
//     localTime: new Date().toLocaleTimeString(),
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ localTime: new Date().toLocaleTimeString() });
//     }, 1000);
//   }

//   render() {
//     return (
//       <>
//         <h2>Clock Page</h2>
//         <p>{this.state.localTime}</p>
//       </>
//     );
//   }
// }

import { useState, useEffect } from "react";

export default function Clock() {
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <h2>Clock Page</h2>
      <p>{localTime}</p>
    </>
  );
}
