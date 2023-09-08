import lamp from "/lamp.png";
import townHall from "/town-hall.png";

export default function Footer() {
  return (
    <footer
      className="bg-slate-800 text-white text-xs bottom-0
    "
    >
      <section
        className="flex justify-center items-end h-12 max-w-screen-2xl 
      mt-24"
      >
        {/* 2 lamp in left */}
        <div className="flex">
          {/* h-56 */}
          <img
            src={lamp}
            className="h-0 bottom-0 
          md:h-40"
          />
          <img
            src={lamp}
            className="h-20 bottom-0
          md:h-36"
          />
        </div>

        <div className="flex flex-col gap-3 items-center bottom-0">
          <img src={townHall} className="w-40 " />
          <p className="mb-3">&copy; 2023 By Fathur Arrahman</p>
        </div>

        {/* 2 lamp in left */}
        <div className="flex">
          <img
            src={lamp}
            className="h-0 bottom-0
          md:h-36"
          />
          <img
            src={lamp}
            className="h-20 bottom-0
          md:h-40"
          />
        </div>
      </section>
    </footer>
  );
}
