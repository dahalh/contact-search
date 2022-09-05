import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactInfoCard from "./pages/contact/ContactInfoCard";
import { ContactPage } from "./pages/contact/ContactPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route path="/contact/:id" element={<ContactInfoCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
