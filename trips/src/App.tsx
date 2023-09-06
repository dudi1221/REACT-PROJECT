import './App.css';
import Router from './Router';
import { UserTokenProvider } from './Components/TokenContext/TokenContext';

function App() {

  return (
    <>
    <UserTokenProvider>
      <Router/>
    </UserTokenProvider>
    </>
  )
}

export default App
