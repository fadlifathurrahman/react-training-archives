import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { BsTicketPerforated } from "react-icons/bs";
import batik from "/batik.png";

export default function AllPlaces() {
  const [showByCategory, setShowByCategory] = useState("");
  const [keyword, setKeyword] = useState("");

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/places")
      .then((response) => response.json())
      .then((places) => setPlaces(places));
  }, []);

  return (
    <main className="">
      {/* search bar */}
      <header
        className="bg-gray-700 text-white text-sm 
        flex flex-warp justify-center items-center
        gap-10 py-5 mt-24"
      >
        <label
          className="flex flex-col flex-wrap items-center 
        gap-2 text-xs max-w-sm
        md:flex-row"
        >
          Category:
          <select
            value={showByCategory}
            onChange={(e) => setShowByCategory(e.target.value)}
            className="text-gray-950 px-2 py-2"
          >
            <option value="">All</option>
            <option value="1">Heritage</option>
            <option value="2">Religion</option>
            <option value="3">Nature</option>
            <option value="4">Public</option>
            <option value="5">Shopping</option>
          </select>
        </label>
        <label
          className="flex flex-col items-center gap-2 text-xs
        md:flex-row"
        >
          Search :
          <input
            type="text"
            className="bg-white text-slate-950 px-2 py-2"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Insert place`s name"
          />
        </label>
      </header>

      {places ? (
        <div
          className="max-w-screen-xl text-xs
           py-4 gap-y-6
          flex flex-wrap justify-evenly items-center"
        >
          {/* iteration and filter for places */}
          {places
            .filter(
              (place) =>
                place.name.toLowerCase().includes(keyword) &&
                place.category_id.toString().includes(showByCategory)
            )
            .map((place) => (
              //
              // place`s container
              <div key={place.id}>
                {/*  */}
                {/* place card header */}
                <div className="flex items-center">
                  {/*  */}
                  {/* place`s name */}
                  <div
                    className="bg-slate-800 text-white
                    p-3 z-10 relative
                    h-fit w-52 flex text-center justify-center 
                    rounded-bl-2xl rounded-tr-2xl"
                  >
                    {place.name}
                  </div>

                  {/* batik */}
                  <img
                    src={batik}
                    // xl:h-36 xl:w-52 xl0:-ml-2
                    className="relative 
                    w-40 -ml-10"
                  />
                </div>

                {/* place card body */}
                <div
                  className="bg-slate-600 p-6 -mt-10 ml-6 w-60
                gap-4 flex flex-col items-center 
                rounded-b-2xl rounded-tr-2xl"
                >
                  {/* place`s image */}
                  {/* h-48 */}
                  <img
                    src={place.image}
                    className="h-28 
                  sm:h-32"
                  />

                  {/* place`s detail and price */}
                  <div className="flex justify-between items-center w-full">
                    <p className="text-white">#{place.category}</p>
                    <p
                      className="text-white flex gap-2 
                    items-center "
                    >
                      <BsTicketPerforated size={24} />
                      {place.ticket_price === 0
                        ? "Free"
                        : place.ticket_price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                    </p>
                  </div>
                  <Link to={`/places/${place.id}`}>
                    <button
                      className="bg-red-700 text-white
                      py-1 px-5"
                    >
                      Detail
                    </button>
                  </Link>
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
