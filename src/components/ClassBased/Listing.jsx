import { Component } from 'react'
import Products from '../../apis/products'
import Product from './Product'


export default class ListingClassBased extends Component {
    render() {
        return (
            <div className="p-5 flex flex-col gap-5">
    <h1 className="text-5xl font-bold my-5">Listing in Class based components</h1>
    <div className="grid grid-cols-1 items-center gap-10 w-full">{Products.map((product, i) => <Product {...product} key={product.id || i} />)}</div>
</div>
        )
    }
}
