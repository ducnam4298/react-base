import { Grid } from '@mui/material';
import { Product } from '_mocks_/products';
import { ProductCard } from '.';

interface UIProps {
  products: Product[];
}

const ProductList = (props: UIProps) => {
  return (
    <Grid container spacing={3}>
      {props.products.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
