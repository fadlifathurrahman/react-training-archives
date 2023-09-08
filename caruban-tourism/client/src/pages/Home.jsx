import { Link } from "react-router-dom";
import Landing from "../components/Landing";
import batikDown from "/batik-under.png";
import batikUp from "/batik-above.png";
import gate from "/gate.png";
import dish from "/dish.png";

export default function Home() {
  return (
    <main className="max-w-screen-2xl">
      {/* video and text components */}
      <Landing />

      {/* 3 batik ornament*/}
      <div
        className="flex absolute w-full -mt-32 items-center z-10
      lg:-mt-20"
      >
        <img src={batikDown} className="w-1/3" />
        <img src={batikUp} className="w-1/3" />
        <img src={batikDown} className="w-1/3" />
      </div>

      {/* category features dontainer */}
      <div
        className="min-h-screen flex flex-col flex-wrap items-center 
      text-xs gap-10
      lg:flex-row lg:gap-0"
      >
        {/* destination */}
        <article className="w-1/2 flex flex-col items-center">
          <p className="text-center italic">
            Get wonderful experience by explores <br /> historical destination
            in Cirebon!
          </p>

          {/* wadasan gate */}
          <img
            src={gate}
            className="h-1/4
          lg:h-40"
          />

          {/* direct to all place button */}
          <Link
            to={`/places/all`}
            className="bg-red-700 text-white text-center py-2 w-1/2"
          >
            <button>show more...</button>
          </Link>
        </article>

        {/* dishes */}
        <article className="w-1/2 flex flex-col items-center ">
          <p className="text-center italic">
            Taste the originally and speciality <br />
            various cuisine in Cirebon!
          </p>

          {/* "sega jamblang" */}
          <img
            src={dish}
            className="h-1/4
          lg:h-40"
          />

          {/* direct to all disxh button */}
          <Link
            to={`/dishes/all`}
            className="bg-red-700 text-white text-sm text-center py-2 w-1/2"
          >
            <button>show more...</button>
          </Link>
        </article>
      </div>
    </main>
  );
}
