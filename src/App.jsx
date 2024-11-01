import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Description from "./pages/Description";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import AddJob from "./pages/AddJob";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path=":id" element={<Description />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
