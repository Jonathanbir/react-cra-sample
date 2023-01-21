import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [navigate]);

  return <>這是不存在的頁面</>;
}
