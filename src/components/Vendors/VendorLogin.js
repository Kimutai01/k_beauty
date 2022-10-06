import React, { useState } from "react";
import Vendor from "./Vendor";
import Login from "./Login";
import Navbar from "../Navbar";

const VendorLogin = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <Navbar />
      {login ? <Vendor /> : <Login login={login} setLogin={setLogin} />}
      <button onClick={() => setLogin(!login)}>Toggle</button>
    </div>
  );
};

export default VendorLogin;
