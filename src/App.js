import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./Pages/HomePage"));
const MovieDetails = lazy(() => import("./components/MovieDetails"));
const LoginForm = lazy(() => import("./layout/LoginForm"));
const RegisterForm = lazy(() => import("./layout/RegisterForm"));
const PageIsUpdating = lazy(() => import("./layout/PageIsUpdating"));
function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/movieDetail/:movieID"
            element={<MovieDetails></MovieDetails>}
          ></Route>
          <Route path="/log_in" element={<LoginForm></LoginForm>}></Route>
          <Route
            path="/register"
            element={<RegisterForm></RegisterForm>}
          ></Route>
          <Route
            path="/pageUpdating"
            element={<PageIsUpdating></PageIsUpdating>}
          ></Route>
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
