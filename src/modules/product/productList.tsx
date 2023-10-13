import { Box, Card, Grid, Skeleton, Stack, Typography } from '@mui/material';
import { Product } from '_mocks_/products';
import ProductCard from './productCard';
import LazyLoad from 'react-lazyload';

interface UIProps {
  products: Product[];
}

const Loading = () => {
  return (
    <Card>
      <Box sx={{ pt: '100%', width: '100%', height: '100%', position: 'relative' }}>
        <Skeleton sx={{ height: '100%', width: '100%' }} animation="wave" variant="rectangular" />
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
          <Skeleton animation="wave" height={10} width="50%" />
          <Skeleton animation="wave" height={10} width="50%" />
        </Stack>
      </Stack>
    </Card>
  );
};

const ProductList = (props: UIProps) => {
  return (
    <Grid container spacing={3}>
      {props.products.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <LazyLoad key={product.id} height={100} offset={[-100, 100]} placeholder={<Loading />}>
            <ProductCard product={product} />
          </LazyLoad>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
