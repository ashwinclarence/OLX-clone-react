import { createContext, useContext, useState } from "react";
import { ProductType } from "../Types/Types";

type ProductContextType = {
  product: ProductType | null;
  setProducts: React.Dispatch<React.SetStateAction<ProductType | null>>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [product, setProducts] = useState<ProductType | null>(null); // Set initial state to null

  return (
    <ProductContext.Provider value={{ product, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
    const context = useContext(ProductContext);
    
    if (context === undefined) {
        throw new Error("no product context");
    }

  return context;
}
