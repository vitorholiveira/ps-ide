import style from './style.module.css'
import MostraProdutos from './Produtos'

import { useState } from 'react'

export default function Produtos() {

    let [num, setNum] = useState(0)

    function criaProduto(nome, desc, valor) {
        return {
            nome,
            desc,
            valor,
        }
    }

    const Copa = [
        criaProduto("Bandeirinhas",
            "Conjunto de Bandeirinhas.",
            12),
        criaProduto("Uniforme Seleção",
            "Uniforme da Seleção.",
            70),
        criaProduto("Vuvuzela",
            "Pra fazer aquela barulheira dahora.",
            30),
        criaProduto("Peruca Colorida",
            "Peruca nas cores Verde e Amarelo.",
            25),
        criaProduto("Faixa 100% Jesus",
            "Faixa utilizada pelo Neymar.",
            5)]

    const Natal = [
        criaProduto("Árvore de Natal",
            "Árvore montável.",
            100),
        criaProduto("Gorro",
            "Gorro do Papai Noel.",
            20),
        criaProduto("Caixa de Presente",
            "Para embrulhar um presente.",
            10),
        criaProduto("Luzes de Natal",
            "Luzes coloridas para colocar na Árvore de Natal.",
            25)]
    
    const AnoNovo = [
        criaProduto("Espumante",
            "Garrafa de Espumante.",
            45),
        criaProduto("Camisa Brancca",
            "Roupa masculina.",
            50),
        criaProduto("Vestido Branco",
            "Roupa feminina.",
            80),
        criaProduto("Taça de Espumante",
            "Taça de plástico.",
            10),
        criaProduto("Balões 2023",
            "Balões cheios de gás hélio dos números de 2023.",
            30)]

    const Abas = [Copa, Natal, AnoNovo]

    
    return (
        <div id="produtos" className={style.Produto}>
            <div className={style.titulo}>
                <p>PRODUTOS DISPONÍVEIS</p>
            </div>
            <div id="tomale" className={style.menu}>
                <button id="0" focus="asd" onClick={(e)=>{
                    setNum(0); 
                    document.querySelectorAll("#tomale button").forEach((btn) => {
                        btn.removeAttribute("focus");
                    })
                    e.currentTarget.setAttribute("focus", "")

                }}>Copa do Mundo</button>
                <button id="1" onClick={(e)=>{
                    setNum(1); 
                    document.querySelectorAll("#tomale button").forEach((btn) => {
                        btn.removeAttribute("focus");
                    })
                    e.currentTarget.setAttribute("focus", "")
                }}>Natal</button>
                <button id="2" onClick={(e)=>{
                    setNum(2); 
                    document.querySelectorAll("#tomale button").forEach((btn) => {
                        btn.removeAttribute("focus");
                    })
                    e.currentTarget.setAttribute("focus", "")
                }}>Ano Novo</button>
            </div>
            <MostraProdutos id="prod" produtos={Abas[num]} />
        </div>
    )
}