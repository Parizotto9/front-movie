import { Outlet } from "@tanstack/react-router";
import { authStore } from "@/stores/auth";

export default function RootLayout() {
  const userName = authStore((s) => s.user?.name);
  const logout = authStore((s) => s.logout);
  return (
    <div className="h-screen flex flex-col">
      <header className="border-b p-4 font-semibold flex justify-between items-center">
        MovieApp
        {userName && (
          <div className="flex items-center">
            <span>{userName}</span>
            <button
              onClick={logout}
              className="bg-red-400 py-2 px-8 mx-2 rounded text-white"
            >
              Exit
            </button>
          </div>
        )}
      </header>
      <main className="container mx-auto flex-1 p-0 ">
        <Outlet />
      </main>
      <footer className=" p-4 text-sm w-full text-center">
        Parizotto © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
