export default function Product({name, image, price}) {
    return (
        <div className="product">
            <img src={image} alt={name} />
            <div>{name}</div>
            <div>{price.toLocaleString("id-ID")}</div>
            <button>Beli</button>
        </div>
    )
}