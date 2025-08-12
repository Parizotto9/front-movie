import { useState } from "react";
import { useLogin } from "@/hook/useAuth";
import { useNavigate } from "@tanstack/react-router";
import { Input } from "@/components/input";

const Login = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate({ to: "/" });
        },
      }
    );
  }

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        Welcome Back!
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        We missed you! Please enter your details.
      </p>

      <form className="space-y-4" onSubmit={onSubmit}>
        <Input
          label="Email"
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className="text-sm text-red-600 text-center">
            Something went wrong
          </p>
        )}
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
          disabled={isPending}
        >
          {isPending ? "Loading" : "Sign In"}
        </button>
      </form>
    </>
  );
};

export default Login;
