// props

import { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Clock from "./pages/Clock";
import Counter from "./pages/Counter";
import List from "./pages/List";
import Todo from "./pages/Todo";
import Boot from "./pages/Boot";
import Users from "./pages/Users";
import Orders from "./pages/Users/Orders";
import UserId from "./pages/Users/UserId";
import Blog from "./pages/Blog";
import SinglePost from "./pages/Blog/Posts";
import PostId from "./pages/Blog/Posts/PostId";
import UserPost from "./pages/Blog/Posts/PostId/UserPost";
import Products from "./pages/Products";
import Profile from "./pages/Users/Profile";
import Account from "./pages/Users/Account";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Layout from "./layout/Layout";
import Info from "./pages/UesReducerUseMemoUseCallbak";

// class component

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     //     return (
//     //       <div>
//     //         <h2>Hello To Reactjs{this.props.fullName}</h2>
//     //         <p>
//     //           im {this.props.fullName},my age is {this.props.age}
//     //         </p>
//     //       </div>
//     //     );
//     //   }
//     // return (
//     //   <Fragment>
//     //     <h2>Hello To Reactjs{this.props.fullName}</h2>
//     //     <p>
//     //       im {this.props.fullName},my age is {this.props.age}
//     //     </p>
//     //   </Fragment>
//     // );
//     return (
//       <>
//         <h2>Hello To Reactjs{this.props.fullName}</h2>
//         <p>
//           im {this.props.fullName},my age is {this.props.age}
//         </p>
//       </>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <>
        {/* <Clock /> */}
        {/* <Counter /> */}
        {/* <List/> */}
        {/* <Todo/> */}
        {/* <Boot /> */}
        {/* <Users /> */}
        <Layout>
          <Routes>
            <Route path="/users" element={<Users />}>
              <Route path="profile" element={<Profile />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="/users/orders" element={<Orders />} />
            <Route path="/users/:userId" element={<UserId />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/posts" element={<SinglePost />} />
            <Route path="/blog/posts/:postId" element={<PostId />} />
            <Route path="/blog/posts/:postId/:uId" element={<UserPost />} />
            <Route path="/products" element={<Products />}>
              <Route path=":slug" />
              <Route path=":slug/:sslug" />
            </Route>
            <Route path="/clock" element={<Clock />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/list" element={<List />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/boot" element={<Boot />} />
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </>
    );
  }
}

// functional component

// function App({ fullName, age }) {
//   //   return (
//   //     <div>
//   //       <h2>Hello To Reactjs</h2>
//   //       <p>
//   //         im {fullName},my age is {age}
//   //       </p>
//   //     </div>
//   //   );

//   //   return (
//   //     <Fragment>
//   //       <h2>Hello To Reactjs</h2>
//   //       <p>
//   //         im {fullName},my age is {age}
//   //       </p>
//   //     </Fragment>
//   //   );

//   return (
//     <>
//       <h2>Hello To Reactjs</h2>
//       <p>
//         im {fullName},my age is {age}
//       </p>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <App />
//     </>
//   );
// }

export default App;
