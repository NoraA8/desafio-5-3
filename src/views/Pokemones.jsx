import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokemones() {
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState();

  const getData = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await res.json();
      setPokemons(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const pokemonSelected = e.target.value;
    setSelected(pokemonSelected);
  };

  const handleClick = () => {
    navigate(`/pokemones/${selected}`);
  };

  return (
    <>
      <h1 className="text-center mb-0 mt-5">Selecciona a un pokemon</h1>
      <div className="d-flex flex-column align-items-center mt-4">
        <select
          name="pokemonSelect"
          id="selectPokemons"
          className="form-select width-select"
          onChange={handleChange}
        >
          <option hidden value>
            Pokemones
          </option>
          {pokemons.map((item, index) => (
            <>
              <option key={index} value={item.name}>
                {item.name}
              </option>
            </>
          ))}
        </select>
        <button
          className="btn btn-secondary width-buton mt-4"
          onClick={handleClick}
        >
          Ver Detalle
        </button>
      </div>
    </>
  );
}
