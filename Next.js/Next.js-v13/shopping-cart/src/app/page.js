import ProductItem from "@/components/ProductItem";

import products from "@/data/products.json";

import { Row, Col } from "react-bootstrap";

// Dynamic Title And ...

// export const metadata = {
//   title: "Home",
//   description: "Products Shoppping.",
// };

function Home() {
  return (
    <Row className="py-4">
      {products.map((item) => (
        <ProductItem key={item.slug} {...item} />
      ))}
    </Row>
  );
}

export default Home;
