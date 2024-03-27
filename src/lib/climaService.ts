import api from "api";

const climaService = {
  getClimateData: async (cityId: number) => {
    return await api.get("weather", {
      params: {
        id: cityId,
      },
    });
  },
};

export default climaService;
