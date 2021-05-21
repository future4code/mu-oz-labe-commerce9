import React from 'react'
import formatoMoeda from '../formatarMoeda'
import styled from 'styled-components'


const CardInfo = styled.div`
  display: grid;
  grid-column: 1fr;
  padding: 16px;
  gap: 8px;
  border: 1px solid black;
`



export default class Produtos extends React.Component  {

    render () {
        

        return (
            <div>
                <ul> 
                    {this.props.produtos.map(produto => (  // => map aqui foi utilizado para renderizar o objeto do state products, pelo id de cada item e criar uma lista. 
                        <li key={produto.id}>             
                            <CardInfo>
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
                            </CardInfo>
                        </li>
                    ))}                  
                </ul>
            </div>
        )
    }
}