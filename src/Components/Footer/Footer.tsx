import olx from "../../assets/olx.svg";
import careWale from "../../assets/carwale.svg";
import carTradeTech from "../../assets/cartrade_tech.svg";
import carTrade from "../../assets/cartrade.svg";
import bikeWale from "../../assets/bikewale.svg";
import mobilityOutlook from "../../assets/mobility.svg";
const Footer = () => {
  return (
    <>
      <div className="">
        
      </div>
    <div className=" flex flex-col bg-olx-green text-white  py-8 gap-4">
      <div className="container mx-auto flex items-center justify-around">
        <div className="cursor-pointer">
          <img src={carTradeTech} className="w-40" />
        </div>
        <div className="border-r-2 h-28"></div>
        <div className="cursor-pointer">
          <img src={olx} className="w-10" />
        </div>
        <div className="cursor-pointer">
          <img src={careWale} className="w-24" />
        </div>
        <div className="cursor-pointer">
          <img src={bikeWale} className="w-24" />
        </div>
        <div className="cursor-pointer">
          <img src={carTrade} className="w-24" />
        </div>
        <div className="cursor-pointer">
          <img src={mobilityOutlook} className="w-24" />
        </div>
      </div>
      <div className="flex justify-around">
        <p className="cursor-pointer">Help. SiteMap</p>
        <p>All rights reserved &copy; 2006-2024 OLX</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
