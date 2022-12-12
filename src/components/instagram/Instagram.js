import './instagram.css'
import copa from '../../img/copa.png'
import natal from '../../img/natal.png'
import anonovo from '../../img/anonovo.png'

function Instagram() {
    return (
        <div className="container">
            <div id="insta"className="children">
                SIGA-NOS NO INSTAGRAM
                <ul className="fotos">
                    <li>
                        <img src={copa} alt="DECOR" />
                        <p><b>DecorHouse</b> a DecorHouse já está <br/>em clima de copa do mundo ...</p>
                    </li>
                    <li>
                        <img src={natal} alt="natal" />
                        <p><b>DecorHouse</b> já está pensando em <br/>como vai decorar a casa para ...</p>
                    </li>
                    <li>
                        <img src={anonovo} alt="anonovo" />
                        <p><b>DecorHouse</b> visite nossas lojas <br/>para comprar sua decoração de ...</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Instagram;