import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CM-DEMO',
  description: 'Cloud Monitoring Demo',
}

const navLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Manage', href: '/manage' },
  { name: 'Monitor', href: '/monitor' },
  { name: 'Account', href: '/setting/account' },
  { name: 'Role', href: '/setting/role' },
]

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navigation navLinks={navLinks} />
        </div>
        {children}
      </body>
    </html>
  )
}
