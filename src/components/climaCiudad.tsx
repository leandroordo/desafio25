import { useEffect, useState } from "react";
import climaService from "src/lib/climaService.ts";

function ClimaCiudad() {
  const [cityId, setCityId] = useState(0);

  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    alert("City Id: " + e.currentTarget.value);
    setCityId(Number(e.currentTarget.value));
  };

  useEffect(() => {
    async function getData(cityId: number) {
      if (cityId > 0) {
        const result = await climaService.getClimateData(cityId);
        console.log(result);
      }
    }
    getData(cityId);
  }, [cityId]);

  return (
    // Card
    <div className="p-8 bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col gap-4 dark:text-gray-50">
      {/* Ciudad */}
      <div className="flex items-center gap-4 my-6 text-lg">
        <label htmlFor="" className="mr-6">
          Ciudad
        </label>
        <select
          className="dark:bg-gray-800"
          defaultValue={3433955}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleChangeCity(e)
          }
        >
          <option value="3433955">Buenos Aires</option>
          <option value="6359304">Madrid</option>
          <option value="5128638">Nueva York</option>
          <option value="2988506">París</option>
          <option value="3451189">Río de Janeiro</option>
          <option value="3169070">Roma</option>
          <option value="3871336">Santiago de Chile</option>
        </select>
      </div>
      {/* Información */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Icono, temperatura, estado del tiempo */}
        <div className="flex flex-col md:mr-8">
          {/* Icono, temperatura */}
          <div className="flex items-center ">
            <img
              src=" https://openweathermap.org/img/wn/10d@4x.png"
              alt="Icono del clima"
              className="-mt-5 -ml-10"
            />
            {/* Temperatura */}
            <div>
              <p className="text-7xl font-bold tracking-tight -ml-5">
                24º
                <span className="text-2xl -ml-4"> C</span>
              </p>
            </div>
          </div>
          {/* Estado del tiempo */}
          <div>
            <p className="text-lg font-bold tracking-tight text-center">
              Parcialmente nublado
            </p>
          </div>
          <div>
            <p className="text-base font-bold text-center text-red-600 ">
              Hace mucho calor 🥵
            </p>
            <p className="text-base font-bold text-center text-blue-700 ">
              Hace mucho frío 🥶
            </p>
          </div>
        </div>
        {/* Tabla de valores */}
        <div className="mx-auto">
          {/* Container */}
          <div className="grid grid-cols-[minmax(150px,_1fr)_80px] gap-x-10 gap-y-2">
            <p>Sensación térmica</p>
            <p className="text-right">25ºC</p>
            <p>Presión</p>
            <p className="text-right">1018 hPa</p>
            <p>Humedad</p>
            <p className="text-right">68%</p>
            <p>Visibilidad</p>
            <p className="text-right">10000 m</p>
            <p>Viento</p>
            <p className="text-right">24Km E</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClimaCiudad;
