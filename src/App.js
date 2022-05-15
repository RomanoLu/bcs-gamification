import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Tickets from './Components/Tickets/Ticket';
import Header from './Components/Header/Header';
import Profile from './Components/User Profile/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (

    <>

      <Header />
      <Router>
     
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/tickets" element={<Tickets/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route path="*" element={<Dashboard/>}/>
        </Routes>
    
    </Router>
    </>
  );
}

export default App;



/*
<>
<Routes>
  <Route path='/' element={<Home />}/>
</Routes>
</>
*/