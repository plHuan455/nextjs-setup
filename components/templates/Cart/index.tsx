import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Container, Stack, MenuItem, Select, SxProps, Theme, Typography, Checkbox, FormControl, FormLabel, TextField } from '@mui/material';
import { fontFamily, rem } from '@/styles/mixins';
import CloseIcon from '@mui/icons-material/Close';
import { InputNumber } from '@/components/atoms/Input';
import { Controller, FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { numberToMoneyFormat } from '@/utility/functions';
import Link from 'next/link';

type CartData = ProductItem & { checked?: boolean };

interface CartForm {
  cartList: CartData[];
  name: string;
  address: string;
  phone: string;
}

export type Price = {
  [key: string]: number; // {size: price}
}

export interface ProductItem {
  id: string;
  name: string;
  image?: string;
  price: Price;
  quantity: number;
  selectedPrice: string;
}

export interface CartProps {
  sx?: SxProps<Theme>;
  productList: ProductItem[];
}

export default function Cart({
  sx,
  productList,
}: CartProps) {
  const method = useForm<CartForm>({
    defaultValues: {
      name: '',
      address: '',
      phone: '',
    }
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control: method.control,
    name: "cartList", // unique name for your Field Array
  });

  React.useEffect(() => {
    method.reset({
      cartList: productList
    });
  }, [productList, method])

  const cartValue = method.watch('cartList');

  const getTotalPrice = (cartDataList: CartData[]) => {
    if (!cartDataList) return 0;
    return cartDataList.reduce((total, value) => {
      if (!value.checked) return total;
      return total += value.quantity * value.price[value.selectedPrice]
    }, 0)
  }

  return (
    <Box className="t-cart"
      sx={{ fontFamily: fontFamily('jost'), ...sx }}
    >
      <Container>
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(console.log)}>
            <Typography variant='h3' component='h1'
              sx={{ fontSize: rem(20), color: 'text.primary', fontWeight: 800, py: rem(40) }}
            >
              Shopping Cart
            </Typography>
            <Stack direction={'row'} gap={rem(70)}>
              <Box sx={{ flexGrow: 1 }}>
                <Box component={'table'}
                  sx={{ width: '100%', borderCollapse: 'collapse' }}
                >
                  <Box component={'thead'}>
                    <Box component={'tr'}
                      sx={{
                        '& th': {
                          textAlign: 'left', borderBottom: `${rem(2)} solid #dfdfdf`, py: rem(12),
                          fontSize: rem(16), fontWeight: 500
                        }
                      }}
                    >
                      <Box component={'th'} sx={{ width: rem(60) }} />
                      <Box component={'th'}>Name</Box>
                      <Box component={'th'}
                        sx={{ width: rem(145) }}
                      >
                        Size
                      </Box>
                      <Box component={'th'}>Quantity</Box>
                      <Box component={'th'} sx={{ width: rem(130) }}>Total Price</Box>
                      <Box component={'th'}></Box>
                    </Box>
                  </Box>
                  <Box component={'tbody'}
                    sx={{ borderBottom: `${rem(2)} solid #dfdfdf` }}
                  >
                    {fields.map((field, index) => {
                      return (
                        <Box component={'tr'} key={`cart-${field.id}`}
                          sx={{
                            '& td': { py: rem(24) }
                          }}
                        >
                          <Box component={'td'}>
                            <Controller
                              name={`cartList.${index}.checked`}
                              render={({ field: { value, onChange } }) => (
                                <Checkbox checked={Boolean(value)} onChange={(_, value) => onChange(value)} />
                              )}
                            />
                          </Box>
                          <Box component={'td'} className='t-cart_tbody_name'
                            sx={{ display: 'flex', alignItems: 'center', gap: rem(24) }}
                          >
                            <Box component={'img'} alt='' src={field.image}
                              sx={{
                                width: rem(74), transform: `translateY(${rem(-18)})`
                              }}
                            />
                            <Typography sx={{ fontSize: rem(16), fontWeight: 800, color: 'text.primary' }}>
                              {field.name}
                            </Typography>
                          </Box>
                          <Box component={'td'}>
                            <Controller
                              name={`cartList.${index}.selectedPrice`}
                              render={({ field: { value, onChange } }) => (
                                <Select value={value} size='small' onChange={onChange}
                                  sx={{
                                    width: '100%', maxWidth: rem(100), backgroundColor: '#FAFAFA',
                                    '& .MuiOutlinedInput-notchedOutline': { border: '0 !important' }
                                  }}
                                >
                                  {Object.keys(field.price).map(priceItem => (
                                    <MenuItem key={`key-price-${field.id}-${priceItem}`} value={priceItem}>
                                      {priceItem}
                                    </MenuItem>
                                  ))}
                                </Select>
                              )}
                            />
                          </Box>
                          <Box component={'td'}>
                            <Controller
                              name={`cartList.${index}.quantity`}
                              render={({ field: { value, onChange } }) => {
                                return (
                                  <InputNumber value={value} onChange={onChange} min={1} />
                                )
                              }}
                            />
                          </Box>
                          <Box component={'td'}>
                            {numberToMoneyFormat(
                              method.watch(`cartList.${index}.quantity`) * field.price[method.watch(`cartList.${index}.selectedPrice`)]
                            )}
                          </Box>
                          <Box component={'td'}>
                            <Button sx={{ minWidth: 0, color: 'text.secondary' }}>
                              <CloseIcon sx={{ fontSize: rem(18) }} />
                            </Button>
                          </Box>
                        </Box>
                      )
                    })}
                  </Box>

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', borderBottom: `${rem(2)} solid #dfdfdf` }}>
                  <Box sx={{ width: rem(270), py: rem(24) }}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography sx={{ fontSize: rem(14), color: 'text.secondary' }}>
                        Subtotal:
                      </Typography>
                      <Typography sx={{ fontSize: rem(18), color: 'text.primary', fontWeight: 600 }}>
                        {getTotalPrice(cartValue)}
                      </Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'} sx={{ mt: rem(8) }}>
                      <Typography sx={{ fontSize: rem(14), color: 'text.secondary' }}>
                        Shipping:
                      </Typography>
                      <Typography sx={{ fontSize: rem(18), color: 'text.primary', fontWeight: 600 }}>
                        Free
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
                <Stack direction={'row'} justifyContent={'space-between'} sx={{ py: rem(24) }}>
                  <Stack direction={'row'} alignItems={'center'} gap={rem(8)} sx={{ cursor: 'pointer' }}>
                    <ArrowBackIosIcon sx={{ fontSize: rem(18) }} />
                    <Typography
                      sx={{ '& a': { fontSize: rem(18), color: 'text.primary', fontWeight: 800, cursor: 'pointer', textDecoration: 'none' } }}
                    >
                      <Link href={'/'}>
                        Continue Shopping
                      </Link>
                    </Typography>
                  </Stack>
                  <Stack sx={{ width: rem(270) }} justifyContent={'space-between'} direction={'row'}>
                    <Typography sx={{ fontSize: rem(18), color: 'text.primary', fontWeight: 800 }}>
                      Total:
                    </Typography>
                    <Typography sx={{ fontSize: rem(18), color: 'text.primary', fontWeight: 800 }}>
                      {getTotalPrice(cartValue)}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>

              <Stack justifyContent={'space-between'}
                sx={{ width: 'calc(340/1180 * 100%)', backgroundColor: '#dedede', borderRadius: rem(8), p: rem(24) }}
              >
                <Box>
                  <Typography
                    sx={{ fontSize: rem(24), fontWeight: 800 }}
                  >
                    Payment Info
                  </Typography>
                  <Stack sx={{ mt: rem(54) }} gap={rem(32)}>
                    <Controller
                      name="name"
                      render={({ field: { value, onChange } }) => (
                        <FormControl sx={{ width: '100%' }}>
                          <FormLabel>
                            Name
                          </FormLabel>
                          <TextField
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder='Name ...'
                            size='small'
                            sx={{ fontSize: rem(14), color: 'text.primary', mt: rem(8) }}
                          />
                        </FormControl>
                      )}
                    />
                    <Controller
                      name="address"
                      render={({ field: { value, onChange } }) => (
                        <FormControl sx={{ width: '100%' }}>
                          <FormLabel>
                            Address
                          </FormLabel>
                          <TextField
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder='Address ...'
                            size='small'
                            sx={{ fontSize: rem(14), color: 'text.primary', mt: rem(8) }}
                          />
                        </FormControl>
                      )}
                    />
                    <Controller
                      name="phone"
                      render={({ field: { value, onChange } }) => (
                        <FormControl sx={{ width: '100%' }}>
                          <FormLabel>
                            Phone
                          </FormLabel>
                          <TextField
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder='Phone number ...'
                            size='small'
                            sx={{ fontSize: rem(14), color: 'text.primary', mt: rem(8) }}
                          />
                        </FormControl>
                      )}
                    />
                  </Stack>
                </Box>

                <Button type='submit'
                  sx={{
                    backgroundColor: 'primary.main', color: 'white', py: rem(16),
                    '&:hover': {
                      backgroundColor: '#05895f'
                    }
                  }}
                >
                  Check Out
                </Button>
              </Stack>
            </Stack>
          </form>
        </FormProvider>
      </Container>
    </Box>
  )
};
