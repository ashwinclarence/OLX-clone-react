import olxLogo from "../../assets/olx.svg";
import map from "../../assets/map.png";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { useProductContext } from "../../Context/ProductContext";

const ProductView = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const {product}=useProductContext()


  useEffect(() => {
    if (product) {
      setLoading(false)
    }
    
  },[product])

  
  if (loading) {
    return <Loading transparent={false} />;
  }


  const calculatedDate = new Date(product?.date);

  return (
    <div className=" py-10 bg-olx-gray">
      <div className=" container mx-auto flex justify-around gap-4">
        {/* left side */}
        <div className="flex flex-col w-[70vw] ">
          <div className="border bg-black rounded-md h-[30rem] flex justify-center relative">
            <i className="fa-solid fa-chevron-left text-white text-2xl absolute left-4 top-1/2 cursor-pointer"></i>
            <img
              src={product?.image}
              alt=""
              className="object-contain w-full"
            />
            <img
              src={olxLogo}
              className="absolute right-2 bottom-2 z-10 w-12 "
            />
            <i className="fa-solid fa-chevron-right text-white text-2xl absolute right-4 top-1/2 cursor-pointer"></i>
          </div>
          <div className="bg-white border rounded border-gray-500 mt-4 p-2 flex flex-col gap-4">
            <h2 className="text-lg font-bold">Details</h2>
            <p> {product?.title}</p>
            <hr />
            <h2 className="text-lg font-bold">Description</h2>
            <p>{product?.description}</p>
          </div>
        </div>
        {/* right side */}
        <div>
          <div className="border border-gray-500 rounded-md w-[30vw] p-4 flex flex-col gap-4 bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">&#8377; {product?.price}</h2>
              <div className=" flex gap-4">
                <i className="fa-solid fa-share-nodes text-2xl cursor-pointer"></i>
                <i className="fa-regular fa-heart text-2xl cursor-pointer"></i>
              </div>
            </div>
            <h2>{product?.title}</h2>
            <div className="flex justify-between text-sm">
              <p>{product?.category}</p>
              <p>{calculatedDate.toLocaleDateString()}</p>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md w-[30vw] p-4 flex flex-col gap-4 bg-white mt-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{product?.userID}</h2>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <button className="border-2 w-full rounded border-black p-2 hover:border-4">
              Chat with seller
            </button>
            <div className="flex justify-center text-sm">
              <p className="text-blue-400">show number</p>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md w-[30vw] p-4  bg-white  mt-4">
            <h2 className="text-sm">{product?.location}</h2>
          </div>
          <div className="border border-gray-500 rounded-md w-[30vw] p-4 flex flex-col gap-4 bg-white mt-4">
            <img src={map} alt="" className="" />
          </div>
          <div className="flex justify-between text-sm font-semibold    ">
            <p>AD ID 1780428239</p>
            <p>REPORT THIS AD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
