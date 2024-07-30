import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About page</h1>
      <Link to={"/"}>Go to home page</Link>
      <li>
        <Link to={"/user/ali"}>Ali</Link>
      </li>
      <li>
        <Link to={"/user/umar"}>Umar</Link>
      </li>
    </>
  );
}

export default About;
