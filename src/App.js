import React, { useState, useEffect } from 'react';
import { getVehicles } from './services/getVehicles';
import VehicleList from './pages/VehicleList';
import AddVehicleModal from './pages/AddVehicleModal';
import './App.css';
import { deleteVehicle } from './services/deleteVehicle';

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null); // Estado para o veículo selecionado para edição

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const response = await getVehicles();
    setVehicles(response.data);
  };

  const handleAddVehicle = (vehicle) => {
    setVehicles([...vehicles, vehicle]);
    setShowModal(false);
  };

  const handleEditVehicle = (updatedVehicle) => {
    const updatedVehicles = vehicles.map((vehicle) =>
      vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
    );
    setVehicles(updatedVehicles);
    setShowModal(false);
  };

  const handleDeleteVehicle = async (vehicleId) => {
    await deleteVehicle(vehicleId);
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== vehicleId));
  };

  const openEditModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVehicle(null);
  };

  return (
    <div className="App">
      <aside>
        <h2>Funilaria Dois Irmãos</h2>
        <button onClick={() => setShowModal(true)}>Novo Veículo</button>
      </aside>
      <main>
        <h1>Meus Veículos</h1>
        <VehicleList vehicles={vehicles} onEdit={openEditModal} onDelete={handleDeleteVehicle} />
        {showModal && (
          <AddVehicleModal
            onClose={closeModal}
            onAddVehicle={handleAddVehicle}
            onEditVehicle={handleEditVehicle}
            selectedVehicle={selectedVehicle}
          />
        )}
      </main>
    </div>
  );
}

export default App;
