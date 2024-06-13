import { Component, useContext } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { ThemesContext } from "../context/themes";

import { themes } from "../themes/appThemes";

// class Layout extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <>
//         <Header />
//         <main className="container">{this.props.children}</main>
//         <Footer />
//       </>
//     );
//   }
// }

function Layout({ children }) {
  const { state } = useContext(ThemesContext);

  const { backgroundColor, color } = themes[state];

  return (
    <>
      <Header themes={themes} state={state} />
      <main className={`container-fluid ${backgroundColor} ${color}`}>
        {children}
      </main>
      <Footer themes={themes} state={state} />
    </>
  );
}

export default Layout;
