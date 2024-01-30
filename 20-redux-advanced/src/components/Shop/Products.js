import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  {
    id: 1,
    title: 'Test item',
    price: 12,
    description: 'Test description'
  },
  {
    id: 2,
    title: 'Test item 2',
    price: 14,
    description: 'Test description 2'
  },
  {
    id: 3,
    title: 'Test item 3',
    price: 8,
    description: 'Test description'
  }];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map(product => <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
