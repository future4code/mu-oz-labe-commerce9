import React from 'react'
import formatoMoeda from '../formatarMoeda'
import styled from 'styled-components'
import Btm from '../../img/Btm.svg'


const CardInfo = styled.div`
  max-width:250px;
  border: 1px solid #42A1CD;
  background-color:#fff;
  box-shadow: 0px 0px 10px 0px #42A1CD;
  border-radius: 10px;
  text-align: center;
  padding:10px;

  a:link 
{ 
 text-decoration:none;
 color: #000000;
}
`
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  padding:16px;
   
  /* border: 1px solid black; */
`
const AreaProduto = styled.div`

input{
    width: 200px; 
}

.fortMoeda{
    font-size:20px;
    color: #51AB4B;
}

p{
    text-decoration: none;
    
}

`



export default class Produtos extends React.Component {

    getFiltroProducts = () => {
        return this.props.produtos
          .filter((product)=> this.props.valorMin ? product.value > this.props.valorMin: true)
          .filter((product)=> this.props.valorMax ? product.value < this.props.valorMax: true)
          .filter((product)=> this.props.valorNome ? product.nome.includes(this.props.valorNome) : true)
    }

    render() {
        const listaFiltrada = this.getFiltroProducts()


        return (
            
            <CardContainer>


                {listaFiltrada.map(produto => ( 
                    <CardInfo key={produto.id}>
                       
                        <AreaProduto>
                            <a href={"#" + produto.id}>
                                <img src={produto.img} alt={produto.nome}></img>
                                <p>
                                    {produto.nome}
                                </p>
                            </a>
                            <div>
                                <div className="fortMoeda">
                                    {formatoMoeda(produto.value)}
                                </div>
                                <input onClick={() => this.props.adiciorAoCarrinho(produto)} alt="teste" type="image" src={Btm} />
                            </div>
                        </AreaProduto>
                    </CardInfo>
                ))}

            </CardContainer>
        )
    }
}