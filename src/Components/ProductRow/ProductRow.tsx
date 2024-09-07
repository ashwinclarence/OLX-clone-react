import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getDocs } from "firebase/firestore";
import { ProductType } from "../../Types/Types";
import { productGetRef } from "../../Firebase/FireBaseConfig";

const ProductRow = () => {
  const [products, setProducts] = useState<ProductType[] | undefined>(
    undefined
  ); 

  useEffect(() => {
    async function getCollection() {
      try {
        const querySnapshot = await getDocs(productGetRef);
        const productList: ProductType[] = querySnapshot.docs.map((doc) => {
          const data = doc.data() as ProductType;
          const id = doc.id; 
          return { ...data, id }; 
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
        {products?.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              location={product.location}
              id={product.id}
              category={product.category}
              userID={product.userID}
              date={product.date}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProductRow;
