import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigation = (url) => {
    navigate(url);
  };
  return (
    <>
      <h1>Home page</h1>
      <Link to={"/about"}>Go to about page</Link>
      <br />
      <button onClick={() => navigation("/about")}>Go to about page</button>
      <br />
      <button onClick={() => navigation("/filter")}>Go to filter page</button>
    </>
  );
}

export default Home;
