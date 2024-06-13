"use client";

import { useSelector, useDispatch } from "react-redux";

import { ADD_Item } from "@/redux/slices/cart";

import { useRouter } from "next/navigation";

function AddToCart({ product }) {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const router = useRouter();

  function addToCarthandler() {
    const existingItem = cartItems.find((item) => item.slug === product.slug);

    const quantity = existingItem ? existingItem.quantity + 1 : 1;

    if (quantity > product.count) return alert("Product Is out.");

    dispatch(ADD_Item({ ...product, quantity }));

    product.main && router.push("/cart");
  }

  return (
    <button
      onClick={addToCarthandler}
      className="btn btn-dark opacity-75 d-block mx-auto"
    >
      Add To Cart
    </button>
  );
}

export default AddToCart;
