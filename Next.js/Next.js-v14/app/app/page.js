import { revalidateTag } from "next/cache";

// Method One

// export async function myAction() {
//   "use server";

//   // ...
// }

// Method Two

// import { myAction } from "@/server-actions/myAction";

async function Home() {
  // Data Fetching

  // const response = await fetch("http://localhost:5000/users");
  // const data = await response.json();

  // console.log(data);

  // Cache or Data Caching

  // const response = await fetch("http://localhost:5000/users");
  // const data = await response.json();

  // console.log(data);

  // no-store

  // const response = await fetch("http://localhost:5000/users", {
  //   cache: "no-store",
  // });
  // const data = await response.json();

  // console.log(data);

  // no-cache

  // const response = await fetch("http://localhost:5000/users", {
  //   cache: "no-cache",
  // });
  // const data = await response.json();

  // server Action

  // Method Three

  // async function myAction() {
  //   "use server";

  //   // ...
  // }

  // revalidate

  // const response = await fetch("http://localhost:5000/users", {
  //   cache: "no-cache",
  //   next: { revalidate: 5 },
  // });

  // const data = await response.json();

  // console.log(data);

  // revalidate tag

  async function myAction(e) {
    "use server";

    const username = e.get("username");

    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify({ username }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);

    revalidateTag("users");
  }

  const response = await fetch("http://localhost:5000/users", {
    cache: "no-cache",
    next: { tags: ["users"] },
  });
  const data = await response.json();

  console.log(data);

  return (
    <>
      <h2>Home Page</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id.toString()}>{item.username}</li>
        ))}
      </ul>

      <form action={myAction} className="mt-2">
        <h2>New User</h2>
        <div>
          <label htmlFor="username">Username :</label> <br />
          <input
            type="text"
            name="username"
            placeholder="Enter Your username"
            id="username"
            className="bg-transparent border p-1"
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-2 px-4 rounded"
        >
          Add New User
        </button>
      </form>
    </>
  );
}

export default Home;
