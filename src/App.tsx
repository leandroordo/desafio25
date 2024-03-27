import "./App.css";
import ClimaCiudad from "./components/climaCiudad";

function App() {
  return (
    // Fondo
    <div className="flex items-center justify-center h-screen bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300">
      <ClimaCiudad />
    </div>
  );
}

export default App;
