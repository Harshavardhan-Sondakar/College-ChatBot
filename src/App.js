import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup"; // Fixed typo in the import
import Login from "./components/Login";
import Chatbot from "./components/Chatbot/chat";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/chat" exact element={<Chatbot />} />
      {/* Catch-all route to handle unmatched paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
