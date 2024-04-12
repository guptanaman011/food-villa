import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  const [user, setUser] = useState({
    name: "Naman",
    email: "guptanaman011@gmail.com",
  });
  return (
    <div className="App">
      <Provider store={store}>
        <userContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
