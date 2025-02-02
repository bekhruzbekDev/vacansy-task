import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { Company } from "./pages/company/company";
import { PrivateRoute } from "./route/private-route";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            // @ts-ignore
            <PrivateRoute>
              <Company />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
