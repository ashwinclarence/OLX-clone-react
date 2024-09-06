import { doc, getDoc } from "firebase/firestore";
import { ProductCardType, ProductType } from "../../Types/Types";
import { db } from "../../Firebase/FireBaseConfig";
import { useProductContext } from "../../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({
  description,
  image,
  name,
  price,
  place,
  id,
}: ProductCardType) => {

  const { setProducts } = useProductContext()
  const navigate=useNavigate()
  
  const handleProductDetailView = async (id: string | undefined) => {
    if (id) {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducts(docSnap.data() as ProductType);
          navigate('/product-view')
        } else {
          toast.error("No such document");
          console.error("No such document!");
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching product: ", error);
        toast.error("Failed to fetch product details");
      }
    } else {
      toast.error("Cannot find the product details");
      navigate("/");
    }
  };

  return (
    <div
      onClick={(e) => handleProductDetailView(id)}
      className="max-w-xs bg-white rounded-lg overflow-hidden border-2 cursor-pointer"
    >
      <div className="h-80 relative">
        <div className="rounded-full bg-white border absolute right-2 top-2 h-8 w-8 flex items-center justify-center ">
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className="h-44 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img src={image} alt={name} className="object-contain h-full" />
        </div>
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            &#8377; {price.toLocaleString()}
          </h1>
          <h6 className="text-gray-600 mb-1">{name}</h6>
          <p className="text-gray-500 text-sm truncate">{description}</p>
          <div className="capitalize flex justify-between text-gray-500 text-sm mt-2">
            <p>{place}</p>
            <p>today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
