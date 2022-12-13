import './style.css'
import MostraProdutos from './Produtos'

export default function Produtos() {

    function criaProduto(nome, desc, valor) {
        return {
            nome,
            desc,
            valor
        }
    }

    const Copa = [
        criaProduto("Bandeirinhas",
            "Conjunto de Bandeirinhas.",
            12),
        criaProduto("Uniforme Seleção",
            "Uniforme da Seleção",
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
            "Gorro do Papai Noel",
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
            80)]

    let Aba = Natal
    const Abas = [Copa, Natal, AnoNovo]

    function trocaAba() {
        console.log("Trocou de aba.")
    }

    return (
        <div id="produtos" className="Produto">
            <div className="titulo">
                <p>PRODUTOS DISPONÍVEIS</p>
            </div>
            <div className="menu">
                <button onClick={trocaAba}>Copa do Mundo</button><button onClick={trocaAba}>Natal</button><button onClick={trocaAba}>Ano Novo</button>
            </div>
            <MostraProdutos produtos={Aba} />
        </div>
    )
}