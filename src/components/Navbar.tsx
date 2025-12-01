import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/modul-mingguan', label: 'Modul' },
    { path: '/showcase-karya', label: 'Karya' },
    { path: '/refleksi-akhir', label: 'Refleksi' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-gray-900 hover:text-gray-600 transition-colors">
            Ahmad Rizki Pratama
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors relative ${
                  isActive(item.path)
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gray-900"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gray-200"
            >
              <div className="py-4 flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`transition-colors ${
                        isActive(item.path) ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}