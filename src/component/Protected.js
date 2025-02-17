import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Protected(props) {
  const { Comp } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = sessionStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <>
      <Comp />
    </>
  );
}

export default Protected;
