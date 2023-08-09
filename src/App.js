import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/UI/AppRouter";
import { AuthContext } from "./context";

const App = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("Authorized")) setIsAuth(true);
  }, []);

  return (
    <div className="wrapper">
      <AuthContext.Provider value={{
        isAuth, 
        setIsAuth
      }}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
