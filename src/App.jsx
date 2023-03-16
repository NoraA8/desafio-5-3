import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Pokemon from "./views/Pokemon";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Pokemones />} path="/pokemones" />
          <Route path="/pokemones/:name" element={<Pokemon />} />
        </Routes>
      </div>
    </>
  );
}
