import olxLogo from "../../assets/OLX_green_logo.svg";

const Navbar = () => {
  return (
    <div className="p-4 bg-olx-gray flex justify-between">
      <div className="overflow-hidden">
        <img src={olxLogo} className="w-14" />
      </div>
      {/* location bar */}
      <div className="border-2 border-olx-green flex items-center justify-between p-2 gap-3 rounded">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="outline-none border-none bg-transparent"
          placeholder="India"
        />
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      {/* search bar */}
      <div className="flex items-center justify-center">
        <input
          type="text"
          className="outline-cyan-500 border-olx-green border-2 rounded bg-transparent w-[40rem] p-2"
          placeholder="Find Cars, Mobile Phones and more ..."
        />
        <i className="fa-solid fa-magnifying-glass bg-olx-green text-white h-full p-2 flex items-center rounded"></i>
      </div>
    </div>
  );
};

export default Navbar;
