import TopBar from "./components/TopBar/TopBar";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import Setting from "./pages/Setting/Setting";
// import SinglePage from "./pages/SinglePage/SinglePage";
// import WritePage from "./pages/WritePage/WritePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const HomePage = React.lazy(() => import("./pages/Home/Home"));
const LoginPage = React.lazy(() => import("./pages/Login/Login"));
const RegisterPage = React.lazy(() => import("./pages/Register/Register"));
const SettingPage = React.lazy(() => import("./pages/Setting/Setting"));
const SinglePage = React.lazy(() => import("./pages/SinglePage/SinglePage"));
const WritePage = React.lazy(() => import("./pages/WritePage/WritePage"));

function App() {
  const currentUser = true;
  return (
    <Suspense fallback="Getting the data....">
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/"></Route>
          <Route path="/posts" element={<HomePage />}></Route>
          <Route
            path="/register"
            element={currentUser ? <HomePage /> : <RegisterPage />}
          ></Route>
          <Route
            path="/login"
            element={currentUser ? <HomePage /> : <LoginPage />}
          ></Route>
          <Route path="/post/:id" element={<SinglePage />}></Route>
          <Route
            path="/write"
            element={currentUser ? <WritePage /> : <LoginPage />}
          ></Route>
          <Route
            path="/settings"
            element={currentUser ? <SettingPage /> : <LoginPage />}
          ></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
