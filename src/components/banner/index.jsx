import style from'./style.module.css';

export default function Banner() {

    return (
        <div id="banner" className={style.Banner}>
            <div className={style.degra}>
                <div className={style.texto}>
                    Promoção de Natal na DecorHouse!
                </div>
            </div>


        </div>
    )
}