import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import dance from "/mask-dance.png";
import { UserContext } from "../App";

export default function Registration() {
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
    phone: "",
  });
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <main
        className="flex min-h-screen items-center justify-center
       mt-28"
      >
        <img src={dance} className="h-0 lg:h-80" />
        <form
          className="p-4 lg:w-1/4 flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await fetch(
              "http://localhost:3000/api/users/register",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(signUp),
              }
            );
            if (response.ok) {
              alert("Your account is successfully created.");
            } else {
              const message = await response.text();
              alert(message);
            }
          }}
        >
          <h1 className="text-center text-2xl font-bold">Sign Up</h1>
          <TextField
            variant="outlined"
            type="email"
            label="Email"
            className="w-full"
            required
            autoFocus
            onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
          />
          <TextField
            variant="outlined"
            type="password"
            label="Password"
            className="w-full"
            required
            onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
          />
          <TextField
            variant="outlined"
            type="text"
            label="Name"
            className="w-full"
            required
            onChange={(e) => setSignUp({ ...signUp, name: e.target.value })}
          />
          <TextField
            variant="outlined"
            type="text"
            label="Username"
            className="w-full"
            required
            onChange={(e) => setSignUp({ ...signUp, username: e.target.value })}
          />
          <TextField
            variant="outlined"
            type="tel"
            label="Phone"
            className="w-full"
            required
            onChange={(e) => setSignUp({ ...signUp, phone: e.target.value })}
          />
          <div className="flex justify-between">
            <Button type="submit" variant="contained" className="w-full">
              Register
            </Button>
          </div>
        </form>
      </main>
    );
  }
}
