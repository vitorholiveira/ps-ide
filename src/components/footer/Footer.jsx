import footer from './footer.module.css'

import decor from '../../img/decor.png'
import ide from '../../img/ide.png'

function Footer() {
  return (
    <div id="sobre"className={footer.footer}>
      <div className={footer.logoIDE}>
      </div>
      <div className={footer.logo}>
        <img src={decor} alt="DECOR" />
        <p><a href="#">Termos de Uso</a> | <a href="#">Politica de Privadiade</a> | <a href="#">Política de Cookies</a></p>
      </div>
      <div className={footer.logoIDE}>
        <p>Realização:</p>
        <img src={ide} alt="IDE" />
      </div>
    </div>
  );
}

export default Footer;
