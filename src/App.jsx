import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ReturnForm from "./components/ReturnForm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/return" element={<ReturnForm />} />
      </Routes>
    </Router>
  );
}

export default App;
