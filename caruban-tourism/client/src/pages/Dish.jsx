import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { TbWorldSearch } from "react-icons/tb";

export default function Dish() {
  const [dish, setDish] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/dishes/${id}`)
      .then((response) => response.json())
      .then((dish) => setDish(dish));
    clearTimeout();
  }, [id]);

  return (
    <main className="px-6 max-w-screen-2xl min-h-screen ">
      {dish ? (
        // page container
        <div
          className="flex flex-col w-full justify-center items-center 
        gap-6 mt-28"
        >
          {/*  */}
          {/* dish`s name */}
          <header
            className="text-white bg-zinc-800 font-bold 
            px-5 py-3 w-full"
          >
            <h1 className="text-3xl">{dish.name}</h1>
          </header>

          {/* dish` image and description conttainer */}
          <div
            className="flex flex-col gap-6 w-full
            lg:flex-row"
          >
            {/* image */}
            <div
              className="flex flex-col gap-6 
              sm:w-1/2"
            >
              <img src={dish.image} alt={dish.name} className="h-80" />
            </div>

            {/* description and button container */}
            <div
              className="flex flex-col gap-8
            sm:w-1/2"
            >
              {/* description */}
              <div
                className="gap-4
              flex flex-col"
              >
                <p className="text-justify">{dish.description}</p>
              </div>

              {/* button */}
              <div className="w-full">
                <button
                  className="w-full bg-slate-700 text-white flex justify-center items-center
                  py-3 gap-4"
                  onClick={() =>
                    window.open(`http://www.google.com/search?q=${dish.maps}`)
                  }
                >
                  <TbWorldSearch />
                  <p>Browse</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </main>
  );
}
