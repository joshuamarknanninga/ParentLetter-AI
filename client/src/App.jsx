import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import NewEmail from "./pages/NewEmail";
import SavedEmails from "./pages/SavedEmails";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-email" element={<NewEmail />} />
        <Route path="/saved-emails" element={<SavedEmails />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
