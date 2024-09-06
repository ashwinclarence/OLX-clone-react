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



export type Product = {
    userID: string;
    title: string;
    description: string;
    price: number;
    location: string;
    category: Category;
    image: string;
}