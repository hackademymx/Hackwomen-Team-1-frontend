/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import Place from "componentes/Place/Place";
import Places from "./componentes/Places/Places";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/places/:id" element={<Place />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </div>
  );
}

export default App;
