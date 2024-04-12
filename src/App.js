import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import userContext from './utils/userContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: 'Naman',
    email: 'guptanaman011@gmail.com'
  })
  return (
    <div className="App">
      <userContext.Provider value={{
        user: user,
        setUser: setUser
      }}>
      <Header /> 
      <Outlet />
      <Footer />
      </userContext.Provider>
    </div>
  );
}

export default App;
