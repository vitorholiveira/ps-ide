import './footer.css'
import decor from '../../img/decor.png'
import ide from '../../img/ide.png'

function Footer() {
  return (
    <div id="sobre"className="footer">
      <div className="logoIDE">
      </div>
      <div className="logo">
        <img src={decor} alt="DECOR" />
        Termos de Uso | Politica de Privadiade | Política de Cookies
      </div>
      <div className="logoIDE">
        Realização:
        <img src={ide} alt="IDE" />
      </div>
    </div>
  );
}

export default Footer;
