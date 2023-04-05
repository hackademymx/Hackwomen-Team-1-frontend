/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import FormSecurePlace from "componentes/FormSecurePlace/FormSecurePlace";
import Place from "componentes/Place/Place";
import Places from "./componentes/Places/Places";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/places" element={<Places />} />
        <Route path="/places/new" element={<FormSecurePlace />} />
        <Route path="/places/:id" element={<Place />} />
      </Routes>
    </div>
  );
}

export default App;
