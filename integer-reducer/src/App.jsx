import { useReducer, useState } from "react";

// function productsReducer dengan parameter (nilai sebelumnya, action)
function productsReducer(products, action) {
  switch (action.type) {
    case "added": {
      return [
        ...products,
        {
          id: action.id,
          name: "Chino",
          price: 80000,
        },
      ];
    }
    case "edited": {
      return products.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            price: 35000,
          };
        } else {
          return product;
        }
      });
    }
    case "lastDeleted": {
      return products.slice(0, -1);
    }
    case "fisrtDeleted": {
      return products.slice(1);
    }
    case "deleted": {
      return products.filter((product) => product.id !== action.id);
    }
  }
}
export default function App() {
  const [products, dispatch] = useReducer(productsReducer, [
    {
      id: 1,
      name: "T shirt",
      price: 28000,
    },
  ]);
  const [id, setId] = useState(products.length);

  return (
    <main>
      <button
        onClick={() => (document.querySelector("html").className = "dark")}
      >
        Ubah tema ke gelap
      </button>
      <button onClick={() => (document.querySelector("html").className = "")}>
        Ubah tema ke terang
      </button>
      {/* {products.map((product) => (
        <div key={product.idq}>
          <h1>
            ({product.id}){product.name}
          </h1>
          <p>{product.price}</p>
          <button onClick={dispatch({ type: "deleted" })}>Hapus</button>
        </div>
      ))} */}
      <button
        onClick={() => {
          dispatch({ type: "added", id: id });
          setId(id + 1);
        }}
      >
        Tambah
      </button>
      <input type="number" />
      <button
        onClick={() => {
          dispatch({
            type: "edited",
            id: parseInt(document.querySelector("#edit-id").value),
          });
        }}
      >
        Edit
      </button>
      <button>Hapus</button>
    </main>
  );
}
