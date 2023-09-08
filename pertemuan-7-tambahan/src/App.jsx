import { useState } from "react";

export default function App() {
  const [coffee, useCoffee] = useState([
    {
      id: 1,
      name: "Avogato",
      price: 15000,
    },
    {
      id: 2,
      name: "Avogato",
      price: 15000,
    },
  ]);

  const [newCoffies, setNewCoffies] = useState({
    id: undefined,
    name: undefined,
    price: undefined,
  });

  // return untuk mengembalikan jsx
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nama</th>
            <th>Diameter</th>
          </tr>
        </thead>
        <tbody>
          {coffee.map((coffee, i) => (
            <tr key={i.id}>
              <td>{coffee.id}</td>
              <td>{coffee.name}</td>
              <td>{coffee.price}</td>
              <td>
                <button>Edit</button>
                <button>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form >
        <label>
          Nama:
          <input type="text" onChange={(e)=> setNewCoffies(...newCoffies, newCoffies.name= e.target.value)}/>
        </label>
        <label>
          Diameter:
          {/* <input type="text" onChange={(e)=>}/> */}
        </label>
        <button>Tambah</button>
      </form>
    </>
  );
}
