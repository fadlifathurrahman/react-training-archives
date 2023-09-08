import { GiGalaxy } from "react-icons/gi";
import { MdContactPage, MdHome, MdInfo } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <GiGalaxy size={24} />
        <div>IntegerStore</div>
      </Link>
      <nav>
        <NavLink to="/">
          <MdHome size={24} />
          Beranda
        </NavLink>
        <NavLink to="/about">
          <MdInfo size={24} />
          Tentang
        </NavLink>
        <NavLink to="/contact">
          <MdContactPage size={24} />
          Kontak
        </NavLink>
      </nav>
      <Button>Login</Button>
    </header>
  );
}
