import Products from "../../apis/products";
import Product from "./Product";



const Listing = () => <div className="p-5 flex flex-col gap-5">
    <h1 className="text-5xl font-bold my-5">Listing in Function based components</h1>
    <div className="grid grid-cols-1 items-center gap-10 w-full">{Products.map((product, i) => <Product {...product} key={product.id || i} />)}</div>
</div>;


export default Listing
