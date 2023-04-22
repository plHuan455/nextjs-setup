import React from 'react';
import { Box, Container, Button, Stack, SxProps, TextField, Theme, Typography } from '@mui/material';
import { rem } from '@/styles/mixins';
import strawberryCoffeeImg from '@/assets/images/strawberry-funnel-coffee.png';
import { useForm, FormProvider, Controller } from 'react-hook-form';

export interface IProductOrder {
  s: number;
  m: number;
  l: number;
}

export interface ProductDetailProps {
  title: string;
  desc?: string;
  color?: string;
  img?: string;
  sx?: SxProps<Theme>;
}

export default function ProductDetail({
  title,
  color,
  img,
  sx,
  desc,
}: ProductDetailProps) {
  const method = useForm<IProductOrder>({
    defaultValues: { s: 0, m: 0, l: 0 }
  })

  const handleSubmit = (values: IProductOrder) => {
    console.log(values);
  }
  return (
    <Box
      sx={{
        ...sx,
        width: '100%', gap: rem(20)
      }}
    >
      <Container>
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(handleSubmit)}>
          <Stack direction={'row'}>
            <Box className='t-productDetail_content'
              sx={{ pt: rem(52) }}
            >
              <Typography
                sx={{ fontSize: rem(14), fontWeight: 500, color: 'text.primary' }}
              >
                THE BEST PLACE FOR TEA COFFEE AND ALL HOT
              </Typography>
              <Typography component='h2' variant='h2'
                sx={{ fontSize: rem(73), lineHeight: rem(75), color: 'primary.main', fontWeight: 800, mt: rem(5) }}
              >
                {title}
              </Typography>
              <Typography
                sx={{ fontSize: rem(18), lineHeight: rem(22), color: 'text.secondary', mt: rem(28), width: 'calc(290 / 380 * 100%)' }}
              >
                {desc}
              </Typography>
              <Typography
                sx={{ fontSize: rem(30), lineHeight: rem(36), fontWeight: 800, color: 'text.primary', mt: rem(12) }}
              >
                Change your size
              </Typography>
              <Stack direction={'row'} className='t-productDetail_chooseSize' sx={{ mt: rem(16), gap: rem(34) }}>
                <Controller
                  name='s'
                  render={({ field: { onChange, value } }) => (
                    <Box
                      sx={{ width: rem(68), gap: rem(16) }}
                    >
                      <Box onClick={() => onChange(typeof Number(value) === 'number' ? Number(value) + 1 : 0)}
                        sx={{
                          width: '100%', aspectRatio: '1 / 1', borderRadius: '50%', border: `${rem(4)} solid #ECBD6E`, cursor: 'pointer',
                          transitionDuration: '0.3s', '&:hover': { transform: 'translateY(-5px)' },
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: rem(28), fontWeight: 700, color: '#ECBD6E'
                        }}
                      >
                        S
                      </Box>
                      <TextField type='text'
                        value={value}
                        onChange={onChange}
                        sx={{
                          display: 'block', mt: rem(16),
                          backgroundColor: '#ECBD6E',
                          '& .MuiInputBase-input': {
                            fontSize: rem(18), color: 'white', fontWeight: 800, outline: 'none', py: rem(3),
                            textAlign: 'center',
                          },
                          '& .MuiOutlinedInput-notchedOutline': { border: '0 !important' },
                        }}
                      />
                    </Box>
                  )}
                />
                <Controller
                  name='m'
                  render={({ field: { value, onChange } }) => (
                    <Box
                      sx={{ width: rem(68), gap: rem(16) }}
                    >
                      <Box onClick={() => onChange(typeof Number(value) === 'number' ? Number(value) + 1 : 0)}
                        sx={{
                          width: '100%', aspectRatio: '1 / 1', borderRadius: '50%', border: `${rem(4)} solid #CC5E6F`, cursor: 'pointer',
                          transitionDuration: '0.3s', '&:hover': { transform: 'translateY(-5px)' },
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: rem(28), fontWeight: 700, color: '#CC5E6F'
                        }}
                      >
                        M
                      </Box>
                      <TextField type='text'
                        value={value}
                        onChange={onChange}
                        sx={{
                          display: 'block', mt: rem(16),
                          backgroundColor: '#CC5E6F',
                          '& .MuiInputBase-input': {
                            fontSize: rem(18), color: 'white', fontWeight: 800, outline: 'none', py: rem(3),
                            textAlign: 'center',
                          },
                          '& .MuiOutlinedInput-notchedOutline': { border: '0 !important' },
                        }}
                      />
                    </Box>
                  )}
                />
                <Controller
                  name='l'
                  render={({ field: { value, onChange } }) => (
                    <Box
                      sx={{ width: rem(68), gap: rem(16) }}
                    >
                      <Box onClick={() => onChange(typeof Number(value) === 'number' ? Number(value) + 1 : 0)}
                        sx={{
                          width: '100%', aspectRatio: '1 / 1', borderRadius: '50%', border: `${rem(4)} solid #297254`, cursor: 'pointer',
                          transitionDuration: '0.3s', '&:hover': { transform: 'translateY(-5px)' },
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: rem(28), fontWeight: 700, color: '#297254'
                        }}
                      >
                        L
                      </Box>
                      <TextField type='text'
                        value={value}
                        onChange={onChange}
                        sx={{
                          display: 'block', mt: rem(16),
                          backgroundColor: '#297254',
                          '& .MuiInputBase-input': {
                            fontSize: rem(18), color: 'white', fontWeight: 800, outline: 'none', py: rem(3),
                            textAlign: 'center',
                          },
                          '& .MuiOutlinedInput-notchedOutline': { border: '0 !important' },
                        }}
                      />
                    </Box>
                  )}

                />
              </Stack>

              <Button type='submit'
                sx={{
                  fontSize: rem(20), fontWeight: 700, color: 'white', width: '100%', backgroundColor: 'primary.main', mt: rem(50),
                  '&:hover': { backgroundColor: '#055b40' }, py: rem(16), textTransform: 'capitalize'
                }}
              >
                Order now
              </Button>
            </Box>
            <Box className='t-productDetail_image'
              sx={{ width: 'calc(540/960 * 100%)', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Box
                sx={{
                  position: 'absolute', top: rem(95),
                  width: '95%', aspectRatio: '1 / 1', backgroundColor: '#ffffff', borderRadius: '50%',
                  boxShadow: 'inset -41px -50px 53px 30px #56525242'
                }}
              />

              <Box component='img' src={img} alt=''
                sx={{ position: 'relative', width: rem(312), aspectRatio: '312/640' }}
              />
            </Box>
          </Stack>
          </form>
        </FormProvider>
      </Container>
    </Box>
  )
};
