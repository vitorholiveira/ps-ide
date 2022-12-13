import React from 'react'

import styles from './instagram.module.css'
import copa from '../../img/copa.png'
import natal from '../../img/natal.png'
import anonovo from '../../img/anonovo.png'

function Instagram() {
    return (
        <div className={styles.container}>
            <div id="insta" className={styles.children}>
                <p><b>SIGA-NOS NO INSTAGRAM</b></p>
                <ul className={styles.fotos}>
                    <li className={styles.copa}>
                        <img src={copa} alt="DECOR" />
                        <p><b>DecorHouse</b> a DecorHouse já está em clima de copa do mundo ...</p>
                    </li>
                    <li className={styles.natal}>
                        <img src={natal} alt="natal" />
                        <p><b>DecorHouse</b> já está pensando em como vai decorar a casa para ...</p>
                    </li>
                    <li className={styles.anonovo}>
                        <img src={anonovo} alt="anonovo" />
                        <p><b>DecorHouse</b> visite nossas lojas para comprar sua decoração de ...</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Instagram;
