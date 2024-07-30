import React, { useState } from "react";

function Login() {
  const [Uname, setUname] = useState("");
  const [Pwd, setPwd] = useState("");
  const [uErr, setuErr] = useState(false);
  const [pErr, setpErr] = useState(false);

  function preventDef(e) {
    if (Uname.length >= 3 && Pwd.length >= 3) {
      alert("Valid info");
    } else {
      alert("Invalid info");
    }
    e.preventDefault();
  }

  function setUsername(e) {
    const item = e.target.value;

    if (item.length < 3) {
      setuErr(false);
    } else {
      setuErr(true);
    }

    setUname(item);
  }

  function setPassword(e) {
    const item = e.target.value;

    if (item.length < 3) {
      setpErr(false);
    } else {
      setpErr(true);
    }

    setPwd(item);
  }

  return (
    <div>
      <form onSubmit={preventDef}>
        <input
          type="text"
          onChange={setUsername}
          placeholder="Enter user name"
        ></input>
        {uErr ? <span></span> : "User name not valid"}
        <br></br>
        <br></br>
        <input
          type="text"
          onChange={setPassword}
          placeholder="Enter password"
        ></input>
        {pErr ? <span></span> : "Password not valid"}
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
