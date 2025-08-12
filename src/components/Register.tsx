// src/pages/auth/Register.tsx
import { useState } from "react";
import { useRegister } from "@/hook/useAuth";
import { useNavigate } from "@tanstack/react-router";
import { Input } from "@/components/input";

const Register = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useRegister();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLocalError(null);

    if (!name || !email || !password || !confirm) {
      setLocalError("Fill every field");
      return;
    }
    if (password !== confirm) {
      setLocalError("password isn't matching");
      return;
    }

    mutate(
      { name, email, password },
      {
        onSuccess: () => {
          navigate({ to: "/" });
        },
      }
    );
  }

  return (
    <div className="">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        Create account
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Fill in your details to get started.
      </p>

      <form className="space-y-4" onSubmit={onSubmit}>
        <Input
          label="Name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Repeat your password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        {(localError || error) && (
          <p className="text-sm text-red-600 text-center">
            {localError ?? "Something went wrong"}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
          disabled={isPending}
        >
          {isPending ? "Creating..." : "Create account"}
        </button>
      </form>

      {/* <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?
        <a href="/login" className="font-medium text-blue-500 hover:underline">
          Sign in
        </a>
      </p> */}
    </div>
  );
};

export default Register;
