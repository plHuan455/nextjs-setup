import { useMemo, useState } from 'react';
import caramelRibbonCoffeeImg from '@/assets/images/caramel-ribbon-coffee.png';
import strawberryCoffeeImg from '@/assets/images/strawberry-funnel-coffee.png';
import caramelFrappuccinoCoffeeImg from '@/assets/images/caramel-frappuccino-coffee.png';
import Banner from '@/components/templates/Banner';
import Products, { ProductItem } from '@/components/templates/Products';
import MainLayout from '@/components/templates/layouts/MainLayout';
import { Box, Stack, Typography } from '@mui/material';
import ModalBase from '@/components/organisms/ModalBase';
import { rem } from '@/styles/mixins';
import ProductDetail from '@/components/templates/ProductDetail';

export default function Home(){
  const [selectedProductModel, setSelectedProductModal] = useState<ProductItem>();
  const productList = useMemo<ProductItem[]>(() => {
    return [
      {id: '1', color: '#ECBD6E', title: 'Caramel Ribbon', img: caramelRibbonCoffeeImg.src, star: 4.6},
      {id: '2', color: '#CC5E6F', title: 'Strawberry Funnel', img: strawberryCoffeeImg.src, star: 4.6},
      {id: '3', color: '#297254', title: 'Caramel Frappuccino', img: caramelFrappuccinoCoffeeImg.src, star: 4.6},
      {id: '4', color: '#ECBD6E', title: 'Caramel Ribbon', img: caramelRibbonCoffeeImg.src, star: 4.6},
      // {id: '5', color: '#CC5E6F', title: 'Strawberry Funnel', img: strawberryCoffeeImg.src, star: 4.6},
      // {id: '6', color: '#297254', title: 'Caramel Frappuccino', img: caramelFrappuccinoCoffeeImg.src, star: 4.6},
      // {id: '7', color: '#ECBD6E', title: 'Caramel Ribbon', img: caramelRibbonCoffeeImg.src, star: 4.6},
      // {id: '8', color: '#CC5E6F', title: 'Strawberry Funnel', img: strawberryCoffeeImg.src, star: 4.6},
      // {id: '9', color: '#297254', title: 'Caramel Frappuccino', img: caramelFrappuccinoCoffeeImg.src, star: 4.6},
    ]
  }, []);

  const handleProductClick = (product: ProductItem) => {
    setSelectedProductModal(product);
  }
  return (
    <>
      <Box className='p-home'>
        <Banner />
        <Products productList={productList} onProductClick={handleProductClick}/>
      </Box>
      <ModalBase 
        open={Boolean(selectedProductModel)}
        onClose={() => setSelectedProductModal(undefined)}
      >
        <Box 
          sx={{
            width: '95vw', borderRadius: rem(8), backgroundColor: 'white',
            pb: rem(20), pt: rem(30),
          }}
        >
          <ProductDetail  
            sx={{
              overflow: 'auto', maxHeight: '90vh', px: rem(74), pb: rem(50)
            }}
            title={selectedProductModel?.title ?? ''}
            desc={selectedProductModel?.desc ?? 'Beautifully designed with multiple color scombination of white black and metalic with harsh line and smooth curves. Far far way, behind the word'}
            img={selectedProductModel?.img}
            color={selectedProductModel?.color}
          />
        </Box>
      </ModalBase>
    </>
  )
}

Home.Layout = MainLayout;