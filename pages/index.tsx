import Banner from '@/components/templates/Banner';
import Products from '@/components/templates/Products';
import MainLayout from '@/components/templates/layouts/MainLayout';
import { Box } from '@mui/material';

export default function Home(){
  return (
    <Box className='p-home'>
      <Banner />
      <Products />
    </Box>
  )
}

Home.Layout = MainLayout;