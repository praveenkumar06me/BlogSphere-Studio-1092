import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              BlogSpace
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/create" className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition">
              <FaPen />
              <span>Write</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}