import { Col } from "react-bootstrap";

import Link from "next/link";
import Image from "next/image";

import AddToCart from "@/components/AddToCart";

function ProductItem({
  slug,
  title,
  price,
  description,
  category,
  count,
  image,
}) {
  return (
    <Col xs={3} className="d-flex justify-content-center py-3">
      <div>
        <Link
          href={`/product/${slug}`}
          className="d-block text-reset text-decoration-none"
        >
          <Image src={image} alt={title} width={200} height={290} priority />
        </Link>
        <div className="mt-2">
          <h2 className="h6">{title}</h2>
          <p>Price : {price} IRR</p>
          <AddToCart
            product={{
              slug,
              title,
              price,
              description,
              category,
              count,
              image,
              main: false,
            }}
          />
        </div>
      </div>
    </Col>
  );
}

export default ProductItem;
