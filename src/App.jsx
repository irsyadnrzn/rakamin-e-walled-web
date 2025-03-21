import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TopUpPage from "./pages/TopUpPage";
import TransferPage from "./pages/TransferPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const location = useLocation();
  const isLogin = location.pathname !== "/login";
  const isRegister = location.pathname !== "/register";
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && <NavBar />}
      {/* <NavBar/> */}

      <div className={!hideLayout ? "mt-16 p-4" : ""}>
        <Routes>
          <Route path="/home" element={<DashboardPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/topup" element={<TopUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
