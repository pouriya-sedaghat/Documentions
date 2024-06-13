// Extact Values

import { useRouter } from "next/router";

function Slug() {
  const router = useRouter();
  console.log(router.query);

  return <h2>Products Page</h2>;
}

export default Slug;
