// function Home() {
//   return <h2>Home Page</h2>;
// }

// Implement Frontend Form

import { useRef, useState, useEffect } from "react";

function Home() {
  const titleInputRef = useRef();
  const priceInputRef = useRef();

  // function submitHanler(e) {
  //   e.preventDefault();

  //   const title = titleInputRef.current.value;
  //   const price = priceInputRef.current.value;

  //   console.log(title, price);

  //   titleInputRef.current.value = "";
  //   priceInputRef.current.value = "";
  // }

  // Send Client Side API Request

  // function submitHanler(e) {
  //   e.preventDefault();

  //   const title = titleInputRef.current.value;
  //   const price = priceInputRef.current.value;

  //   if (!(title && price)) return alert("Entre Your Title Or Price.");

  //   const reqBody = { title, price };

  //   titleInputRef.current.value = "";
  //   priceInputRef.current.value = "";

  //   fetch("/api/product", {
  //     method: "POST",
  //     body: JSON.stringify(reqBody),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // send Client Side API Request

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("/api/product");
    const data = await response.json();

    setData(data);
  }

  async function submitHanler(e) {
    e.preventDefault();

    const title = titleInputRef.current.value;
    const price = priceInputRef.current.value;

    if (!(title && price)) return alert("Entre Your Title Or Price.");

    const reqBody = { title, price };

    titleInputRef.current.value = "";
    priceInputRef.current.value = "";

    const response = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);

    getData();
  }

  return (
    <>
      <form onSubmit={submitHanler}>
        <h2>New Product</h2>
        <div>
          <label htmlFor="title">Title :</label> <br />
          <input
            type="text"
            placeholder="Enter Your Title"
            id="title"
            ref={titleInputRef}
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="price">Price :</label> <br />
          <input
            type="text"
            placeholder="Enter Your Price"
            id="price"
            ref={priceInputRef}
            autoFocus
          />
        </div>
        <button>Add New Product</button>
      </form>
      <table style={{ border: "1px solid white", borderCollapse: "collapse" }}>
        <caption>Products</caption>
        <thead>
          <tr>
            <th style={{ border: "1px solid white" }}>Title</th>
            <th style={{ border: "1px solid white" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid white" }}>{item.title}</td>
                <td style={{ border: "1px solid white" }}>{item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>No Item</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Home;
