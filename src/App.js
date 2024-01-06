import { useSelector } from 'react-redux';
import './App.css';
import LandingPage from './LandingPage';
import LoginPage from './Components/LoginPage';

function App() {
  const isUserAuthenticated=useSelector((state)=>state.isUserAuthenticated)
  return (
    <div className="App">
      {isUserAuthenticated?<LandingPage/>:<LoginPage/>}
    </div>
  );
}

export default App;
