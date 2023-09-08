import Product from "./components/Product";
import Header from "./components/Header";
import "../src/index.css";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    image:
      "https://www.apple.com/v/home/bb/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_small.jpg",
    price: 30000000,
  },
  {
    id: 2,
    name: "MacBook Air 15",
    image:
      "https://www.apple.com/v/home/bb/images/heroes/macbook-air-15/hero_macbook_air_15__x63n8tqcpo2u_small.jpg",
    price: 40000000,
  },
  {
    id: 3,
    name: "Apple Vision Pro",
    image:
      "https://www.apple.com/v/home/bb/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_small.jpg",
    price: 50000000,
  },
  {
    id: 4,
    name: "Apple Watch",
    image:
      "https://www.apple.com/v/home/bb/images/promos/apple-watch-series-8/promo_apple_watch_series_8_spring__d9hfvufh7hyu_small.jpg",
    price: 2000000,
  },
  {
    id: 5,
    name: "iPad Pro",
    image:
      "https://www.apple.com/v/home/bb/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_small.jpg",
    price: 10000000,
  },
];

export default function App() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [order, setOrder] = useState("desc");
  const [page, setPage] = useState(1);

  return (
    <>
      <Header />
      <label>
        Min price:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </label>
      <label>
        Max price:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value || Infinity)}
        />
      </label>
      <label>
        Search
        <input
          type="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </label>
      <label>
        Sort by
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>
      <label>
        Order by
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <div className="products-container">
        {products
          .sort((a, b) => (order === "desc" ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy]))
          .filter(
            (product, i) =>
              product.name.toLowerCase().includes(keyword) &&
              product.price >= minPrice &&
              product.price <= maxPrice &&
              i < 3 * page && 
              i > 3 * page - 3
          )
          .map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
      <div>
            <button onClick={() => setPage(page - 1)} disabled={page===1}>Previos</button>
            {page}
            <button onClick={() => setPage(page - 1)} disabled={page===products.length}>Ses</button>
      </div>
    </>
  );
}
