import { useState } from "react";
import { BiSolidChevronDown, BiEditAlt } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

export default function DropdownAccount() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="flex justify-end text-black">
      <div onMouseLeave={() => setOpen(false)} className="relative">
        <button
          onMouseOver={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white border rounded-md"
        >
          <FaUserAlt />
          <span>@{user.username}</span> | <BiSolidChevronDown />
        </button>
        <ul
          className={`absolute right-0 bg-white w-full py-2 rounded-lg z-20 ${
            open ? "block" : "hidden"
          }`}
        >
          {/* direct to edit acc page */}
          <Link to={`/auth/edit/${user.id}`}>
            <button className="flex w-full items-center gap-2 py-2 px-3 text-sm hover:bg-gray-100">
              <BiEditAlt /> <span>Edit</span>
            </button>
          </Link>
          {/* logout button */}
          <button
            onClick={() => {
              confirm("Are you sure for logout?");
              localStorage.removeItem("token");
              setUser(null);
              navigate("/");
            }}
            className="flex w-full items-center gap-2 py-2 px-3 text-sm hover:bg-gray-100"
          >
            <LuLogOut /> <span>Logout</span>
          </button>
        </ul>
      </div>
    </div>
  );
}
