import React, { useState } from "react";

const ContactoForm = ({ contacto = {}, titulo, onGuardar, onCancelar }) => {
  const [formData, setFormData] = useState({
    name: contacto.name || "",
    email: contacto.email || "",
    phone: contacto.phone || "",
    address: contacto.address || ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4">
      <h4>{titulo}</h4>

      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={formData.email}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <input
        type="text"
        name="address"
        placeholder="Dirección"
        value={formData.address}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <div>
        <button className="btn btn-primary me-2" type="submit">
          Guardar
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ContactoForm;
