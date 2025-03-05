import { HashRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import PasswordChange from "./PasswordChange";
import Report from "./Report";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/reset-password" element={<PasswordChange />} />
        <Route path="/meeting-report" element={<Report />} />
      </Routes>
    </Router>
  );
}
