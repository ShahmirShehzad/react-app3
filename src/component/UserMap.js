import { BrowserRouter, Link, NavLink } from "react-router-dom";

function UserMap() {
  const users = [
    {
      id: 1,
      name: "anil",
      email: "anil@test.com",
    },
    {
      id: 2,
      name: "sam",
      email: "sam@test.com",
    },
    {
      id: 3,
      name: "ben",
      email: "ben@test.com",
    },
    { id: 4, name: "ten", email: "ten@test.com" },
    { id: 5, name: "harry", email: "harry@test.com" },
  ];
  return (
    <>
      <h1>This is user mapping page</h1>
      {users.map((item) => (
        <div>
          <Link to={"/user/" + item.id} /> {item.name}
        </div>
      ))}
    </>
  );
}

export default UserMap;
