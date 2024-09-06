import ProductCard from '../ProductCard/ProductCard'

let products = [
    {
      name: "Samsung Galaxy S21",
      description: "Experience the future with the latest Samsung flagship.",
      price: 75000,
      image: "https://arcticfox.com/cdn/shop/files/RedMousecopy2.png?v=1720679632&width=360"
    },
    {
      name: "Apple MacBook Pro",
      description: "A powerhouse laptop for professionals and creators.",
      price: 195000,
      image: "https://arcticfox.com/cdn/shop/files/RedMousecopy2.png?v=1720679632&width=360"
    },
    {
      name: "Sony WH-1000XM4 Headphones",
      description: "Industry-leading noise-canceling headphones for immersive sound.",
      price: 25000,
      image: "https://arcticfox.com/cdn/shop/files/RedMousecopy2.png?v=1720679632&width=360"
    },
    {
      name: "Dell XPS 13",
      description: "The perfect ultrabook with sleek design and power-packed performance.",
      price: 98000,
      image: "https://arcticfox.com/cdn/shop/files/RedMousecopy2.png?v=1720679632&width=360"
    },
    {
      name: "PlayStation 5",
      description: "Next-gen gaming console for an immersive gaming experience.",
      price: 49900,
      image: "https://arcticfox.com/cdn/shop/files/RedMousecopy2.png?v=1720679632&width=360"
    },
    {
      name: "Bose SoundLink Bluetooth Speaker",
      description: "Portable Bluetooth speaker with incredible sound quality.",
      price: 12000,
      image: "https://arcticfox.com/cdn/shop/files/RedMousecopy2.png?v=1720679632&width=360"
    },
    {
      name: "Fitbit Charge 5",
      description: "Advanced fitness and health tracker with built-in GPS.",
      price: 14999,
      image: "https://arcticfox.com/cdn/shop/files/RedMousecopy2.png?v=1720679632&width=360"
    },
    {
      name: "GoPro HERO 9",
      description: "Action camera with 5K video and 20MP photos.",
      price: 37000,
      image: "https://arcticfox.com/cdn/shop/files/RedMousecopy2.png?v=1720679632&width=360"
    },
    {
      name: "Apple Watch Series 7",
      description: "The ultimate wearable for health, fitness, and connectivity.",
      price: 45000,
      image: "https://arcticfox.com/cdn/shop/files/RedMousecopy2.png?v=1720679632&width=360"
    },
    {
      name: "Amazon Echo Dot (4th Gen)",
      description: "Smart speaker with Alexa, perfect for a smart home experience.",
      price: 3499,
      image: "https://arcticfox.com/cdn/shop/files/RedMousecopy2.png?v=1720679632&width=360"
    }
  ];
  
  

const ProductRow = () => {
  return (
      <div className="container mx-auto my-20">
          <div className='grid grid-cols-4 gap-8'>
          {products.map((product,index) => (
          <ProductCard key={index} name={product.name} description={product.description} image={product.image} price={product.price}/>
      ))}
    </div>
    </div>
  )
}

export default ProductRow
