import Link from 'next/link'
import { useRouter } from 'next/router'
import { Sun, Moon, LogOut, User, Mail, FileText, Settings, Home, Zap } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Dashboard', href: '/', icon: <Home size={18} /> },
  { label: 'Resume Builder', href: '/resume', icon: <FileText size={18} /> },
  { label: 'Cover Letter Generator', href: '/cover-letter', icon: <FileText size={18} /> },
  { label: 'Job Matching & Auto-Apply', href: '/job-matching', icon: <Zap size={18} /> },
  { label: 'Job Tracker', href: '/tracker', icon: <FileText size={18} /> },
  { label: 'Interview Practice', href: '/interview', icon: <FileText size={18} /> },
  { label: 'Upskilling', href: '/upskill', icon: <FileText size={18} /> },
  { label: 'Profile', href: '/profile', icon: <User size={18} /> },
  { label: 'Messages', href: '/messages', icon: <Mail size={18} /> },
  { label: 'Settings', href: '/settings', icon: <Settings size={18} /> },
]

export default function Sidebar() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <aside className="w-64 h-screen fixed bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4">
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Job Platform</h1>

        <nav className="space-y-2">
          {navItems.map(({ label, href, icon }) => (
            <Link href={href} key={href} className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
              router.pathname === href ? 'bg-gray-100 dark:bg-gray-800' : ''
            }`}>
              {icon}
              <span className="text-sm">{label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-6 space-y-2">
          <button onClick={toggleTheme} className="flex items-center gap-2 text-sm px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          <button className="flex items-center gap-2 text-sm px-3 py-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-800">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  )
}
