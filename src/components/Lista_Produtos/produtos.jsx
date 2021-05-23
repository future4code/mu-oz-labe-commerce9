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
  background-color:blueviolet;
`
const CardContainer = styled.div`
display: flex;
overflow-wrap:anywhere;
padding:16px;
gap:16px;
border: 1px solid black;
`

const ButtonAdd = styled.button`

border-radius:16px;
width: 150px;
border: 2px solid black;



`



export default class Produtos extends React.Component  {

    render () {
        

        return (
            <CardContainer>
                
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
                                    {formatoMoeda(produto.value)}
                                </div>
                                <ButtonAdd onClick={()=>this.props.adiciorAoCarrinho(produto)} className="botaoPrimario">
                                    Adicionar ao Carrinho
                                </ButtonAdd>
                                </div>
                            </div>
                        </CardInfo>
                    ))}                  
                 
            </CardContainer>
        )
    }
}