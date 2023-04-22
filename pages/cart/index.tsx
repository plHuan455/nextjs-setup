import MainLayout from "@/components/templates/layouts/MainLayout";
import CartTemplate, { ProductItem } from "@/components/templates/Cart";
import { rem } from "@/styles/mixins";
import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import coffee1 from '@/assets/images/caramel-ribbon-coffee.png';
import coffee2 from '@/assets/images/caramel-frappuccino-coffee.png';

export default function Cart () {
  const productList = useMemo<ProductItem[]>(() => {
    return [
      {id: '1', name: 'Coffee1',  quantity: 1, selectedPrice: 'S', image: coffee1.src , price: { S: 1000, M: 20000}},
      {id: '2', name: 'Coffee2', quantity: 3, selectedPrice: 'M', image: coffee2.src, price: { S: 1000, M: 20000}},
    ]
  }, [])
  return (
    <Box className='p-cart' sx={{pt: rem(70)}}>
      <CartTemplate productList={productList}/>
    </Box>
  )
}

Cart.Layout = MainLayout;