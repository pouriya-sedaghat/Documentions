import { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// class Footer extends Component {
//   render() {
//     return (
//       <>
//         <Container fluid className="bg-dark text-light fixed-bottom">
//           <Row>
//             <Col className="py-1 text-center">Footer</Col>
//           </Row>
//         </Container>
//       </>
//     );
//   }
// }

function Footer({ themes, state }) {
  const { backgroundColorMenu, colorMenu } = themes[state];

  return (
    <>
      <Container fluid className={`${backgroundColorMenu} ${colorMenu}`}>
        <Row>
          <Col className="py-1 text-center">Footer</Col>
        </Row>
      </Container>
    </>
  );
}
export default Footer;
