import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import gate from "/gate.png";
import { UserContext } from "../App";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <main className="flex flex-col min-h-screen items-center">
        <img
          src={gate}
          className="h-1/4
          mt-24
          lg:h-36"
        />
        <form
          className="mx-auto p-8 rounded-3xl w-96 flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await fetch(
              "http://localhost:3000/api/users/login",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(login),
              }
            );
            if (response.ok) {
              const auth = await response.json();
              localStorage.setItem("token", auth.token);
              await setUser(auth.user);
              alert("Login success.");
              navigate("/");
            } else {
              const message = await response.text();
              alert(message);
            }
          }}
        >
          <h1 className="text-center text-xl">Login</h1>

          <TextField
            variant="outlined"
            type="email"
            label="Email"
            className="w-full"
            required
            autoFocus
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />

          <TextField
            variant="outlined"
            type="password"
            label="Password"
            className="w-full"
            required
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <div className="flex justify-between w-full">
            <Button type="submit" variant="contained" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </main>
    );
  }
}
