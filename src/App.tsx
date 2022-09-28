import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
// import Posts from "./pages/Posts";
import { ProtectedRoute } from "./auth/protected-route";
import { PageLoader } from "./components/page-loader";
import Profile from "./pages/Profile";

const LazyAbout = React.lazy(() => import("./pages/Posts"));

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/posts"
          element={
            <React.Suspense fallback="loading...">
              <ProtectedRoute component={LazyAbout} />
            </React.Suspense>
          }
        />
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
      </Routes>
    </div>
  );
}

export default App;
