import footer from './footer.module.css'

import decor from '../../img/decor.png'
import ide from '../../img/ide.png'

function Footer() {
  return (
    <div id="sobre"className={footer.footer}>
      <div className={footer.logoIDE}>
      </div>
      <div id="#footer" className={footer.logo}>
        <img src={decor} alt="DECOR" />
        <p><a href="#footer">Termos de Uso</a> | <a href="#footer">Politica de Privadiade</a> | <a href="#footer">Política de Cookies</a></p>
      </div>
      <div className={footer.logoIDE}>
        <p>Realização:</p>
        <a href="https://www.idejr.com.br/"><img href="https://www.idejr.com.br/" src={ide} alt="IDE" /></a>
      </div>
    </div>
  );
}

export default Footer;
