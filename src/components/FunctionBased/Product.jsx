

const Product = (product) => {
    const { img, name, desc, price } = { ...product };
    return (
        <div className="text-lg flex items-center gap-3 h-[10rem]">
            <img src={img} alt={name} className="rounded-xl h-full w-auto" />
            <div className="flex flex-col  justify-around h-full">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p>Description: {desc}</p>
                <p>Price : {price}&#8377;</p>
            </div>
        </div>
    )
}

export default Product
