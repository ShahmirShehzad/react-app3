import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import Login from "./Login";
import Name from "./Name.js";
import Table1 from "./Table1.js";
import Home from "./component/Home.js";
import About from "./component/About.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Page404 from "./component/Page404.js";
import Navbar from "./component/Navbar.js";
import Users from "./component/Users.js";
import Filter from "./component/Filter.js";
import Company from "./component/Company.js";
import Contact from "./component/Contact.js";
import Channel from "./component/Channel.js";
import Other from "./component/Other.js";
import Login from "./component/Login.js";
import Protected from "./component/Protected.js";
import UserMap from "./component/UserMap.js";

function App() {
  const [data, setData] = useState(0);
  function updateData() {
    setData(data + 1);
  }
  console.log("Count");
  return (
    <div className="App">
      {/* <h1>{data}</h1>
      <button onClick={updateData}>Increment</button> */}
      {/* <Login />; */}
      {/* <Name /> */}
      {/* <Table1 /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<Protected Comp={Home} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<Protected Comp={About} />}></Route>
          {/* <Route path="/*" element={<Page404 />}></Route> */}
          <Route path="/user/:name" element={<Users />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
          <Route path="/filter" element={<Protected Comp={Filter} />} />
          <Route path="/users" element={<UserMap />} />
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
