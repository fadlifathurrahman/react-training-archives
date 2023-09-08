import { Link } from "react-router-dom";
import batik from "/batik-under.png";
import shrimp from "/shrimp.png";

export default function HeaderLogo() {
  return (
    <div
      className="flex text-xs 
    lg:text-lg"
    >
      {/* shrimp and text */}
      <div className="flex flex-col pt-3">
        <Link to="/">
          <div className="flex flex-row items-center -mt-8">
            <img
              src={shrimp}
              className="-rotate-12
           h-24 -mr-8"
            />
            <p className=" font-serif">aruban</p>
          </div>
        </Link>
        <div className="flex justify-center items-center">
          <p className="font-serif -mt-12 ml-20">
            <Link to="/">Tourism</Link>
          </p>
        </div>
      </div>

      {/* batik container */}
      {/* h-24 w-40 mt-24 -ml-14 */}
      <img
        src={batik}
        className="-rotate-12 w-1/4 absolute
        ml-24 mt-12
        md:w-1/6 md:mt-8
        lg:w-1/12 lg:ml-28 lg:mt-11
       "
      />
    </div>
  );
}
