import { useState } from "react";
import Login from "@/components/Login";
import Register from "@/components/Register";

const Auth = () => {
  const [singIn, setSingIn] = useState(true);
  return (
    <div className="bg-amber-100 flex p-4 h-full items-center justify-center">
      <div className="w-full h-fit max-w-sm rounded-xl bg-white p-6 shadow-lg">
        {singIn ? <Login /> : <Register />}

        <button
          type="button"
          onClick={() => setSingIn(!singIn)}
          className="text-blue-500 hover:underline text-sm mt-2 cursor-pointer"
        >
          {singIn
            ? "Don't have an account? Sign up"
            : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
