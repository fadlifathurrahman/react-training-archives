import { useState } from "react";
import "./Place.css";

export default function Place(props) {
  const [showMore, setShowMore] = useState(false);
  const [liked, setLiked] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <>
      <div id="body">
        <div id="card-container">
          <h1>{props.nama}</h1>
          <img src={props.src} />
          <div id="button-container">
            <button onClick={handleLike} className={liked ? "like" : "liked"}>
              {liked ? "Batal Suka" : "Suka"}
            </button>
            <button className="show-more" onClick={handleMoreClick}>
              {showMore ? "Sembunyikan" : "Tampilkan"}
            </button>
          </div>
          {showMore && <p>{props.desc}</p>}
        </div>
      </div>
    </>
  );
}
