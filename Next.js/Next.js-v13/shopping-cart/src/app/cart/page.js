"use client";

import { Row, Col } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import Image from "next/image";

import { REMOVE_ITEM } from "@/redux/slices/cart";

import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const router = useRouter();

  function removeOfCartHandler(product) {
    dispatch(REMOVE_ITEM(product));

    alert("Product Removed.");
  }

  function goToCheckoutHandler() {
    router.push("/shipping");
  }

  return (
    <>
      <Row className="py-4">
        <Col xs={9} className="py-3">
          <table className="table table-bordered table-dark table-hover table-striped text-center align-middle">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <tr key={item.slug}>
                    <td>
                      <Image
                        src={item.image}
                        width={15}
                        height={20}
                        alt={item.title}
                        className="me-2"
                      />
                      {item.title}
                    </td>
                    <td>{item.quantity}</td>
                    <td>{item.price.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => removeOfCartHandler(item)}
                        className="btn btn-outline-warning"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>No Item</td>
                </tr>
              )}
            </tbody>
          </table>
        </Col>
        <Col xs={3} className="text-center text-light py-3">
          <div className="bg-dark rounded-4 py-5">
            <button
              onClick={goToCheckoutHandler}
              className="btn btn-outline-light"
            >
              Checkout
            </button>
            <p className="m-0 mt-2">
              Total Price :{" "}
              {cartItems
                .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                .toLocaleString() + " IRR"}
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
