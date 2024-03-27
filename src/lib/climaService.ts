import api from "api";
import { OpenWeatherResponseType } from "./api/openweatherResponseType";

const climaService = {
  getClimateData: async (cityId: number) => {
    return await api.get<OpenWeatherResponseType>("weather", {
      params: {
        id: cityId,
      },
    });
  },
};

export default climaService;
