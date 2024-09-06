import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import LoginPage from "./Pages/LoginPage";
import userAuth from "./Context/userContext";
import ProductDetailPage from "./Pages/ProductDetailPage";
import SellProductPage from "./Pages/SellProductPage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Loading from "./Components/Loading/Loading";
const App = () => {
  const { loading } = userAuth();

  if (loading) {
    return (
      <Loading/>
    )
  }
  return (
    <>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product-view/:id" element={<ProductDetailPage />} />
        <Route path="/sell" element={<SellProductPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
