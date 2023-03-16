import pikachu from "../assets/img/pikachu.png";

export default function Home() {
  return (
    <div>
      <h1 className="text-center mb-0 mt-5">Bienvenido maestro pokemón</h1>
      <div className="d-flex justify-content-center mt-4">
        <img src={pikachu} alt="Pikachu" className="size" />
      </div>
    </div>
  );
}
