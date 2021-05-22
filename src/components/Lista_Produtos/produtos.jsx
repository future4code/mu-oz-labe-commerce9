import React from 'react'
import formatoMoeda from '../formatarMoeda'
import styled from 'styled-components'


const CardInfo = styled.div`
  display: grid;
  grid-template-columns:repeat(3, 1fr);
  width:300px;
  padding: 16px;
  gap: 16px;
  border: 1px solid black;
`



export default class Produtos extends React.Component  {

    render () {
        

        return (
            <div>
                <div> 
                    {this.props.produtos.map(produto => (  // => map aqui foi utilizado para renderizar o objeto do state products, pelo id de cada item e criar uma lista. 
                        <CardInfo key={produto.id}>             
                            <div>
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
                        </CardInfo>
                    ))}                  
                </div>  
            </div>
        )
    }
}