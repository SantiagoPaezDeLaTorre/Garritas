import iEnvio from '../../assets/images/iconEnvio.png';
import iMedios from '../../assets/images/iconMedios.png';
import iSegura from '../../assets/images/iconSegura.png';
import "../Footer/Footer.css";
const Prefooter = () => {
    return (
        <div>
            <section className="preFooter">
                <div className="pcard">
                    <img src={iEnvio} alt="Envío"></img>
                    <span>Envíos sin cargo</span>
                </div>
                <div className="pcard">
                    <img src={iMedios} alt="Medios de pago"></img>
                    <span>Todos los medios de pago</span>
                </div>
                <div className="pcard">
                    <img src={iSegura} alt="Compra segura"></img>
                    <span>Compra 100% segura</span>
                </div>
            </section>
        </div>
    )
}
export default Prefooter;