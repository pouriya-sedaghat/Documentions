// Navigate Between Route

import Link from "next/link";
import { useRouter } from "next/router";

function UserPage() {
  const router = useRouter();

  const users = [
    { username: "Masood Sadri", id: "u1" },
    { username: "Pouriya Sedaghat", id: "u2" },
  ];

  function navigatHandler(id) {
    // router.push(`/users/${id}`);

    router.push({ pathname: "/users/[id]", query: { id } });
  }

  return (
    <>
      <h2>User Page</h2>
      <ul>
        {/* <li>
          <Link href={"/users/u1"}>Masood Sadri</Link> Static Href
        </li> */}

        {/* {users.map((item) => (
          <li key={item.id}>
            <Link href={`/users/${item.id}`}>{item.username}</Link>
          </li>
        ))} */}

        {/* {users.map((item) => (
          <li key={item.id}>
            <Link href={{ pathname: "/users/[id]", query: { id: item.id } }}>
              {item.username}
            </Link>
          </li>
        ))} */}

        {users.map((item) => (
          <li key={item.id}>
            <button onClick={navigatHandler.bind(null, item.id)}>
              {item.username}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserPage;
