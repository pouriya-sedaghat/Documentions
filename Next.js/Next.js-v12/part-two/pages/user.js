// getServerSideProps

function User({ user }) {
  return <h2>{user.username}</h2>;
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  console.log(req, res);

  return {
    props: { user: { username: "Pouriya Sedaghat" } },
  };
}

export default User;
