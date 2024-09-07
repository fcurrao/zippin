import React , { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import './Error.css'

export const Error = ({ code, title, subtitle }: {  code?: number, title?: string, subtitle?: string }) => {
    const [titleLocal, setTitleLocal] = useState<string>("")
    const [subtitleLocal, setSubtitleLocal] = useState<string>("")

    //  funcion que segun codigo se le asigna titulo si es que no fueron pasadas por props
    const handleErrorTitles = () => {
        if (title === undefined && subtitle === undefined) {
            let newTitle = "";
            let newSubtitle = "";
            switch (code) {
                case 401:
                    newTitle = `Error de Autorización ${code}`;
                    newSubtitle = "Corrobore sus credenciales"; 
                    break;
                case 404:
                    newTitle = `Error ${code}`;
                    newSubtitle = "NOT FOUND";
                    break;
                case 0:
                    newTitle = `Error `;
                    newSubtitle = "Tu Servidor esta caido";
                    break;
                default:
                    code === undefined ? code = 499 : "";
                    if (code > 399 && code < 500) {
                        newTitle = `Error ${code}`;
                        newSubtitle = "Por favor intente corroborando el servidor";
                    }

                    break;
            }
            if (newTitle !== "" && newSubtitle !== "") {
                setTitleLocal(newTitle)
                setSubtitleLocal(newSubtitle)
            }
        }
    }

    useEffect(() => {
        handleErrorTitles()
    }, [code, title, subtitle, titleLocal, subtitleLocal]);


    return (
        <>
            <div className="error-container">
                <div className="error-info">
                    <h3>{titleLocal}  {title}</h3>
                    <h4>{subtitleLocal}  {subtitle}</h4>
                    <Link to="/" ><h2 className="error-link" > Volver al mapa</h2></Link>
                    <img className="error-picture" alt="Error-img" src="../../../public/error.png" />
                </div>
            </div>
        </>
    );
};