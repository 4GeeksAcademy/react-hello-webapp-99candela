import React from "react";
import { useNavigate } from "react-router-dom";
import ContactoForm from "./ContactoForm";

const AgregarContacto = () => {
  const navigate = useNavigate();

  const guardarNuevoContacto = async (nuevoContacto) => {
    try {
      const resp = await fetch(
        "https://playground.4geeks.com/contact/agendas/Candela99/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nuevoContacto),
        }
      );

      if (!resp.ok) {
        const errMsg = await resp.text();
        console.error("Error al agregar:", errMsg);
        return;
      }
      navigate("/");
    } catch (error) {
      console.error("Error al agregar contacto:", error);
    }
  };

  return (
    <ContactoForm
      titulo="Nuevo Contacto"
      onGuardar={guardarNuevoContacto}
      onCancelar={() => navigate("/")}
    />
  );
};

export default AgregarContacto;