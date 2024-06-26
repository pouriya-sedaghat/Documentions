import { Row, Col } from "react-bootstrap";

import products from "@/data/products.json";

import Image from "next/image";

import AddToCart from "@/components/AddToCart";

function ProductDetail({ params: { slug } }) {
  const loadedProduct = products.find((item) => item.slug === slug);

  if (!loadedProduct) return "Loading...";
  return (
    <Row className="py-4">
      <Col xs={12} className="text-dark py-3">
        <div className="text-center">
          <Image
            src={loadedProduct.image}
            width={240}
            height={330}
            alt={loadedProduct.title}
            priority
            className="rounded"
          />
        </div>
        <div>
          <h2 className="h6">{loadedProduct.title}</h2>
          <p>Category : {loadedProduct.category}</p>
          <p>{loadedProduct.description}</p>
          <p>Count : {loadedProduct.count}</p>
          <p>Price : {loadedProduct.price.toLocaleString()} IRR</p>
          <AddToCart product={{ ...loadedProduct, main: true }} />
        </div>
      </Col>
    </Row>
  );
}

export default ProductDetail;
