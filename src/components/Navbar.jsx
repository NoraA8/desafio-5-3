import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-secondary text-white text-end py-3 px-5">
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/pokemones">Pokemones</NavLink>
    </nav>
  );
}
