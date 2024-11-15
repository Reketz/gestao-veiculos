export default function FormRegister({formData, handleSubmit, handleChange, onClose}) {
  return <>
    <form onSubmit={handleSubmit}>
          <input name="model" placeholder="Modelo"  value={formData.model} onChange={handleChange} />
          <input name="brand" placeholder="Marca"  value={formData.brand} onChange={handleChange} />
          <input name="year" placeholder="Ano"  value={formData.year} onChange={handleChange} />
          <input name="color" placeholder="Cor"  value={formData.color} onChange={handleChange} />
          <input name="plate" placeholder="Placa"  value={formData.plate} onChange={handleChange} />
          <button type="submit">{formData ? 'Salvar Alterações' : 'Adicionar Veículo'}</button>
          <button onClick={onClose}>Cancelar</button>
        </form>
  </>
}