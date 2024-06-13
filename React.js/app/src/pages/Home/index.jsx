import { Component } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { translator } from "../../helpers/translator";

// class Home extends Component {
//   render() {
//     return (
//       <>
//         <h2>Home Page</h2>
//         <ul>
//           <li>
//             <Link to="/blog/posts">SinglePost Page</Link>
//           </li>
//         </ul>
//       </>
//     );
//   }
// }

function Home() {
  const { type } = useSelector((state) => state.languages);

  const setKeyTranslator = translator(type);

  return (
    <>
      <h2>{setKeyTranslator("homePage")}</h2>
      <ul>
        <li>
          <Link to="/blog/posts">{setKeyTranslator("singlePostPage")}</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
