import "./CSS/Movies.css";
import Alert from "../components/Alert";
import Cards from "../components/Cards";
export function Movies() {
  console.log("m pages");
  return (
    <div className="container bienvenida">
      <h1 className="text-light text-center mt-3">MOVIES APP</h1>

      <Alert
        message="You can to visit my website where you can find other projects that I have developed."
        messageLink="View website"
      />
      <Cards />
    </div>
  );
}
