import { useState } from "react";
import "./App.css";
import Homepage from "./pages/components/Homepage";

import Footer from "./pages/components/Footer";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const LoginTo = () => {
    setIsLogin(true);
    setIsAuth(true);
  }

  return (
    <>
      {isAuth ? (
        <>
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Signup setIsLogin={setIsLogin} />
          )}
        </>
      ) : (
        <>
          <Landingpage LoginTo={LoginTo}/>
          <Footer />
        </>
      )}

      {/* <Homepage/> */}
    </>
  );
}

export default App;
