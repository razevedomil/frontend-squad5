import Bairros from "../Bairros";
import Cards from "../Cards";
import "./Parallax.css";

const MyParallax = () => {
  return (
    <main className="moduleContent">
      <div className="module parallax parallax-1">
        <Cards />
        <Bairros />
      </div>
    </main>
  );
};

export default MyParallax;
