import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const login = localStorage.getItem("login");

  if (!login) {

    return <Navigate to="/login" />;

  }

  return children;

}

export default ProtectedRoute;