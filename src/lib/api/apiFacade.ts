import axios from "axios";

const instance = axios.create({
  //lat=-34.603683&lon=-58.381557&lang=es&appid=01bf5032d1f20700658d6430df5193f8&units=metric
  baseURL: "https://api.openweathermap.org/data/2.5/",
  timeout: 1000,
});

// Interceptores
instance.interceptors.request.use(
  function (config) {
    config.params = {
      ...config.params,
      lang: "es",
      units: "metric",
      appid: "01bf5032d1f20700658d6430df5193f8",
    };
    return config;
  },
  function (error) {
    console.error("Error al llamar a la API: ", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
