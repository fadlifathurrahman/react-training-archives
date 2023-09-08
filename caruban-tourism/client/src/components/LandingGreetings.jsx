import dance from "/mask-dance.png";
import batik from "/batik-above.png";

export default function LandingGreetings() {
  return (
    <div className="absolute flex justify-center items-center w-full">
      {/* mask dance */}
      {/* h-80 */}
      <img
        src={dance}
        className="w-1/2 -mr-36 -mb-40 z-10
      lg:w-1/4"
      />

      {/* red line top*/}
      <div className="absolute bg-red-800/80 w-1/2 h-1/5 -mt-72 left-0"></div>

      {/* red line bottom*/}
      <div className="absolute bg-red-800/80 w-1/2 h-1/5 -mb-72 right-0"></div>

      {/* text */}
      <div
        className=" text-white bg-slate-800/60 
      flex flex-col justify-center
      text-sm 
      w-max h-1/4 px-20 py-16
      text-center
      lg:text-xl "
      >
        <p>Explore heritage places &</p>
        <p className="mt-5">enjoy delightful dishes</p>
        <p className="mt-5">
          in <span className="italic font-bold font-serif">Cirebon!</span>
        </p>
      </div>

      {/* batik ornament */}
      <img
        src={batik}
        className="w-1/2 -mt-80 -ml-52 z-10
      lg:w-1/3"
      />
    </div>
  );
}
