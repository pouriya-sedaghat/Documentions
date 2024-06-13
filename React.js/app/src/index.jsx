import React, { Component } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { ThemesContextProvider } from "./context/themes";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./app";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.scss";

// ReactDOM.render(<h2>Hello To Reactjs</h2>, document.getElementById("root"));

// const jsx = React.createElement(
//   "h2",
//   {
//     style: { color: "white", backgroundColor: "black" },
//   },
//   "Hello To Reactjs"
// );

// const jsx = <h2>Hello To Reactjs</h2>;

// components

// class component

// class App extends Component {
//   render() {
//     return(
//         <h2>Hello To Reactjs</h2>
//     );
//   }
// }

// functional component

// function App(){
//     return(
//         <h2>Hello To Reactjs</h2>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
// <h2>Hello To Reactjs</h2>
// );

// root.render(
//     jsx
// );

// root.render(<App fullName={"Pouriya Sedaghat"} age={24} />);

// root.render(<App />);
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemesContextProvider>
        <App />
      </ThemesContextProvider>
    </Provider>
  </BrowserRouter>
);
