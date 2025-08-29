import React from "react";

const ContactoCard = ({ contacto, eliminarContacto, editarContacto }) => {
  return (
    <div className="card p-3 mb-4 shadow-sm position-relative">
      {}
      <div className="position-absolute top-0 end-0 p-2">
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => editarContacto(contacto.id)}
        >
          <i className="bi bi-pencil"></i>
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => eliminarContacto(contacto.id)}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>

      {}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefdAYZ6uy2rn4ODl9zSL1KwCAhiEPo9Xm-g&s"
        alt="Foto de contacto"
        className="mb-3"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #ccc",
        }}
      />

      {}
      <h5 className="mb-3"> {contacto.name}</h5>
      <p className="mb-1">📧 {contacto.email}</p>
      <p className="mb-1">📞 {contacto.phone}</p>
      <p className="mb-0">📍 {contacto.address}</p>
    </div>
  );
};

export default ContactoCard;