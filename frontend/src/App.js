import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Authentication from "./pages/Authentication";
import { AuthProvider } from "./contexts/AuthContext";
import VideoMeetComponent from "./pages/VideoMeet";
import Home from "./pages/Home";
import History from "./pages/History";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/:url" element={<VideoMeetComponent/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
