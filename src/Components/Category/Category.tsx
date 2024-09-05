const Category = () => {
  return (
    <div className="my-2 border-b border-t shadow-inner py-2">
      <ul className="capitalize flex gap-4 container mx-auto text-sm  ">
        <li className="uppercase font-semibold cursor-pointer w-32">ALL CATEGORY <i className="fa-solid fa-chevron-down"></i></li>
        <li className="cursor-pointer">cars</li>
        <li className="cursor-pointer">motorcycles</li>
        <li className="cursor-pointer">mobile phones</li>
        <li className="cursor-pointer">For Sale:House & Apartments</li>
        <li className="cursor-pointer">Scooter</li>
        <li className="cursor-pointer">Commercial and other vehicles</li>
        <li className="cursor-pointer">For Rent: Houses & Apartments</li>
      </ul>
    </div>
  );
};

export default Category;
