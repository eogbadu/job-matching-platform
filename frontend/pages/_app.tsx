import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import { AuthProvider } from '../context/AuthContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className="flex">
        <Sidebar />
        <main className="ml-64 w-full min-h-screen bg-gray-50 dark:bg-gray-950 p-6">
          <Component {...pageProps} />
        </main>
      </div>
    </AuthProvider>
  )
}
