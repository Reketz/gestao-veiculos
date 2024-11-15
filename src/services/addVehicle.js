import api from "./api";

export const addVehicle = (vehicle) => api.post('/vehicles', vehicle);