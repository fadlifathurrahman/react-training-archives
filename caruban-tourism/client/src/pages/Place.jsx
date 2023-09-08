import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { UserContext } from "../App";
import { BsTicketPerforated } from "react-icons/bs";
// import QRCode from "react-qr-code";

export default function Place() {
  const [place, setPlace] = useState();
  const [additionalImage, setAdditionalImage] = useState([]);
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [category, setCategory] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      setBookingData({
        ...bookingData,
        time: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
      });

      setCurrentTime(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/api/places/${id}`)
      .then((response) => response.json())
      .then((place) => setPlace(place))
      .then(
        fetch(`http://localhost:3000/api/places/category/${id}`)
          .then((response) => response.json())
          .then((category) => setCategory(category))
      );
    // clearTimeout();
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/places/additional-image/${id}`)
      .then((response) => response.json())
      .then((image) => setAdditionalImage(image));
    clearTimeout();
  }, [id]);

  const [bookingData, setBookingData] = useState({
    placeId: id,
    time: currentTime,
  });

  return (
    <main className="pt-24 px-6 max-w-screen-2xl">
      {place ? (
        // main container
        <section
          className="flex flex-col 
        mt-12"
        >
          {/* place`s name */}
          <header
            className="text-white bg-zinc-800 font-semibold
            px-5 py-3"
          >
            <h1
              className="text-lg
            lg:text-2xl"
            >
              {place.name}
            </h1>
          </header>

          {/* place`s category */}
          <p className="font-semibold mt-5">#{category.category}</p>

          {/* place`s image and description container*/}
          <article
            className="flex w-full flex-col
          py-5
          sm:flex-row"
          >
            {/* place image */}
            <img
              src={place.image}
              alt={place.name}
              className="
            sm:w-2/3 sm:pr-2"
            />

            {/* place description */}
            <p
              className="flex text-justify  items-center 
            sm:w-1/3"
            >
              {place.description}
            </p>
          </article>

          <header
            className="text-white bg-zinc-800 my-5
            px-5 py-3"
          >
            <h1 className="text-lg">Highlight</h1>
          </header>
          {additionalImage ? (
            <section className="flex flex-col flex-wrap justify-items-end gap-4">
              <article className="flex">
                <img
                  className="w-2/5 pr-2 hover:scale-150 hover:ml-24 hover:-mr-24"
                  src={additionalImage.image_1}
                />
                <img
                  className="w-2/5 px-2 hover:scale-150"
                  src={additionalImage.image_2}
                />
              </article>
              <article className="flex justify-end">
                <img
                  className="w-2/5 px-2 hover:scale-150"
                  src={additionalImage.image_3}
                />
                <img
                  className="w-2/5 pl-2 hover:scale-150 hover:mr-24 hover:-ml-24"
                  src={additionalImage.image_4}
                />
              </article>
            </section>
          ) : (
            <div className="flex flex-col flex-wrap justify-items-end gap-4">
              <CircularProgress />
            </div>
          )}

          <div className="">
            {/* header */}
            <header
              className="text-white bg-zinc-800 mt-10 mb-5
            px-5 py-3"
            >
              <h1 className="text-lg">Address and Map</h1>
            </header>

            {/* address and map container*/}
            <div
              className="flex w-full flex-col items-start justify-between gap-5
            sm:flex-row "
            >
              {/* place`s address */}
              <p
                className="flex gap-1 items-center text-lg w-full
              sm:w-1/3"
              >
                {place.address}
              </p>

              {/* place`s map */}
              <iframe
                src={place.maps}
                className="w-full
                sm:w-2/3"
                height="300px"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* booking */}
          {place.ticket_price === 0 ? (
            ""
          ) : (
            <div>
              <header
                className="text-white bg-zinc-800 mt-10
                px-5 py-3"
              >
                <h1 className="text-lg">Booking Ticket for {place.name}</h1>
              </header>
              {user ? (
                // booking container
                <div className="p-5 bg-slate-200 flex flex-col gap-5">
                  {/* form for amount and button */}
                  <form
                    className="flex flex-col gap-5"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const token = localStorage.getItem("token");
                      const response = await fetch(
                        `http://localhost:3000/api/auth/booking/${user.id}`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                          },
                          body: JSON.stringify(bookingData),
                        }
                      );
                      if (response.ok) {
                        alert(
                          "Thank you! Your booking data will be procesed ."
                        );
                      } else {
                        const message = await response.text();
                        alert(message);
                      }
                    }}
                  >
                    {/* ticket price */}
                    <label className="flex gap-2 items-center ">
                      <BsTicketPerforated size={24} />
                      {place.ticket_price === 0
                        ? "Free"
                        : place.ticket_price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                      <p>per person </p>
                    </label>
                    <label>
                      Amount:
                      <input
                        type="number"
                        label="Amount"
                        min="1"
                        className="w-full 
                        py-2 px-4"
                        required
                        onChange={(e) => {
                          setSubtotal(
                            parseInt(e.target.value) * place.ticket_price
                          );
                        }}
                      />
                    </label>
                    {subtotal == 0 ? (
                      ""
                    ) : (
                      <p>
                        Subtotal:{" "}
                        {subtotal.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </p>
                    )}
                    <button
                      className="w-full bg-slate-800 text-white rounded-md
                    hover:bg-slate-600
                    py-2"
                    >
                      Book
                    </button>
                  </form>
                </div>
              ) : (
                <div>{user ? "Free" : <p>login first, click here</p>}</div>
              )}
            </div>
          )}
          {/* <QRCode
            value="Bismillah"
            bgColor="#000000"
            fgColor="#FFFFFF"
            size="20%"
          /> */}
        </section>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </main>
  );
}
