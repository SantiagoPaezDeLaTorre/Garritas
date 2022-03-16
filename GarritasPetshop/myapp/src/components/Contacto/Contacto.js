import React from 'react';
import "./Contacto.css";

const Contacto = () => {

    return(
    <div className="contenedor">
        <h1>Contacto</h1>
        <form>
            <div className="formDiv">
                <div className="formInputs">  
                    <div className="row">
                        <div className="col"> 
                            <input type="text" className="labels" id="nombre" name="nombre" required placeholder="Nombre" ></input> <br></br>
                            <input type="mail" className="labels" id="casilla" name="casilla" required placeholder="Correo electrónico" autocomplete="off"></input><br></br>
                        </div> 
                        <div className="col">
                            <input type="tel" className="labels" id="telefono" name="telefono" placeholder="Número telefónico"></input><br></br>
                            <select name="motivoConsulta" className="labels" id="motivoConsulta" placeholder="Motivo de consulta">
                                <option hidden selected>Motivo de consulta</option>
                                <option>Ventas</option>
                                <option>Veterinaria</option>
                                <option>Peluqueria canina</option>
                                <option>Guardería</option>
                                <option>Otro</option>
                            </select>
                        </div> 
                    </div>
                </div>
                <div className="formRight">
                    <div className="formText">
                        <label for="comentarios">¿En qué podemos ayudarle?:</label>
                        <textarea id="comentarios" placeholder="Escriba aquí su comentario"></textarea>
                    </div>
                    <div className="formRightBottom">
                        <div className="pregunta d-flex no-wrap align-items-center">
                            <label for="newsletter">¿Desea recibir el newsletter?</label>
                            <input type="checkbox" name="newsletter" id="newsletter"></input>
                        </div>
                        <div className="botonesFormulario">
                            <button type="submit" className="botonEnviar">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    ) 
}
export default Contacto;