import "./Footer.css";


const Footer = () => {
    return (

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
                        <div className="line"><img src="./assets/images/telephone.svg" alt=""></img><h3>0810-GAR-RITA (427-7482)</h3></div>
                        <div className="line"><img src="./assets/images/envelope.svg" alt=""></img><h3>contacto@garritaspetshop.com</h3></div>
                        <div className="line"><img src="./assets/images/geo-alt.svg" alt=""></img><h3>Av. Colón 2100, Mar del Plata</h3></div>
                    </div>
                </div>
            </section>
        </footer>
    </div>
</div>
    )
}
export default Footer;