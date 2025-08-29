import React, { useEffect, useState } from "react";
import ContactoCard from "./ContactoCard";
import ContactoForm from "./ContactoForm"



const App = () => {
  const [contactos, setContactos] = useState([]); // tu lista
  const [contactoEditando, setContactoEditando] = useState(null);
  // Funcion para obtener los contactos de la API (GET)
  const obtenerContactos = async () =>{
    try {
      const response = await fetch("https://playground.4geeks.com/contact/agendas/Candela99/contacts")
      const data = await response.json()
      setContactos(data.contacts || [])
    } catch (error) {
      console.error("Error al ahcer el Get:", error)
    }
  }
  useEffect(()=>{
    obtenerContactos()
  },[])
  const eliminarContacto = async (id) =>{
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/ddelgado/Candela99/${id}`,{
     method:"DELETE",
      })
      setContactos( contactos.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Error al eliminar contacto:", error)
    }
  }
  const editarContacto = (id) => {
    const contacto = contactos.find((c) => c.id === id);
    setContactoEditando(contacto);
  };
  const guardarContacto = async (contactoActualizado)=>{
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/Candela99/contacts/${contactoActualizado.id}`,{
        method:"PUT",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify(contactoActualizado)
      })
      setContactos(contactos.map((c)=>(c.id ===contactoActualizado.id ? contactoActualizado : c)))
      setContactoEditando(null)
    } catch (error) {
      console.error("Error en el Put:", error)
    }
  }
  return (
    <div className="container mt-4">
      {contactoEditando ? (
        <ContactoForm
          contacto={contactoEditando}
          onGuardar={guardarContacto}
          onCancelar={() => setContactoEditando(null)}
        />
      ) : (
        contactos.map((contacto) => (
          <ContactoCard
            key={contacto.id}
            contacto={contacto}
            eliminarContacto={eliminarContacto}
            editarContacto={editarContacto}
          />
        ))
      )}
    </div>
  );

}

export default App;