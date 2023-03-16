import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Pokemon() {
  const params = useParams();
  const navigate = useNavigate();

  const [pokename, setPokename] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
      );
      const data = await res.json();
      setPokename(data.stats);
    } catch (error) {
      console.log(error);
      navigate("/pokemones");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="mt-5">
        <h2>{params.name}</h2>
        <ul>
          {pokename.map((item, i) => (
            <>
              <li key={i}>
                {item.stat.name}: {item.base_stat}
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
