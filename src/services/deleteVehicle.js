import api from "./api";

export const deleteVehicle = (id) => api.delete(`/vehicles/${id}`);