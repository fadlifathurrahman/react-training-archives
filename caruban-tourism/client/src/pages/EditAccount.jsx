import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../App";
import { api } from "../utils";

export default function EditAccount() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [editUsername, setEditUsername] = useState(false);
  const [editName, setEditName] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const { id } = useParams();
  const [newData, setNewData] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
    phone: "",
  });
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  const [newPassword, setNewPassword] = useState({
    email: user.email,
    previousPassword: "",
    newPassword: "",
  });
  const [confirmDeleteAccount, setConfirmDeleteAccount] = useState({
    email: "",
    confirmPassword: "",
  });

  useEffect(() => {
    api("/auth/me").then((data) => {
      setNewData(data);
    });
  }, []);

  if (user) {
    return (
      <main className="flex flex-wrap min-h-screen max-w-screen-xl pt-24 gap-y-6 justify-evenly items-center">
        {/* edit email */}
        <form
          className="mx-auto bg-gray-100 p-8 rounded-3xl w-96 flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const token = localStorage.getItem("token");
            const response = await fetch(
              `http://localhost:3000/api/auth/edit-email/${id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newData),
              }
            );
            if (response.ok) {
              setUser(newData);
              navigate(`/`);
            }
            const message = await response.text();
            alert(message);
          }}
        >
          <h1 className="text-center text-xl">Edit Email</h1>
          <label>
            <div className="flex justify-between">
              <span className="truncate ... pr-5">{user.email} </span>
              {editEmail === false ? (
                <Button
                  variant="contained"
                  className={editEmail == false ? "" : "hidden"}
                  onClick={() => {
                    setEditEmail(true);
                    setEditPassword(false);
                    setEditUsername(false);
                    setEditName(false);
                    setEditPhone(false);
                    setDeleteAccount(false);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <div></div>
              )}
            </div>
            <input
              type="email"
              className={editEmail == true ? "w-full px-3 py-2 my-2" : "hidden"}
              placeholder="Insert your new email"
              required
              onChange={(e) => {
                setNewData({ ...newData, email: e.target.value });
              }}
            />
            <div
              className={
                editEmail == true
                  ? "w-full py-2 flex justify-between"
                  : "hidden"
              }
            >
              <Button
                variant="contained"
                color="warning"
                onClick={() => {
                  setEditEmail(false);
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
                onClick={() => {
                  setEditEmail(true);
                }}
              >
                Save
              </Button>
            </div>
          </label>
        </form>

        {/* edit password */}
        <form
          className="mx-auto bg-gray-100 p-8 rounded-3xl w-96 flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            if (confirmNewPassword == newPassword.newPassword) {
              const token = localStorage.getItem("token");
              const response = await fetch(
                `http://localhost:3000/api/auth/edit-password/${id}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify(newPassword),
                }
              );
              if (response.ok) {
                setUser(newData);
                navigate(`/`);
              }
              const message = await response.text();
              alert(message);
            } else {
              alert("Confirm password did`nt match");
            }
          }}
        >
          <h1 className="text-center text-xl">Edit Password</h1>
          <label>
            <div className="flex justify-center">
              {editPassword === false ? (
                <Button
                  variant="contained"
                  className={editPassword == false ? "" : "hidden"}
                  onClick={() => {
                    setEditPassword(true);
                    setEditEmail(false);
                    setEditUsername(false);
                    setEditName(false);
                    setEditPhone(false);
                    setDeleteAccount(false);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <div></div>
              )}
            </div>
            <input
              type="password"
              className={
                editPassword == true ? "w-full px-3 py-2 my-2" : "hidden"
              }
              placeholder="Insert your previous passwords"
              required
              onChange={(e) => {
                setNewPassword({
                  ...newPassword,
                  previousPassword: e.target.value,
                });
              }}
            />
            <input
              type="password"
              className={
                editPassword == true ? "w-full px-3 py-2 my-2" : "hidden"
              }
              placeholder="Insert your new passwords"
              required
              onChange={(e) => {
                setNewPassword({
                  ...newPassword,
                  newPassword: e.target.value,
                });
              }}
            />
            <input
              type="password"
              className={
                editPassword == true ? "w-full px-3 py-2 my-2" : "hidden"
              }
              placeholder="Confirm your new passwords"
              required
              onChange={(e) => {
                setConfirmNewPassword(e.target.value);
              }}
            />
            <div
              className={
                editPassword == true
                  ? "w-full py-2 flex justify-between"
                  : "hidden"
              }
            >
              <Button
                variant="contained"
                color="warning"
                onClick={() => {
                  setEditPassword(false);
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
                onClick={() => {
                  setEditPassword(true);
                }}
              >
                Save
              </Button>
            </div>
          </label>
        </form>

        {/* edit username */}
        <form
          className="mx-auto bg-gray-100 p-8 rounded-3xl w-96 flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const token = localStorage.getItem("token");
            const response = await fetch(
              `http://localhost:3000/api/auth/edit-username/${id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newData),
              }
            );
            if (response.ok) {
              setUser(newData);

              navigate(`/`);
            }
            const message = await response.text();
            alert(message);
          }}
        >
          <h1 className="text-center text-xl">Edit Username</h1>
          <label>
            <div className="flex justify-between">
              <span className="truncate ... pr-5">{user.username} </span>
              {editUsername === false ? (
                <Button
                  variant="contained"
                  className={editUsername == false ? "" : "hidden"}
                  onClick={() => {
                    setEditUsername(true);
                    setEditEmail(false);
                    setEditPassword(false);
                    setEditName(false);
                    setEditPhone(false);
                    setDeleteAccount(false);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <div></div>
              )}
            </div>
            <input
              type="text"
              className={
                editUsername == true ? "w-full px-3 py-2 my-2" : "hidden"
              }
              placeholder="Insert new username"
              required
              onChange={(e) => {
                setNewData({ ...newData, username: e.target.value });
              }}
            />
          </label>
          <div
            className={
              editUsername == true
                ? "w-full py-2 flex justify-between"
                : "hidden"
            }
          >
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                setEditUsername(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="success"
              onClick={() => {
                setEditUsername(true);
              }}
            >
              Save
            </Button>
          </div>
        </form>

        {/* edit name */}
        <form
          className="mx-auto bg-gray-100 p-8 rounded-3xl w-96 flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const token = localStorage.getItem("token");
            const response = await fetch(
              `http://localhost:3000/api/auth/edit-name/${id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newData),
              }
            );
            if (response.ok) {
              setUser(newData);
              navigate(`/`);
            }
            const message = await response.text();
            alert(message);
          }}
        >
          <h1 className="text-center text-xl">Edit Name</h1>
          <label>
            <div className="flex justify-between">
              <span className="truncate ... pr-5">{user.name} </span>
              {editName === false ? (
                <Button
                  variant="contained"
                  className={editName == false ? "" : "hidden"}
                  onClick={() => {
                    setEditName(true);
                    setEditEmail(false);
                    setEditPassword(false);
                    setEditUsername(false);
                    setEditPhone(false);
                    setDeleteAccount(false);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <div></div>
              )}
            </div>
            <input
              type="text"
              className={editName == true ? "w-full px-3 py-2 my-2" : "hidden"}
              placeholder="Insert new name"
              required
              onChange={(e) => {
                setNewData({ ...newData, name: e.target.value });
              }}
            />
          </label>
          <div
            className={
              editName == true ? "w-full py-2 flex justify-between" : "hidden"
            }
          >
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                setEditName(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="success"
              onClick={() => {
                setEditName(true);
              }}
            >
              Save
            </Button>
          </div>
        </form>

        {/* edit phone */}
        <form
          className="mx-auto bg-gray-100 p-8 rounded-3xl w-96 flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const token = localStorage.getItem("token");
            const response = await fetch(
              `http://localhost:3000/api/auth/edit-phone/${id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newData),
              }
            );
            if (response.ok) {
              setUser(newData);
              navigate(`/`);
            }
            const message = await response.text();
            alert(message);
          }}
        >
          <h1 className="text-center text-xl">Edit Phone Number</h1>
          <label>
            <div className="flex justify-between">
              <span className="truncate ... pr-5">{user.phone} </span>
              {editPhone === false ? (
                <Button
                  variant="contained"
                  className={editPhone == false ? "" : "hidden"}
                  onClick={() => {
                    setEditPhone(true);
                    setEditEmail(false);
                    setEditPassword(false);
                    setEditUsername(false);
                    setEditName(false);
                    setDeleteAccount(false);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <div></div>
              )}
            </div>
            <input
              type="text"
              className={editPhone == true ? "w-full px-3 py-2 my-2" : "hidden"}
              placeholder="Insert your new phone number"
              required
              onChange={(e) => {
                setNewData({ ...newData, phone: e.target.value });
              }}
            />
          </label>
          <div
            className={
              editPhone == true ? "w-full py-2 flex justify-between" : "hidden"
            }
          >
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                setEditPhone(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="success"
              onClick={() => {
                setEditPhone(true);
              }}
            >
              Save
            </Button>
          </div>
        </form>

        {/* delete account */}
        <form
          className="mx-auto bg-gray-100 p-8 rounded-3xl w-96 flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setConfirmDeleteAccount({
              ...confirmDeleteAccount,
              email: user.email,
            });
            const token = localStorage.getItem("token");
            const response = await fetch(
              `http://localhost:3000/api/auth/delete-account/${id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(confirmDeleteAccount),
              }
            );
            if (response.ok) {
              setUser(null);
              navigate(`/`);
            }
            const message = await response.text();
            alert(message);
          }}
        >
          <h1 className="text-center text-xl">Delete Account</h1>
          <label>
            <div className="flex justify-center">
              {deleteAccount === false ? (
                <Button
                  variant="contained"
                  color="warning"
                  className={deleteAccount == false ? "" : "hidden"}
                  onClick={() => {
                    setDeleteAccount(true);
                    setEditEmail(false);
                    setEditPassword(false);
                    setEditUsername(false);
                    setEditName(false);
                    setEditPhone(false);
                  }}
                >
                  Delete Account
                </Button>
              ) : (
                <div></div>
              )}
            </div>
            <input
              type="password"
              className={
                deleteAccount == true ? "w-full px-3 py-2 my-2" : "hidden"
              }
              placeholder="Confirm your password"
              required
              onChange={(e) => {
                setConfirmDeleteAccount({
                  ...confirmDeleteAccount,
                  confirmPassword: e.target.value,
                });
              }}
            />
          </label>
          <div
            className={
              deleteAccount == true
                ? "w-full py-2 flex justify-between"
                : "hidden"
            }
          >
            <Button
              variant="contained"
              color="info"
              onClick={() => {
                setDeleteAccount(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="warning"
              onClick={() => {
                setDeleteAccount(true);
              }}
            >
              Delete Account
            </Button>
          </div>
        </form>
      </main>
    );
  } else {
    return <Navigate to="/login" />;
  }
}
