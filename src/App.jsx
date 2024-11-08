import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Description from "./pages/Description";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/auth/SignUp";
import AddJob from "./pages/AddJob";
import Landing from "./pages/Landing";
import AuthContextProvider from "./context/AuthContextProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import LandingLayout from "./components/landingComponents/LandingLayout";
import AuthOptionPage from "./pages/auth/AuthOptionPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path=":id" element={<Description />} />
          </Route>
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/" element={<LandingLayout />}>
            <Route path="welcome" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="option" element={<AuthOptionPage />} />
          </Route>
        </Route>
      </>
    )
  );

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
