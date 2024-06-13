import { Component } from "react";

// class List extends Component {
//   state = {
//     list: ["mongoDB", "mySQL", "noSQL"],
//   };

//   render() {
//     return (
//       <>
//         <h2>List Page</h2>
//         <ul>
//           {this.state.list.map((item, index) => {
//             return (
//               <>
//                 <li key={index}>{item}</li>
//               </>
//             );
//           })}
//         </ul>
//       </>
//     );
//   }
// }

import { useState } from "react";

function List() {
  const [data, setData] = useState(["mongoDB", "mySQL", "noSQL"]);

  return (
    <>
      <h2>List Page</h2>
      <ul>
        {data.map((item, index) => {
          return (
            <>
              <li key={index}>{item}</li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default List;
