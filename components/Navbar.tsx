
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: '關於 Francis', path: '/' },
    { label: '日本醫療', path: '/medical', icon: '🏥', color: 'text-emerald-500' },
    { label: '資產管理', path: '/asset', icon: '📈', color: 'text-blue-500' },
    { label: '信託傳承', path: '/trust', icon: '⚖️', color: 'text-gold-500' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-white font-serif font-bold text-xl tracking-tight">
              Francis <span className="text-gold-400">Family CFO</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 transition text-sm font-medium ${
                  location.pathname === item.path ? 'text-gold-400' : 'text-slate-300 hover:text-white'
                } ${item.color || ''}`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
            <button 
              className="px-4 py-2 border border-gold-400 text-gold-400 rounded hover:bg-gold-400 hover:text-navy-900 transition text-sm font-bold"
              onClick={() => {
                const event = new CustomEvent('openFYC');
                window.dispatchEvent(event);
              }}
            >
              預約體檢
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-800 border-b border-white/10 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-white text-lg font-medium"
            >
              {item.icon} {item.label}
            </Link>
          ))}
          <button 
            className="w-full py-3 bg-gold-500 text-navy-900 font-bold rounded"
            onClick={() => {
              setIsOpen(false);
              const event = new CustomEvent('openFYC');
              window.dispatchEvent(event);
            }}
          >
            開啟 1 分鐘體檢
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
