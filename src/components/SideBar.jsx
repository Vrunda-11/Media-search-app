import { Link, useLocation } from 'react-router-dom';
import { FaPinterest, FaHome, FaCompass, FaUser, FaCog } from 'react-icons/fa';
import { Grid2x2 } from 'lucide-react';

const SideBar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Home', icon: <FaHome size={22} />, path: '/' },
    { name: 'Explore', icon: <FaCompass size={22} />, path: '/explore' },
    { name: 'Your Boards', icon: <Grid2x2 size={22} />, path: '/collection' },
    { name: 'Profile', icon: <FaUser size={22} />, path: '/profile' },
    { name: 'Settings', icon: <FaCog size={22} />, path: '/settings' },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col bg-white border-r border-gray-100 p-4 justify-between transition-all duration-300 z-50">
      
      <div className="flex flex-col gap-8">
        <Link to="/" className="flex items-center justify-center py-2 text-red-600 cursor-pointer">
          <FaPinterest size={32} className="shrink-0" />
        </Link>

        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={item.name}
                className="relative group flex justify-center"
              >
                <Link
                  to={item.path}
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 cursor-pointer
                    ${isActive 
                      ? 'bg-black text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <span className="shrink-0">{item.icon}</span>
                </Link>
                
                <span className="absolute left-16 top-1/2 -translate-y-1/2 hidden group-hover:block whitespace-nowrap bg-black text-white px-3 py-1.5 rounded-lg text-xs font-medium z-50 pointer-events-none shadow-lg">
                  {item.name}
                </span>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;