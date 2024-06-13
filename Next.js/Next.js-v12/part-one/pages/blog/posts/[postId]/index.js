import { useRouter } from "next/router";

function SinglePost() {
  const router = useRouter();
  console.log(router.query);

  return <h2>SinglePost Page</h2>;
}

export default SinglePost;
