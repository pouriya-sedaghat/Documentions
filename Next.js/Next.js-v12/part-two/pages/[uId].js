function User({ user }) {
  return <h2>{user.id}</h2>;
}

export async function getServerSideProps({ req, res, params: { uId } }) {
  return {
    props: { user: { id: uId } },
  };
}

export default User;
