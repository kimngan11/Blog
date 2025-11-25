import { Search, Menu, Settings } from 'lucide-react';

interface BlogHeaderProps {
  currentPage: 'home' | 'about' | 'admin';
  onNavigate: (page: 'home' | 'about' | 'admin') => void;
}

export function BlogHeader({ currentPage, onNavigate }: BlogHeaderProps) {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className="text-pink-600 hover:text-pink-700 transition-colors"
            >
              🌸 Hana's Japan Life
            </button>
            
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => onNavigate('home')}
                className={`transition-colors ${
                  currentPage === 'home' 
                    ? 'text-pink-600' 
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                Trang chủ
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className={`transition-colors ${
                  currentPage === 'about' 
                    ? 'text-pink-600' 
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                Về mình
              </button>
              <button 
                onClick={() => onNavigate('admin')}
                className={`flex items-center gap-1 transition-colors ${
                  currentPage === 'admin' 
                    ? 'text-pink-600' 
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                <Settings className="w-4 h-4" />
                Admin
              </button>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="md:hidden p-2 hover:bg-pink-50 rounded-full transition-colors">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}