// Nested Dynamic Route

import { useRouter } from "next/router";

function UserPost() {
  const router = useRouter();
  console.log(router.query);

  return <h2>UserPost Page</h2>;
}

export default UserPost;
