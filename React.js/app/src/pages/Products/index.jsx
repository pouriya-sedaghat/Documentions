import { Component } from "react";

// class PostId extends Component {
//   render() {
//     return <h2>PostId Page</h2>;
//   }
// }

import { useParams } from "react-router-dom";

function Products() {
  const { slug,sslug } = useParams();
  return <h2>Products Page : {slug} , {sslug}</h2>;
}

export default Products;
