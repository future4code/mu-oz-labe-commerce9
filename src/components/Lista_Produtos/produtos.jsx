import React from 'react'
import formatoMoeda from '../formatarMoeda'


export default class Produtos extends React.Component  {

    render () {
        

        return (
            <aside className="produtos">
                <ul> 
                    {this.props.produtos.map(produto => (  // => map aqui foi utilizado para renderizar o objeto do state products, pelo id de cada item e criar uma lista. 
                        <li key={produto.id}>             
                            <div className="produto">
                                <a href={"#" + produto.id}>
                                    <img src={produto.img} alt={produto.nome}></img>
                                    <p>
                                        {produto.nome}
                                    </p>
                                </a>
                                <div>
                                <div>
                                    {formatoMoeda(produto.valor)}
                                </div>
                                <button onClick={()=>this.props.adiciorAoCarrinho(produto)} className="botaoPrimario">
                                    Adicionar ao Carrinho
                                </button>
                                </div>
                            </div>
                        </li>
                    ))}                  
                </ul>
            </aside>
        )
    }
}