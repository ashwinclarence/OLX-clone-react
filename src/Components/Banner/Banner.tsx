import olxAppBanner from "../../assets/phone-app.webp";
import appDownload from '../../assets/app-download.png'
const Banner = () => {
  return (
    <div className="w-screen bg-olx-gray my-8 ">
      <div className="container mx-auto flex justify-evenly flex-wrap items-center">
              <img src={olxAppBanner} />
              <div className="text-olx-green">
                  <h1 className="text-4xl font-extrabold mb-4">TRY THE OLX APP</h1>
                    <h4 className="text-xl">Buy, sell and find just about anything using <br /> the app on your mobile.</h4>
              </div>
              <div className="border-r-2 h-32 border-gray-500"></div>
              <div className="">
                  <h6 className="font-bold">GET YOUR APP TODAY</h6>
                  <img src={appDownload} className="w-52 mt-4" />
              </div>
      </div>
    </div>
  );
};

export default Banner;
