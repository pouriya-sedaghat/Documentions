import { Component } from "react";

// export class Container extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div
//         className={`container${this.props.fluid ? "-fluid" : ""} ${
//           this.props.className ? this.props.className : ""
//         }`}
//         {...this.props.attrs}
//       >
//         {this.props.children}
//       </div>
//     );
//   }
// }

// export class Row extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <div className="row">{this.props.children}</div>;
//   }
// }

// export class Col extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div
//         className={`${this.props.xxl ? "col-xxl-" + this.props.xxl : ""}${
//           this.props.xl ? " col-xl-" + this.props.xl : ""
//         }${this.props.lg ? " col-lg-" + this.props.lg : ""}${
//           this.props.md ? " col-md-" + this.props.md : ""
//         }${this.props.sm ? " col-sm-" + this.props.sm : ""}${
//           this.props.xs ? " col-" + this.props.xs : ""
//         }${this.props.className ? " " + this.props.className : ""}`}
//         {...this.props.attrs}
//       >
//         {this.props.children}
//       </div>
//     );
//   }
// }

export function Container({ children, fluid, className, ...attrs }) {
  return (
    <div
      className={`container${fluid ? "-fluid" : ""} ${
        className ? className : ""
      }`}
      {...attrs}
    >
      {children}
    </div>
  );
}

export function Row({ children }) {
  return <div className="row">{children}</div>;
}

export function Col({
  children,
  xxl,
  xl,
  lg,
  md,
  sm,
  xs,
  className,
  ...attrs
}) {
  return (
    <div
      className={`${xxl ? "col-xxl-" + xxl : ""}${xl ? " col-xl-" + xl : ""}${
        lg ? " col-lg-" + lg : ""
      }${md ? " col-md-" + md : ""}${sm ? " col-sm-" + sm : ""}${
        xs ? " col-" + xs : ""
      }${className ? " " + className : ""}`}
      {...attrs}
    >
      {children}
    </div>
  );
}
