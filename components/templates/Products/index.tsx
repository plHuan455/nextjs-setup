import { rem } from "@/styles/mixins";
import { Stack, Grid, Box, Container, Typography } from "@mui/material";
import productBgImg from '@/assets/images/product-bg.svg';
import starIcon from '@/assets/icons/ic_star.svg';

export interface ProductItem {
  id: string;
  color: string;
  img: string;
  title: string;
  star: number;
  desc?: string;
}

interface ProductsProps {
  productList: ProductItem[];
  onProductClick: (product: ProductItem) => void;
}

export default function Products({
  productList,
  onProductClick,
}: ProductsProps) {
  return (
    <Box className='t-products' sx={{ pt: rem(105) }}>
      <Container>
        <Box sx={{ position: 'relative'}}>
          <Box
            sx={{position: 'absolute', left: 0, width: '100%', top: rem(144+27)}}
          >
            <Box component='img' src={productBgImg.src} alt='' 
              sx={{width: '100%'}}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute', top: rem(144+27+100), bottom: 0, left: 0, width: '100%', backgroundColor: 'text.primary',
              borderBottomLeftRadius: rem(78), borderBottomRightRadius: rem(78),
            }}
          />
          <Grid container spacing={rem(144)}
            sx={{px: rem(135), position: 'relative', pb: rem(75)}}
          >
            {productList.map(value => (
              <Grid item key={`key-product-item-${value.id}`} xs={4} onClick={() => onProductClick(value)}
              >
                <Box
                  sx={{
                    width: '100%', aspectRatio: '1 / 1', borderRadius: '50%', backgroundColor: value.color,
                    p: rem(20), position: 'relative', cursor: 'pointer'
                  }}
                >
                  <Box component='img' src={value.img} alt=''
                    sx={{ 
                      width: '100%', height: '100%', objectFit: 'contain', transitionDuration: '0.3s',
                      '&:hover': { transform: 'translateY(-10px)'}
                     }}
                  />
                  <Stack
                    direction='row'
                    sx={{
                      borderRadius: rem(4), p: rem(12), gap: rem(8),
                      position: 'absolute', bottom: rem(12), right: rem(-2), backgroundColor: 'white'
                    }}
                  >
                    <Typography sx={{fontSize: rem(16), lineHeight: rem(20), color: 'text.primary', fontWeight: 800}}>
                      4.6
                    </Typography>
                    <Box component={'img'} alt='' src={starIcon.src} />
                  </Stack>
                </Box>
                <Box
                  sx={{ mt: rem(32) }}
                >
                  <Typography
                    sx={{
                      color: '#FAFAFB', fontSize: rem(20), lineHeight: rem(20), fontWeight: 700, textAlign: 'center'
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: rem(16), lineHeight: rem(20), color: 'text.secondary', fontWeight: 700, cursor: 'pointer',
                      textAlign: 'center', mt: rem(12)
                    }}
                  >
                    Add to order +
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}