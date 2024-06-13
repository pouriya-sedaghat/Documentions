// Useing Internal API To pre-rendering

import fs from "fs/promises";
import path from "path";

import { useState } from "react";

function Products({ data }) {
  const [price, setPrice] = useState("");

  async function showPriceHandler(id) {
    const response = await fetch(`/api/${id}`);
    const { price } = await response.json();

    setPrice(price);
  }

  return (
    <>
      <h2>Products</h2>
      {/* <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul> */}

      {/* Dynamic API Route */}

      <ul>
        {data.map((item) => (
          <li key={item.id} onClick={showPriceHandler.bind(null, item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
      <p>Price : {price ? price : "Select Your Product."}</p>
    </>
  );
}

export async function getStaticProps() {
  const filePaht = path.join(process.cwd(), "data", "products.json");

  const jsonData = await fs.readFile(filePaht);
  const data = JSON.parse(jsonData);

  return {
    props: { data },
  };
}

export default Products;
