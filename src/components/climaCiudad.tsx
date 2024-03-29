import { useEffect, useState } from "react";
import { OpenWeatherResponseType } from "src/lib/api/openweatherResponseType";
import climaService from "src/lib/climaService.ts";

function ClimaCiudad() {
  const [cityId, setCityId] = useState(3433955);
  const [weatherData, setWeatherData] =
    useState<OpenWeatherResponseType | null>();
  const [haceMuchoCalor, setHaceMuchoCalor] = useState(false);
  const [haceMuchoFrio, setHaceMuchoFrio] = useState(false);

  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCityId(Number(e.currentTarget.value));
  };

  function getDireccion(angle: number): string {
    const direcciones = ["NE", "E", "SE", "S", "SO", "O", "NO", "N"];
    if (angle > 360 || angle < 23) return "N";

    const index = Math.floor((angle - 23) / 45);
    if (index >= 0 && index < direcciones.length) {
      return direcciones[index];
    }

    return "";
  }

  useEffect(() => {
    async function getData(cityId: number) {
      if (cityId > 0) {
        const result = await climaService.getClimateData(cityId);
        console.log(result);
        setWeatherData(result);
        if (result?.main?.temp) {
          if (result.main.temp > 30) {
            setHaceMuchoCalor(true);
          } else {
            setHaceMuchoCalor(false);
          }
          if (result.main.temp < 10) {
            setHaceMuchoFrio(true);
          } else {
            setHaceMuchoFrio(false);
          }
        }
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
          <option value="3433955">Buenos Aires (Argentina)</option>
          <option value="2673722">Estocolmo (Suecia)</option>
          <option value="4855951">Fairbank (Alaska)</option>
          <option value="105343">Jeda (Arabia Saudita)</option>
          <option value="6359304">Madrid (España)</option>
          <option value="524894">Moscú (Rusia)</option>
          <option value="5128638">Nueva York (EEUU)</option>
          <option value="2988506">París (Francia)</option>
          <option value="3451189">Río de Janeiro (Brasil)</option>
          <option value="3169070">Roma (Italia)</option>
          <option value="3871336">Santiago (Chile)</option>
          <option value="2357048">Uagadugú (Burkina Faso)</option>
        </select>
      </div>
      {/* Información */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Icono, temperatura, estado del tiempo */}
        <div className="flex flex-col md:mr-8">
          {/* Icono, temperatura */}
          <div className="flex items-center ">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`}
              alt="Icono del clima"
              className="-mt-5 -ml-10"
            />
            {/* Temperatura */}
            <div>
              <p className="text-7xl font-bold tracking-tight -ml-5">
                {weatherData?.main.temp.toFixed(1)}º
                <span className="text-2xl -ml-4"> C</span>
              </p>
            </div>
          </div>
          {/* Estado del tiempo */}
          <div>
            <p className="text-lg font-bold tracking-tight text-center">
              {weatherData?.weather[0]?.description}
            </p>
          </div>
          <div>
            {haceMuchoCalor && (
              <p className="text-base font-bold text-center text-red-600 ">
                Hace mucho calor 🥵
              </p>
            )}
            {haceMuchoFrio && (
              <p className="text-base font-bold text-center text-blue-700 ">
                Hace mucho frío 🥶
              </p>
            )}
          </div>
        </div>
        {/* Tabla de valores */}
        <div className="mx-auto">
          {/* Container */}
          <div className="grid grid-cols-[minmax(100px,_1fr)_100px] gap-x-10 gap-y-2">
            <p>Sensación térmica</p>
            <p className="text-right">
              {weatherData?.main.feels_like.toFixed(1)}ºC
            </p>
            <p>Presión</p>
            <p className="text-right">{weatherData?.main.pressure} hPa</p>
            <p>Humedad</p>
            <p className="text-right">{weatherData?.main.humidity}%</p>
            <p>Visibilidad</p>
            <p className="text-right">
              {(weatherData?.visibility || 0 / 1000)?.toFixed(0)} m
            </p>
            <p>Viento</p>
            <p className="text-right">
              {weatherData?.wind.speed.toFixed(0)}
              {" Km/h "}
              {weatherData?.wind.deg && getDireccion(weatherData?.wind.deg)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClimaCiudad;
