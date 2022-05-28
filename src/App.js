import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Tickets from "./Components/Tickets/Ticket";
import Header from "./Components/Header/Header";
import Profile from "./Components/User Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChallengeForm from "./Components/Dashboard/ChallengeForm";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/tickets" element={<Tickets />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/newChallenge" element={<ChallengeForm />} />
          <Route exact path="/statistics" element={<Statistics />} />
          <Route path="*" element={<Dashboard />} />
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
