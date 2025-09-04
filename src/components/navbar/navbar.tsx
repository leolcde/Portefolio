import gaphs from './graphs.svg'
import './navbar.css'

export default function Navbar() {
  return (
    <header>
      <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-3 shadow-lg">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={gaphs} className="h-15" alt="brand-icon" />
            <span className="text-white font-bold text-2xl drop-shadow-lg">
              Léo's portfolio
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

