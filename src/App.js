import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Places from "./componentes/Places/Places";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/places" element={<Places />} />
      </Routes>
    </div>
  );
}

export default App;
