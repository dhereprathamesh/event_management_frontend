import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import EventDashboard from "../pages/EventDashboard";
import CreateEvent from "../pages/CreateEvent";
import GuestSignIn from "../pages/GuestSignIn";
import { Toaster } from "react-hot-toast";
import PageNotFound from "../pages/PageNotFound";
import UpdateEvent from "../pages/UpdateEvent";

const AppRouter = () => {
  const routes = [
    { path: "/", element: <SignIn /> },
    { path: "/signUp", element: <SignUp /> },
    { path: "/event-dashboard", element: <EventDashboard /> },
    { path: "/create-event", element: <CreateEvent /> },
    { path: "/edit-event/:eventId", element: <UpdateEvent /> },
    { path: "/guest-signIn", element: <GuestSignIn /> },
  ];

  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
