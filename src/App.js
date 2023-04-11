/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import Place from "components/Place/Place";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/places/:id" element={<Place />} />
      </Routes>
    </div>
  );
}

export default App;
