import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{
    id: 1,
    title: 'Test item 1',
    price: 3,
    description: 'Test item 1'
}, {
    id: 2,
    title: 'Test item 2',
    price: 2,
    description: 'Test item 2'
}, {
    id: 3,
    title: 'Test item 3',
    price: 10,
    description: 'Test item 3'
}, {
    id: 4,
    title: 'Test item 4',
    price: 2.5,
    description: 'Test item 4'
}];

const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map(product => <ProductItem
                    key={product.id}
                    {...product}
                />)}
            </ul>
        </section>
    );
};

export default Products;
