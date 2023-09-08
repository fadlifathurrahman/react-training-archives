import { useEffect } from "react";
import { useState } from "react";

export default function Login() {
  const [galaxies, setGalaxies] = useState([]);

  useEffect(() => {
    fetch("/api/galaxies")
      .then((response) => response.json())
      .then((galaxies) => setGalaxies(galaxies));
  }, []);
  return (
    <div>
      {galaxies.map((galaxy) => (
        <div key={galaxy.id}>
          <h3>{galaxy.name}</h3>\<p>{galaxy.name}</p>
        </div>
      ))}
    </div>
  );
}
