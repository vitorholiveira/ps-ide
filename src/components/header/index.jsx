import style from './style.module.css';

export default function Header() {

    return (
        <header id="home"className={style.Header}>
            <div className={style.Fields}>
                <a href="#home"><b>HOME</b></a>
                <a href="#produtos"><b>PRODUTOS</b></a>
                <a href="#sobre"><b>SOBRE</b></a>
            </div>
        </header>
    )
}