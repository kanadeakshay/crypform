import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import ProfileFillPage from "./pages/profilefillpage";
import RegistrationPage from "./pages/registrationpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile-fill" element={<ProfileFillPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
