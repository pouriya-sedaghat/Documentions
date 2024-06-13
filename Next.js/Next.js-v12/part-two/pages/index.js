// pre-renders

// function Home() {
//   return (
//     <>
//       <h2>Home Page</h2>
//       <ul>
//         <li>Product One</li>
//         <li>Product Two</li>
//         <li>Product Three</li>
//       </ul>
//     </>
//   );
// }

// getStaticProps

// function Home({ products }) {
//   return (
//     <>
//       <h2>Home Page</h2>
//       <ul>
//         {products.map((item) => (
//           <li key={item.id.toString()}>{item.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export async function getStaticProps() {
//   return {
//     props: {
//       products: [
//         { title: "Product One", id: 1 },
//         { title: "Product two", id: 2 },
//         { title: "Product Three", id: 3 },
//       ],
//     },
//   };
// }

// Running Server Side Code

// import fs from "fs";
import fs from "fs/promises";
import Link from "next/link";
import path from "path";

function Home({ products }) {
  return (
    <>
      <h2>Home Page</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id.toString()}>
            {/* {item.title} */}
            <Link href={`/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = await fs.readFile(filePath);
  const { products } = JSON.parse(jsonData);

  return {
    props: {
      products,
    },
  };
}

export default Home;
