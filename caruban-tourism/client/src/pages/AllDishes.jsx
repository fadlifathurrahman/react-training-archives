import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import batik from "/batik-reverse.png";

export default function AllDishes() {
  const [keyword, setKeyword] = useState("");

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/dishes")
      .then((response) => response.json())
      .then((dishes) => setDishes(dishes));
  }, []);

  return (
    <main className="max-w-screen-xl">
      <header
        className="bg-gray-700 text-white text-sm flex justify-center
      py-5 mt-24"
      >
        <label className="flex items-center gap-2">
          Search :
          <input
            type="text"
            className="bg-white text-slate-950 px-2 py-2"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Insert dish`s name"
          />
        </label>
      </header>

      {dishes ? (
        // dish`s card container
        <div
          className="max-w-screen-xl text-xs
           py-4 gap-y-6
          flex flex-wrap justify-evenly items-center"
        >
          {/* iteration and filter for dishes */}
          {dishes
            .filter((dish) =>
              dish.name.toLowerCase().includes(keyword.toLowerCase())
            )
            .map((dish) => (
              // dish`s container
              <div key={dish.id}>
                {/* dish card header */}
                <div className="flex items-center mb-5">
                  {/* batik */}
                  <img
                    src={batik}
                    className="relative 
                    h-24 w-32 -mr-10"
                  />

                  {/* dish`s name */}
                  <div
                    className="bg-red-900 text-white 
                    p-3 z-10 relative
                    h-fit w-full flex text-center justify-center
                    rounded-br-2xl rounded-tl-2xl"
                  >
                    &quot;{dish.name}&quot;
                  </div>
                </div>

                {/* dish card body */}
                <div
                  className="bg-orange-300 p-6 -mt-14 ml-6 w-fit
                gap-4 flex flex-col items-center 
                rounded-bl-2xl rounded-tr-2xl"
                >
                  {/* dish`s image */}
                  <img src={dish.image} className="h-28 w-40" />

                  {/* dish`s detail and price */}
                  <div className="flex justify-center items-center w-full">
                    <Link to={`/dishes/${dish.id}`}>
                      <button className="bg-red-900 text-white w-32 py-2">
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={210}
          height={118}
        />
      )}
    </main>
  );
}
