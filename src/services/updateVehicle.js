import api from "./api";

export const updateVehicle = (id, vehicle) => api.put(`/vehicles/${id}`, vehicle);
