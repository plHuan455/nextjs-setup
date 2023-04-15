import { EmptyLayout } from '@/components/templates/layouts';
import '@/styles/common.scss';
import createEmotionCache from '@/utility/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { NextPage } from 'next';
import type { AppProps } from 'next/app'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00724E',
    },
    secondary: {
      main: '#FF7F32'
    },
    text: {
      primary: '#1F2131',
      secondary: '#6B6764',
    },
    background: {
      paper: '#EFE6DF',
    }
  }
})

const clientSideEmotionCache = createEmotionCache();

interface CusAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPage & { Layout?: (props: { children: React.ReactNode }) => React.ReactElement}
}

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: CusAppProps) {
  const Layout = Component.Layout ?? EmptyLayout;
  
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>)
}
