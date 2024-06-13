import fs from "fs/promises";
import path from "path";

// function ProductDetali({ loadedProduct }) {
//   return (
//     <>
//       <h2>Title :{loadedProduct.title}</h2>
//       <p>Price :{loadedProduct.price}</p>
//     </>
//   );
// }

// export async function getStaticProps(context) {
//   const {
//     params: { pId },
//   } = context;

//   const filePath = path.join(process.cwd(), "data", "products.json");
//   const jsonData = await fs.readFile(filePath);
//   const { products } = JSON.parse(jsonData);

//   const loadedProduct = products.find((item) => item.id === pId);

//   return { props: { loadedProduct } };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { pId: "p1" } },
//       { params: { pId: "p2" } },
//       { params: { pId: "p3" } },
//     ],
//     fallback: false,
//   };
// }

// fallback

// function ProductDetali({ loadedProduct }) {
//   if (!loadedProduct) return "Loaging...";
//   return (
//     <>
//       <h2>Title :{loadedProduct.title}</h2>
//       <p>Price :{loadedProduct.price}</p>
//     </>
//   );
// }

// export async function getStaticProps(context) {
//   const {
//     params: { pId },
//   } = context;

//   const filePath = path.join(process.cwd(), "data", "products.json");
//   const jsonData = await fs.readFile(filePath);
//   const { products } = JSON.parse(jsonData);

//   const loadedProduct = products.find((item) => item.id === pId);

//   return { props: { loadedProduct } };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { pId: "p1" } }],
//     fallback: true,
//   };
// }

// Dynaminc Paths

function ProductDetali({ loadedProduct }) {
  if (!loadedProduct) return "Loaging...";
  return (
    <>
      <h2>Title :{loadedProduct.title}</h2>
      <p>Price :{loadedProduct.price}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = await fs.readFile(filePath);
  return JSON.parse(jsonData);
}

export async function getStaticProps(context) {
  const {
    params: { pId },
  } = context;

  const { products } = await getData();
  const loadedProduct = products.find((item) => item.id === pId);

  return { props: { loadedProduct } };
}

export async function getStaticPaths() {
  const { products } = await getData();

  const ids = products.map((item) => item.id);
  const paths = ids.map((item) => ({ params: { pId: item } }));

  return {
    paths,
    fallback: false,
  };
}

export default ProductDetali;

