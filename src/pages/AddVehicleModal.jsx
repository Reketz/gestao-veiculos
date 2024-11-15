import React, { useEffect, useState } from 'react';
import { addVehicle } from '../services/addVehicle';
import FormRegister from '../components/FormRegister';
import { updateVehicle } from '../services/updateVehicle';

function AddVehicleModal({ onClose, onAddVehicle, onEditVehicle, selectedVehicle }) {
  const [formData, setFormData] = useState({
    model: '',
    brand: '',
    year: '',
    color: '',
    plate: '',
  });

  useEffect(() => {
    if (selectedVehicle) {
      setFormData(selectedVehicle);
    }
  }, [selectedVehicle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedVehicle) {
      const response = await updateVehicle(selectedVehicle.id, formData);
      onEditVehicle(response.data);
    } else {
      const response = await addVehicle(formData);
      onAddVehicle(response.data);
    }
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{selectedVehicle ? 'Editar Veículo' : 'Adicionar um Novo Veículo'}</h2>
        <FormRegister formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} onClose={onClose} />
      </div>
    </div>
  );
}

export default AddVehicleModal;
