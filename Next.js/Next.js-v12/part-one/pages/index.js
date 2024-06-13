// export default function Home() {
//   return <h2>Home Page</h2>;
// }

// Navigat Between Route

import Link from "next/link";

function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <ul>
        {/* <li><a href="/blog/posts">Post Page</a></li> */}
        <li>
          <Link href="/blog/posts">Post Page</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
