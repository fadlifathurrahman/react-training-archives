import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import DropdownAccount from "./DropdownAccount";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    // header container
    <div
      className="sticky top-0 z-20 -mb-24
      max-w-screen h-1/4
      bg-slate-900/90 text-white text-xs
     flex justify-around items-center"
    >
      {/* caruban tourism logo */}
      <HeaderLogo />

      {/* nav-bar */}
      <div className="flex gap-4 items-center">
        <Link to="/about">
          <button>About</button>
        </Link>
        {/* decision for user */}
        {user ? (
          <DropdownAccount />
        ) : (
          <div className="flex gap-4">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
