import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReservation = () => {
    window.scrollTo(0, 0);
    navigate('/reservation');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-stone-900/80 backdrop-blur-sm' 
          : 'bg-gradient-to-b from-stone-900/50 via-stone-900/25 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-medium text-white/95 hover:text-white transition-colors font-mincho tracking-wider">
              林檎屋
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/onsen" className="px-4 py-2 text-white/90 hover:text-white transition-colors font-mincho">温泉</Link>
            <Link to="/rooms" className="px-4 py-2 text-white/90 hover:text-white transition-colors font-mincho">客室</Link>
            <a href="#" className="px-4 py-2 text-white/90 hover:text-white transition-colors font-mincho">食事</a>
            <Link to="/access" className="px-4 py-2 text-white/90 hover:text-white transition-colors font-mincho">アクセス</Link>
            <Link to="/area" className="px-4 py-2 text-white/90 hover:text-white transition-colors font-mincho">周辺エリア</Link>
            <button 
              onClick={handleReservation}
              className="ml-4 bg-amber-600/90 hover:bg-amber-600 text-white px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg font-mincho"
            >
              予約する
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white/90 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-stone-900/95 backdrop-blur-sm border-t border-white/10">
            <Link to="/onsen" className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors font-mincho">
              温泉
            </Link>
            <Link to="/rooms" className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors font-mincho">
              客室
            </Link>
            <a href="#" className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors font-mincho">
              食事
            </a>
            <Link to="/access" className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors font-mincho">
              アクセス
            </Link>
            <Link to="/area" className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors font-mincho">
              周辺エリア
            </Link>
            <div className="px-3 py-3">
              <button 
                onClick={handleReservation}
                className="w-full bg-amber-600/90 hover:bg-amber-600 text-white px-3 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg font-mincho"
              >
                予約する
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;