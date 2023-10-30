import '../App.css';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        header
          </header>
          <div>
              <Outlet />
          </div>
          <footer>
              Footer
          </footer>
    </div>
  );
}

