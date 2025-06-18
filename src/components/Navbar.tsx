import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-lg font-semibold">
              Sifat Ali
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`text-sm transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className={`text-sm transition-colors hover:text-primary ${
                  isActive('/projects') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
              Projects
            </Link>
              <Link
                to="/contact"
                className={`text-sm transition-colors hover:text-primary ${
                  isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
              Contact
            </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 