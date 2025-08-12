import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import Login from "./pages/Auth";
import MovieDashboard from "./pages/Dashboard";
import DefaultLayout from "@/layout/DefaultLayout";
import { getToken } from "./helpers/auth";

const rootRoute = createRootRoute({
  //create rootLayout
  component: DefaultLayout,
});

// Public

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => <Login />,
  beforeLoad: () => {
    if (getToken()) throw redirect({ to: "/" });
  },
});

const appRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "app",
  beforeLoad: () => {
    if (!getToken()) {
      throw redirect({ to: "/login", replace: true });
    }
  },
  // Se tiver um layout de dashboard, pode usar component: DashboardLayout
  component: () => <Outlet />,
});

const movieDashboard = createRoute({
  getParentRoute: () => appRoute,
  path: "/",
  component: () => <MovieDashboard />,
  //   component: () => import('@/routes/Dashboard').then(m => <m.default />), Use this to lazy loading
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  appRoute.addChildren([movieDashboard]),
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
