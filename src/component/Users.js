import { useParams } from "react-router-dom";

function Users() {
  const params = useParams();
  const { name } = params;
  console.log(name);
  return (
    <>
      <h1>This is {name}'s page</h1>;
    </>
  );
}
export default Users;
