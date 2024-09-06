import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getDocs } from "firebase/firestore";
import { Product } from "../../Types/Types";
import { productGetRef } from "../../Firebase/FireBaseConfig";

const ProductRow = () => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined); // Correct state type

  useEffect(() => {
    async function getCollection() {
      try {
        const querySnapshot = await getDocs(productGetRef);
        const productList: Product[] = querySnapshot.docs.map((doc) => {
          console.log(doc.data());
          const data = doc.data() as Product;
          const id = doc.id; // Get the document ID
          return { ...data, id }; // Include the ID in the returned object
        });
  
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    }
  
    getCollection();
  }, [productGetRef]);

  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-4 gap-8">
        {products?.map((product) => ( // No need to explicitly type here
          <ProductCard
            key={product.id}
            name={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            place={product.location}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductRow;
