// Dynamic Route

import { useRouter } from "next/router";

function UserId() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return <h2>UserId Page</h2>;
}

export default UserId;
