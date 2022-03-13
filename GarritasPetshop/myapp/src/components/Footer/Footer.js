import "./Footer.css";
import sobre from '../../assets/images/envelope.svg';
import geo from '../../assets/images/geo-alt.svg';
import tel from '../../assets/images/telephone.svg';


const Footer = () => {
    return (
<div>

<div className="gradiente">
    <div className="container">
        <footer>
            <section className="futer1 foot">
                <div>
                    <h2>Navegación</h2>
                    <div className="contenidoF contenidoF1">
                        <button type="button" className="btn btn-lg btnFuter1" data-bs-toggle="modal" data-bs-target=".envios">
                            Envíos y entregas
                        </button>
                        <button type="button" className="btn btn-lg btnFuter1" data-bs-toggle="modal" data-bs-target=".cambios">
                            Cambios y devoluciones
                        </button>
                        <button type="button" className="btn btn-lg btnFuter1" data-bs-toggle="modal" data-bs-target=".politica">
                            Política de privacidad
                        </button>
                    </div>
                </div>
            </section>
            <section className="futer2 foot">
                <div>
                    <h2 className="mediosDePago">Medios de pago</h2>
                    <div className="contenidoF">
                        <div className="medios">
                            <ul className="mediosPago">
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/mercadopago.png" className="footer__top__icon" alt="Mercado Pago"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/visa.png" className="footer__top__icon" alt="Visa"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/american-express.png" className="footer__top__icon" alt="American Express"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/mastercard.png" className="footer__top__icon" alt="MasterCard"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/naranja.png" className="footer__top__icon" alt="Naranja"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/cabal.png" className="footer__top__icon" alt="Cabal"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/nativa.png" className="footer__top__icon" alt="Nativa"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/mercadopago-patagonia.png" className="footer__top__icon" alt="Tarjeta Mercado Pago Patagonia"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/tarjeta-walmart.png" className="footer__top__icon" alt="Tarjeta Walmart"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/diners-club.png" className="footer__top__icon" alt="Diners Club"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/visa-debito.png" className="footer__top__icon" alt="Visa Débito"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/mastercard-debito.png" className="footer__top__icon" alt="MasterCard Débito"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/maestro.png" className="footer__top__icon" alt="Maestro"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/pagofacil.png" className="footer__top__icon" alt="Pago Fácil"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/rapipago.png" className="footer__top__icon" alt="Rapipago"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/provincia-pagos.png" className="footer__top__icon" alt="Provincia NET Pagos"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/link.png" className="footer__top__icon" alt="Link"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/cobroexpress.png" className="footer__top__icon" alt="Cobro Express"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/cabal-debito.png" className="footer__top__icon" alt="Cabal Débito"></img></li>
                                <li><img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/deposito.png" className="footer__top__icon" alt="Depósito o transferencia bancaria"></img></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="futer3 foot">
                <div>
                    <h2>Contactanos</h2>
                    <div className="contenidoF contenidoF3">
                        <div className="line"><img src={tel} alt=""></img><h3>0810-GAR-RITA (427-7482)</h3></div>
                        <div className="line"><img src={sobre} alt=""></img><h3>contacto@garritaspetshop.com</h3></div>
                        <div className="line"><img src={geo} alt=""></img><h3>Av. Colón 2100, Mar del Plata</h3></div>
                    </div>
                </div>
            </section>
        </footer>
    </div>
</div>


{/* // <!-- modal 1 --> */}
<div className="modal fade envios" id="exampleModal" tabindex="-1" aria-labelledby="EnviosYEntregas" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title modal1Title" id="EnviosYEntregas">Envíos y entregas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body pt-0">     
                <div className="titulo">
                    <p>ZONAS DE ENTREGAS</p>
                </div>
                <div className="info">
                    <p>
                        En garritas hacemos entregas sin cargo (minimo de compra $1200) en toda capital federal, ciudadela, lomas del mirador, ramos mejia y caseros.
                    </p>  
                </div>
                <div className="info">
                    <p>
                        Contamos con los mejores repartidores y una moderna flota de vehículos propios para que tu compra llegue en tiempo y forma. tener nuestra propia flota nos permite tener una amplia franja horaria de entregas para poder realizar envíos en el mismo día.
                    </p>
                </div>                
                <div className="titulo">
                    <p>HORARIO DE ENTREGAS EN CUARENTENA</p>
                </div>
                <div className="info">
                    <p>
                        A raiz de la situacion actual por la que estamos atrevesando y la gran demanda de pedidos, los nuevos horarios de entregas provisorios son de lunes a viernes de 9 a 18 hs y los días sábados de 9 a 14 hs. en la mayoría de los casos, comprando antes de las 13 hs (días hábiles) podemos entregarte tus productos en el mismo día.
                    </p>
                </div>
                <div className="titulo">
                    <p>
                        COMPRÁ Y RETIRA EN NUESTRA SUCURSAL
                    </p>
                </div>
                <div className="info">
                    <p>
                        En garritas pet shop podés hacer tu pedido, seleccionar la opción "retiro en sucursal" y elegir tu sucursal más cercana para retirarlo.
                    </p>
                </div> 
                <div className="info">
                    <p>
                        Podés retirar tus compras los días lunes a viernes de 9 a 18 hs y los sábados de 9 a 14 hs.
                    </p> 
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Entendido</button>
            </div>
        </div>
    </div>
</div>
{/* //   <!-- modal 2 --> */}
<div className="modal fade cambios" id="exampleModal" tabindex="-1" aria-labelledby="CambiosYDevoluciones" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title modal2Title" id="CambiosYDevoluciones">Cambios y devoluciones</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body pt-0">      
                <div className="titulo">
                    <p>
                        QUEREMOS QUE TU EXPERIENCIA DE COMPRA SEA LA MEJOR
                    </p>
                </div>
                <div className="info">
                    <p>
                        Si tuviste algún inconveniente con tu pedido y necesitás ayuda, comunicate con nuestro equipo de atención al cliente al 0810-gar-rita (427-7482) para que podamos ayudarte con tu inconveniente.
                        Los horarios de atención son de lunes a viernes de 9 a 20 hs y los días sábados de 9 a 14 hs. también podés enviarnos un mail a contacto@garritaspetshop.com para contactar a nuestro equipo.
                        Recordá tener siempre a mano el número de orden.
                    </p>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Entendido</button>
            </div>
        </div>
    </div>
</div>
{/* //   modal 3 */}
<div className="modal fade politica" id="exampleModal" tabindex="-1" aria-labelledby="PoliticaDePrivacidad" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="PoliticaDePrivacidad">Política de privacidad</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body pt-0">     
                <div className="titulo">
                    <p>
                        POLÍTICA DE PRIVACIDAD
                    </p>
                </div>
                <div className="info">
                    <p>
                        La presente Política de Privacidad establece los términos en que Garritas Pet Shop protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.
                    </p>
                </div>
                <div className="titulo">
                    <p>
                        Información recogida
                    </p>
                </div>
                <div className="info">
                    <p>
                        Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto como: su dirección de correo electrónico, teléfono, e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.
                    </p>
                </div>
                <div className="titulo">
                    <p>
                        Uso de la información recogida
                    </p>
                </div>
                <div className="info">
                    <p>
                        Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
                    </p>
                </div>
                <div className="info">
                    <p>
                        Garritas está altamente comprometido con el cumplimiento de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
                    </p>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Entendido</button>
            </div>
        </div>
    </div>
</div>
</div>
    )
}
export default Footer;