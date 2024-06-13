// Client Side Data Fetching

import { useState, useEffect } from "react";

// function Oreders() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   async function getData() {
//     const response = await fetch("http://localhost:5000/orders");
//     const responseData = await response.json();

//     setData(responseData);
//   }

//   return (
//     <>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id.toString()}>
//             Title :{item.title}, Price :{item.price}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// Server Side Data Fetching 

function Oreders({ initialState }) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://localhost:5000/orders");
    const responseData = await response.json();

    setData(responseData);
  }

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id.toString()}>
            Title :{item.title}, Price :{item.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:5000/orders");
  const responseData = await response.json();

  return { props: { initialState: responseData } };
}

export default Oreders;
