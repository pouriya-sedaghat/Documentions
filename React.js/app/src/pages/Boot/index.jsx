import { Component } from "react";
// import { Container, Row, Col } from "../../components/BootstrapGrid";

import { Container, Row, Col } from "reactstrap";

// class Boot extends Component {
//   render() {
//     // return (
//     //   <>
//     //     <div className="container">
//     //       <div className="row">
//     //         <div className="col">
//     //           <h2>Boot Page</h2>
//     //         </div>
//     //       </div>
//     //       <div className="row">
//     //         <div className="col">
//     //           <p>Hello To Bootstrap</p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </>
//     // );
//     // return (
//     //   <>
//     //     <Container
//     //       fluid
//     //       className="bg-light"
//     //       attrs={{ style: { color: "black" } }}
//     //     >
//     //       <Row>
//     //         <Col xxl={8} xl={4} className="text-primary">
//     //           <h2>Boot Page</h2>
//     //         </Col>
//     //       </Row>
//     //       <Row>
//     //         <Col xxl={8} sm={4} attrs={{ style: { backgroundColor: "gray" } }}>
//     //           <p>Hello To Bootstrap</p>
//     //         </Col>
//     //       </Row>
//     //     </Container>
//     //   </>
//     // );
//     return (
//       <>
//         <Container fluid className="bg-light" style={{ color: "black" }}>
//           <Row>
//             <Col xxl={8} xl={4} className="text-primary">
//               <h2>Boot Page</h2>
//             </Col>
//           </Row>
//           <Row>
//             <Col xxl={8} sm={4} style={{ backgroundColor: "gray" }}>
//               <p>Hello To Bootstrap</p>
//             </Col>
//           </Row>
//         </Container>
//       </>
//     );
//   }
// }

function Boot() {
  // return (
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col">
  //           <h2>Boot Page</h2>
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="col">
  //           <p>Hello To Bootstrap</p>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <>
      <Container fluid className="bg-light" style={{ color: "black" }}>
        <Row>
          <Col xxl={8} xl={4} className="text-primary">
            <h2>Boot Page</h2>
          </Col>
        </Row>
        <Row>
          <Col xxl={8} sm={4} style={{ backgroundColor: "gray" }}>
            <p>Hello To Bootstrap</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Boot;
