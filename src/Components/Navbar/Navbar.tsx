import { Link } from "react-router-dom";
import olxLogo from "../../assets/OLX_green_logo.svg";
import userAuth from "../../Context/userContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/FireBaseConfig";

const Navbar = () => {
  const { user } = userAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out");
      })
      .catch((error) => {
        console.log("Error on logout call", error);
      });
  };
  return (
    <div className="p-4 bg-olx-gray flex justify-between items-center sticky top-0 w-full z-50">
      <Link to="/" className="overflow-hidden">
        <img src={olxLogo} className="w-14 cursor-pointer" />
      </Link>
      {/* location bar */}
      <div className="border-2 border-olx-green flex items-center justify-between p-2 gap-3 rounded bg-white">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="outline-none border-none bg-transparent"
          placeholder="India"
        />
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      {/* search bar */}
      <div className="flex items-center justify-center ">
        <input
          type="text"
          className="outline-cyan-500 border-olx-green border-2 rounded bg-transparent w-[40rem] p-2 h-10 bg-white"
          placeholder="Find Cars, Mobile Phones and more ..."
        />
        <i className="fa-solid fa-magnifying-glass bg-olx-green text-white p-2 flex items-center rounded h-10"></i>
      </div>
      {/*  */}
      <h2 className="text-lg font-semibold">
        English <i className="fa-solid fa-chevron-down "></i>
      </h2>
      {user ? (
        <button className="flex gap-4 items-center" onClick={handleLogout}>
          <b>{ user.name}</b>
          <i className="fa-solid fa-arrow-right-from-bracket text-xl font-semibold"></i>
        </button>
      ) : (
        <Link to="/login" className="text-xl font-semibold">
          login
        </Link>
      )}

      <button className="border-4 h-10 w-20 rounded-2xl  border-t-cyan-400 border-r-blue-500 border-l-yellow-300 border-b-yellow-300 bg-white font-bold text-olx-green shadow-xl ">
        <i className="fa-solid fa-plus"></i> SELL
      </button>
    </div>
  );
};

export default Navbar;
