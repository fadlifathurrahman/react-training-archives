import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Planet() {
  const [planet, setPlanet] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/planets/1")
      .then((response) => response.json)
      .then((planet) => setPlanet(planet));
  }, []);

  return (
    <main>
      planet?(
      <>
        <h1>Main</h1>
        <p>{planet.diameter}</p>
      </>
      )
    </main>
  );
}
