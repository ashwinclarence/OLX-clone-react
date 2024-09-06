import { createContext, useContext, useState } from "react";
import { ProductType } from "../Types/Types";

type ProductContextType = {
  product: ProductType | null | undefined;
  setProducts: React.Dispatch<React.SetStateAction<ProductType | null>>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [product, setProducts] = useState<ProductType | null>(null);

  return (
    <ProductContext.Provider value={{ product, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export function ProductDetailContext() {
  const context = useContext(ProductContext);

  if (context === undefined || context === null) {
    throw new Error("Context data is not available");
  }

  return context;
}
