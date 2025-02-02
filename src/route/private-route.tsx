import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return token ? children : null;
};
