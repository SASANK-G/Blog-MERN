import TopBar from "./components/TopBar/TopBar";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import Setting from "./pages/Setting/Setting";
// import SinglePage from "./pages/SinglePage/SinglePage";
// import WritePage from "./pages/WritePage/WritePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, useContext } from "react";
import { Context } from "./context/Context";

const HomePage = React.lazy(() => import("./pages/Home/Home"));
const LoginPage = React.lazy(() => import("./pages/Login/Login"));
const RegisterPage = React.lazy(() => import("./pages/Register/Register"));
const SettingPage = React.lazy(() => import("./pages/Setting/Setting"));
const SinglePage = React.lazy(() => import("./pages/SinglePage/SinglePage"));
const WritePage = React.lazy(() => import("./pages/WritePage/WritePage"));

function App() {
  const { user } = useContext(Context);
  return (
    <Suspense fallback="oops!....">
      <Router>
        <TopBar />
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <HomePage /> : <LoginPage />}
          ></Route>
          {/* <Route path="/posts" element={<HomePage />}></Route> */}
          <Route
            path="/register"
            element={user ? <HomePage /> : <RegisterPage />}
          ></Route>

          <Route path="/login" element={<LoginPage />}></Route>

          <Route
            path="/write"
            element={user ? <WritePage /> : <LoginPage />}
          ></Route>

          <Route
            path="/settings"
            element={user ? <SettingPage /> : <RegisterPage />}
          ></Route>

          <Route path="/post/:id" element={<SinglePage />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
