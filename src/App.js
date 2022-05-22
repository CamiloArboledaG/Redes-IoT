import { Inicio } from "./components/Inicio";
import "./App.css";
import { Datos } from "./components/Datos";

function App() {
  return (
    <div className="App">
      <div className="Inicio">
        <Inicio />
      </div>
      <div>
        <Datos/>
      </div>
    </div>
  );
}

export default App;
