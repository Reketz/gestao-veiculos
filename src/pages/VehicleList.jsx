import React from 'react';

function VehicleList({ vehicles, onEdit, onDelete }) {
  return (
    <div className="vehicle-list">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="vehicle-card">
          <img src="https://via.placeholder.com/150" alt={vehicle.model} />
          <h2>{vehicle.model}</h2>
          <p>Marca: {vehicle.brand}</p>
          <p>Ano: {vehicle.year}</p>
          <p>Cor: {vehicle.color}</p>
          <p>Placa: {vehicle.plate}</p>
          <div className="vehicle-actions">
            <button onClick={() => onEdit(vehicle)}>Editar</button>
            <button onClick={() => onDelete(vehicle.id)} className="delete-button">Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VehicleList;
