import loginImage from "../../assets/loginEntryPointPost.webp";
import googleIcon from "../../assets/icons8-google.svg";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase/FireBaseConfig";
const Login = () => {

  const navigate = useNavigate();

  // function to handle google login
  const handleGoogleLogin = async() => {
    try {

      const userCred = await signInWithPopup(auth, provider);

      if (userCred) {
        console.log(userCred)
        navigate('/')
      }
      
    } catch (err) {
      console.log("Error on google auth firebase ",err)
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col border-2 gap-5 p-4 rounded items-center w-96">
        <img src={loginImage} className="w-36" />
        <h2 className="font-semibold text-olx-green text-center">
          helps us to one of the safest place <br /> to buy and sell
        </h2>
        <div className="text-sm flex justify-center gap-4 items-center ">
          <i className="fa-solid fa-circle hover:text-cyan-400 text-gray-400 ease-in-out duration-200"></i>
          <i className="fa-solid fa-circle hover:text-cyan-400 text-gray-400 ease-in-out duration-200"></i>
          <i className="fa-solid fa-circle hover:text-cyan-400 text-gray-400 ease-in-out duration-200"></i>
          
        </div>
        <button className="border-2 w-full h-10 hover:border-4 border-black duration-75  ps-4 font-semibold">
          <i className="fa-solid fa-mobile-screen"></i> Continue with Phone
        </button>
        <button className="border w-full h-10 hover:bg-blue-100 ps-4 font-semibold flex justify-center items-center ease-in-out duration-200" onClick={handleGoogleLogin}>
          <img src={googleIcon} className="w-8" /> Continue with google
        </button>
        <h2 className="font-semibold">OR</h2>
        <Link to="/signup" className="underline font-semibold ease-in-out duration-200">
          Login with Email
        </Link>

        <div className="text-center text-sm mt-10">
          <p>All your personal details are safe with us.</p>
          <p>
            If you continue, you are accepting{" "}
            <span className="text-blue-600">
              OLX Terms and Conditions and Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
