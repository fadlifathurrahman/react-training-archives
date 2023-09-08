import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Integer20</Link>
        </nav>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <Outlet />
      <footer>&copy; 2023</footer>
    </>
  );
}
