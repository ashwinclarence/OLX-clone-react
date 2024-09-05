import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import LoginPage from "./Pages/LoginPage";
import userAuth from "./Context/userContext";
import { FadeLoader } from "react-spinners";
const App = () => {
  const { loading } = userAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader color="#002F34" />
      </div>
    )
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
