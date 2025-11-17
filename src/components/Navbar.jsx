import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
          <span className="font-semibold text-gray-900">Promptr</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black transition-colors">Get Started</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-gray-100">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-gray-800">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block py-2 font-medium">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
