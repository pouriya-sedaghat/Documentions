import { Component, useContext } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import { ThemesContext } from "../context/themes";

import { useSelector, useDispatch } from "react-redux";
import { CHANGE_LANGUAGE } from "../redux/slices/languages";

import { translator } from "../helpers/translator";

// class Header extends Component {
//   render() {
//     return (
//       <Container fluid className="bg-dark text-light">
//         <Row>
//           <Col
//             xxl={12}
//             className="d-flex justify-content-between align-items-center py-1"
//           >
//             <h2>Learning</h2>
//             <ul className="d-flex justify-content-center align-items-center list-unstyled m-0">
//               <li className="mx-3">
//                 <Link className="text-reset text-decoration-none" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="mx-3">
//                 <Link className="text-reset text-decoration-none" to="/users">
//                   Users
//                 </Link>
//               </li>z
//               <li className="mx-3">
//                 <Link className="text-reset text-decoration-none" to="/contact">
//                   About
//                 </Link>
//               </li>
//               <li className="mx-3">
//                 <Link className="text-reset text-decoration-none" to="/contact">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//             <div className="btn-group">
//               <button className="btn btn-outline-light">Light</button>
//               <button className="btn btn-outline-light">Dark</button>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

function Header({ themes, state }) {
  const { setState } = useContext(ThemesContext);

  const { backgroundColorMenu, colorMenu, colorBtnMenu } = themes[state];

  const { type } = useSelector((state) => state.languages);
  const dispatch = useDispatch();

  const setKeyTranslator = translator(type);

  return (
    <Container
      fluid
      className={`${backgroundColorMenu} ${colorMenu} py-2`}
      style={themes[state]}
    >
      <Row>
        <Col
          xxl={12}
          className="d-flex justify-content-between align-items-center"
        >
          <h2>{setKeyTranslator("learning")}</h2>
          <ul className="d-flex justify-content-center align-items-center list-unstyled m-0">
            <li className="mx-3">
              <Link className="text-reset text-decoration-none" to="/">
                {setKeyTranslator("home")}
              </Link>
            </li>
            <li className="mx-3">
              <Link className="text-reset text-decoration-none" to="/users">
                {setKeyTranslator("users")}
              </Link>
            </li>
            <li className="mx-3">
              <Link className="text-reset text-decoration-none" to="/contact">
                {setKeyTranslator("about")}
              </Link>
            </li>
            <li className="mx-3">
              <Link className="text-reset text-decoration-none" to="/contact">
                {setKeyTranslator("contactUs")}
              </Link>
            </li>
          </ul>
          <div className="btn-group">
            <button
              className={`btn ${colorBtnMenu}`}
              onClick={() => setState("light")}
            >
              {setKeyTranslator("light")}
            </button>
            <button
              className={`btn ${colorBtnMenu}`}
              onClick={() => setState("dark")}
            >
              {setKeyTranslator("dark")}
            </button>
          </div>
        </Col>
        <Col xxl={12} className="text-center">
          <div className="btn-group">
            <button
              className={`btn ${colorBtnMenu}`}
              onClick={() => dispatch(CHANGE_LANGUAGE("EN"))}
            >
              EN
            </button>
            <button
              className={`btn ${colorBtnMenu}`}
              onClick={() => dispatch(CHANGE_LANGUAGE("FA"))}
            >
              FA
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
