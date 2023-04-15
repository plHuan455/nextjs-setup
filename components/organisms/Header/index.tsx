import { Badge, Box, Button, Container, List, ListItem, Typography } from '@mui/material';
import startBucksLogo from '@/assets/images/logo-starbucks.png';
import { rem } from '@/styles/mixins';
import SearchInput from '@/components/molecules/SearchInput';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Link from 'next/link';

export interface HeaderMenuItemTypes {
  label: string;
  href: string;
}
interface HeaderProp {
  menuList: HeaderMenuItemTypes[];
  onSearchChange?: (value: string) => void;
}

const Header: React.FC<HeaderProp> = ({
  menuList,
  onSearchChange,
}) => {
  return (
    <Box className='o-header'>
      <Container>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box className='o-Header_logo'
            sx={{ display: 'flex', gap: rem(14), alignItems: 'center' }}
          >
            <Box component='img' src={startBucksLogo.src} alt=''
              sx={{ width: rem(77), height: rem(77) }}
            />
            <Typography variant='h3' sx={{ fontSize: rem(20), lineHeight: rem(29), color: 'black', fontWeight: 800 }}>
              STARBUCKS
            </Typography>
          </Box>
          <List
            sx={{ display: 'flex', alignItems: 'center', gap: rem(32) }}
          >
            {menuList.map(menu => (
              <ListItem key={`key-header-menu-item-${menu.label}`}
                sx={{
                  p: 0,
                  color: 'text.primary', fontSize: rem(17), lineHeight: rem(25), fontWeight: 500, flexShrink: 1, whiteSpace: 'nowrap',
                  '& a': { color: 'inherit', textDecoration: 'none', '&: hover': {textDecoration: 'underline'}}
                }}
              >
                <Link href={menu.href}>
                  {menu.label}
                </Link>
              </ListItem>
            ))}
          </List>

          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: rem(42) }}
          >
            <SearchInput value='' placeholder='Search' onChange={onSearchChange} />
            <Button sx={{ minWidth: 0, borderRadius: '50%' }}>
              <Badge badgeContent={1} color="secondary">
                <LocalGroceryStoreOutlinedIcon sx={{ color: 'black', fontSize: rem(25) }} />
              </Badge>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header;