import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen ">
      <h1 className="font-extrabold text-8xl text-olx-green">404</h1>
      <div className="font-bold">
        Oops!!! The page you are looking for is not found
      </div>
      <Link to='/' className="bg-olx-green p-2 text-white rounded">
        Back to home
      </Link>
    </div>
  );
};

export default PageNotFound;
