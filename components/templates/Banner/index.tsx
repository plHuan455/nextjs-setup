import bannerImg from "@/assets/images/banner.png";
import sippyImg from "@/assets/images/sippy-cup.png";
import donutImg from "@/assets/images/donut.png";
import cookieImg from "@/assets/images/cookie.png";
import { rem } from "@/styles/mixins";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Container, List, ListItem, Stack, SxProps, Theme, Typography } from "@mui/material";

interface BannerProps {
  sx?: SxProps<Theme>
}

export default function Banner({
  sx
}: BannerProps) {
   return (
    <Box className='t-banner' sx={sx}>
      <Container sx={{position: 'relative'}}>
        <Box component='img' src={bannerImg.src} alt=''
          sx={{position: 'absolute', top: rem(38), left: rem(309)}}
        />
        <Box 
          sx={{display: 'flex', justifyContent: 'space-between'}}
        >
          <Box className='t-banner_content'
            sx={{pt: rem(105), pb: rem(120)}}
          >
            <Typography component='h1' variant='h2'
              sx={{color: '#0A0A09', fontSize: rem(68), lineHeight: rem(78), fontWeight: 800}}
            >
              Midnight <br />
              Frappuccino
            </Typography>
            <Typography component='p' variant='body1'
              sx={{
                mt: rem(35), color: 'text.secondary', fontSize: rem(18), lineHeight: rem(30), fontWeight: 400
              }}
            >
              The Midnight Mint Mocha Frappuccino<br />
              feature extra dark cocoa blended with<br />
              Frappuccinno Roast coffee.<br />
            </Typography>
            <Button
              sx={{ 
                color: 'white', fontSize: rem(16), lineHeight: rem(30), padding: `${rem(18)} ${rem(38)}`, 
                fontWeight: 700, backgroundColor: 'text.primary', borderRadius: rem(44), mt: rem(40),
                '&: hover': { backgroundColor: 'text.secondary'}
              }}
            >
              <Typography sx={{textTransform: 'capitalize'}}>Buy Now </Typography>
              <Box
                sx={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  width: rem(28), height: rem(28), borderRadius: '50%', backgroundColor: 'secondary.main',
                  ml: rem(19),
                }}
              >
                <ArrowForwardIosIcon sx={{fontSize: rem(12), color: 'white'}}/>
              </Box>
            </Button>
          </Box>

          <List
            sx={{pt: rem(176), display: 'flex', flexDirection: 'column', gap: rem(53)}}
          >
            <ListItem
              sx={{display: 'flex', gap: rem(27)}}
            >
              <Box component='img' src={sippyImg.src} alt='' />
              <Box 
              >
                <Typography
                  sx={{color: 'text.primary', fontWeight: 800, fontSize: rem(18)}}
                >
                  Sippy Cup
                </Typography>
                <Typography
                  sx={{color: 'text.secondary', fontSize: rem(15), lineHeight: rem(20), mt: rem(9)}}
                >
                  Are the New Norm<br />
                  for iced coffee
                </Typography>
              </Box>
            </ListItem>
            <ListItem
              sx={{display: 'flex', gap: rem(27)}}
            >
              <Box component='img' src={donutImg.src} alt='' />
              <Box 
              >
                <Typography
                  sx={{color: 'text.primary', fontWeight: 800, fontSize: rem(18)}}
                >
                  Donut
                </Typography>
                <Typography
                  sx={{color: 'text.secondary', fontSize: rem(15), lineHeight: rem(20), mt: rem(9)}}
                >
                  Have a donut with <br />
                  a frappuccino
                </Typography>
              </Box>
            </ListItem>
            <ListItem
              sx={{display: 'flex', gap: rem(27)}}
            >
              <Box component='img' src={cookieImg.src} alt='' />
              <Box 
              >
                <Typography
                  sx={{color: 'text.primary', fontWeight: 800, fontSize: rem(18)}}
                >
                  Cookies
                </Typography>
                <Typography
                  sx={{color: 'text.secondary', fontSize: rem(15), lineHeight: rem(20), mt: rem(9)}}
                >
                  Enjoy our sugar<br />
                  free cookies
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
   )
}