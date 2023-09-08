const produts = [
  {
    id: 1,
    name: "Samsung Galaxy A23",
    price: 2000000,
  },
  {
    id: 2,
    name: "Samsung Galaxy A24",
    price: 3000000,
  },
  {
    id: 3,
    name: "Samsung Galaxy A25",
    price: 4000000,
  },
];

export default function App() {
  return (
    <div className="group">
      <h1
        className="text-center group-hover:bg-yellow-300 
        group-hover:text-green-700 p-2 bg-red-300
        text-blue-700 text-xl font-bold"
      >
        Hello world
      </h1>
      <button>Ubah warna</button>
      <div className="flex flex-col sm:flex-row gap-2">
        {produts.map((product) => (
          <div key={product.id} className="bg-gray-200 rounded-3xl p-8">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <button className="bg-blue-500 text-white px-6 h-10 rounded-full">
              Beli
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
