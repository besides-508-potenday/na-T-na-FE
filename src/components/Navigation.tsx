import { Link, useLocation } from 'react-router';

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/chat', label: '채팅' },
    { path: '/chat2', label: '채팅2' },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-800'
                  : 'hover:bg-blue-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
