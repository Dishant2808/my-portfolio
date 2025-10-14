import '../styles/globals.css'

import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/portfolio') {
      router.replace('/projects')
    }
  }, [router.pathname])
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
