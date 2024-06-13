import { Component } from "react";

import { useSelector } from "react-redux";

import { translator } from "../../../helpers/translator";

// class SinglePost extends Component {
//   render() {
//     return <h2>SinglePost Page</h2>;
//   }
// }

function SinglePost() {
  const { type } = useSelector((state) => state.languages);

  const setKeyTranslator = translator(type);

  return <h2>{setKeyTranslator("singlePostPage")}</h2>;
}

export default SinglePost;
