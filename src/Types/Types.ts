export type Category =
  | "Cars"
  | "Properties"
  | "Mobiles"
  | "Jobs"
  | "Bikes"
  | "Electronics & Appliances"
  | "Furniture"
  | "Fashion"
  | "Books, Sports & Hobbies"
  | "Pets"
  | "Services";



export type ProductType = {
    id?: string;
    userID: string;
    title: string;
    description: string;
    price: number;
    location: string;
    category: Category;
    image: string;
}

export type ProductCardType = {
  name: string;
  description: string;
  image: string;
  price: number;
  place: string;
  id: string | undefined;
};