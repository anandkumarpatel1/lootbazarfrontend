import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const AdminPrivateRoute = () => {
  let auth = localStorage.getItem("user");

  useEffect(() => {
    if (!auth) {
      <Navigate to="/login" />;
    }
  }, []);

  auth = JSON.parse(auth);
  return (auth ? (auth.role === 'admin' ? <Outlet /> : <Navigate to = '/login' />) : <Navigate to = '/login'/>)
}

export default AdminPrivateRoute

