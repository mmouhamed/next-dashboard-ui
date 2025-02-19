import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h1 className="flex p-10 items-center justify-center ">Homepage</h1>

      <Link href="/admin">
        <button className="justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Admin
        </button>
      </Link>
    </div>
  );
};
export default Homepage;
