import './instagram.css'
import copa from '../../img/copa.png'
import natal from '../../img/natal1.png'
import anonovo from '../../img/anonovo.png'

function Instagram() {
    return (
        <div className="container">
<<<<<<< Updated upstream
            <div className="children">
                SIGA-NOS NO INSTAGRAM
=======
            <div id="insta"className="children">
                <p><b>SIGA-NOS NO INSTAGRAM</b></p>
>>>>>>> Stashed changes
                <ul className="fotos">
                    <li>
                        <img src={copa} alt="DECOR" />
                        <p><b>DecorHouse</b> a DecorHouse já está em clima de copa do mundo ...</p>
                    </li>
                    <li>
                        <img src={natal} alt="natal" />
                        <p><b>DecorHouse</b> já está pensando em como vai decorar a casa para ...</p>
                    </li>
                    <li>
                        <img src={anonovo} alt="anonovo" />
                        <p><b>DecorHouse</b> visite nossas lojas para comprar sua decoração de ...</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Instagram;