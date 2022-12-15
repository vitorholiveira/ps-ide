import style from './about.module.css'
import loja from '../../img/loja.png'

function About () {

  return (
      <div id="Sobre"className={style.Sobre}>
          <div className={style.titulo}>
              <p>SOBRE A LOJA</p>
          </div>
          <div className={style.texto}>
                <p>A loja DecorHouse é a loja ideal para decorar a sua casa em 
                situações festivas. Possuimos decorações para deixar a sua 
                casa com o ambiente que desejar, do natal ao ano novo, 
                temos os produtos que precisa para dar uma levantada na 
                sua casa.</p>
                <p>A DecorHouse possui os melhores preços da região, vendendo
                    produtos de qualidade pelo melhor preço do mercado.</p> 
          </div>
          <div className={style.note}>
                <p>Neste ano devido a proximidade da copa do Mundo ao
                Natal estamos fazendo uma promoção futenatalina, com
                decorações de Natal e da Copa com até 40% de desconto.</p>
          </div>
          <div className={style.rectangle}></div>
          <div className ={style.FotoLoja}>
              <img src={loja} alt="LOJA" />
          </div>
          <div className ={style.texto2}>
            <p>É NA DECORHOUSE QUE VOCÊ ENCONTRA O QUE FAZ A SUA CASA SUA!</p>
          </div>
      </div>
  );
}
export default About;