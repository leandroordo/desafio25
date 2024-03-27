import "./App.css";

function App() {
  return (
    // Fondo
    <div className="flex items-center justify-center h-screen bg-slate-100 dark:bg-gray-600">
      {/* Card */}
      <div className="p-8 bg-slate-100 dark:bg-gray-800 rounded-lg shadow flex flex-col gap-4 dark:text-gray-50">
        {/* Ciudad */}
        <div className="flex items-center gap-4 my-6 text-xl">
          <label htmlFor="">Ciudad</label>
          <select>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Madrid">Madrid</option>
            <option value="Paris">París</option>
            <option value="Nueva York">Nueva York</option>
            <option value="Santiago de Chile">Santiago de Chile</option>
          </select>
        </div>
        {/* Información */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Icono, temperatura, estado del tiempo */}
          <div className="flex flex-col">
            {/* Icono, temperatura */}
            <div className="flex items-center">
              <img
                src=" https://openweathermap.org/img/wn/10d@4x.png"
                alt="Icono del clima"
              />
              {/* Temperatura */}
              <div>
                <p className="text-7xl font-bold tracking-tight">
                  24
                  <span className=""> ºC</span>
                </p>
              </div>
            </div>
            {/* Estado del tiempo */}
            <div>
              <p>Parcialmente nublado</p>
            </div>
          </div>
          {/* Tabla de valores */}
          <div>
            {/* Container */}
            <div>
              <p>Sensación térmica</p>
              <p>25ºC</p>
              <p>Presión</p>
              <p>1018 hPa</p>
              <p>Humedad</p>
              <p>68%</p>
              <p>Visibilidad</p>
              <p>10000 m</p>
              <p>Viento</p>
              <p>24Km E</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
