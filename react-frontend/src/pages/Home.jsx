import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("/api/planets")
      .then((response) => response.json())
      .then((planets) => setPlanets(planets));
  }, []);
  return (
    <div>
      {planets.map((planet) => (
        <div key={planet.id}>
          <h3>{planet.name}</h3>
          <p>{planet.name}</p>
          <Link to={`planet`}></Link>
        </div>
      ))}
    </div>
  );
}
