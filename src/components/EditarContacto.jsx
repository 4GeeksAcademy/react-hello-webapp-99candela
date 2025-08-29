import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactoForm from "./ContactoForm";

const EditarContacto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contacto, setContacto] = useState(null)

    useEffect(() => {
        const fetchContacto = async () => {
          try {
            const resp = await fetch(
                 `https://playground.4geeks.com/contact/agendas/Candela99/contacts/${id}`
            );
            if (resp.ok) {
                const data = await resp.json();
                setContacto(data);
            }
          } catch (error) {
            console.error("Error cargando contacto:", error)
          } 
        };
        fetchContacto();
    }, [id]);

    const  guardarContactoEditado = async (contactoEditar) => {
        try {
            const resp = await fetch(
               `https://playground.4geeks.com/contact/agendas/Candela99/contacts/${id}`,
               {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(guardarContactoEditado),
               } 
            );

            if (!resp.ok) {
                const errMsg = await resp.text();
                console.error("Error al editar:", errMsg);
                return;
            }
            navigate("/");

        } catch (error) {
            console.error("Error al editar contacto:", error);
        }
    }

    if (!contacto) return <p>Cargando...</p>;

    return (
        <ContactoForm
            contact={contacto}
            titulo="Editar Contacto"
            onGuardar={guardarContactoEditado}
            onCancelar={() => navigate("/")}
        />
    );

    
};

export default EditarContacto
