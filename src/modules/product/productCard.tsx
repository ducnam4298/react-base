import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fCurrency } from '../../utils/formatNumber';
import Label from 'components/Label';
import ColorPreview from 'components/ColorPreview';
import { Product } from '_mocks_/products';

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

interface UIProps {
  product: Product;
}

const ProductCard = (props: UIProps) => {
  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {props.product?.status && (
          <Label
            variant="filled"
            color={(props.product.status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {props.product.status}
          </Label>
        )}
        <ProductImgStyle alt={props.product.name} src={props.product.cover} />
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {props.product.name}
          </Typography>
        </Link>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={props.product.colors} />
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {props.product.priceSale && fCurrency(props.product.priceSale)}
            </Typography>
            &nbsp;
            {fCurrency(props.product.price)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProductCard;
