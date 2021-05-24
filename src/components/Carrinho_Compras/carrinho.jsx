import React from 'react';
import formatoMoeda from '../formatarMoeda'
import styled from 'styled-components'

import BtmFinalizar from '../../img/BtmFinalizar.svg'
import BtmRemover from '../../img/ImgRemover.svg'



// import {removerDoCarrinho} from './

const CarrinhoContainer = styled.div`
  border: 1px solid #42A1CD;
  padding: 8px;

  .BtmFinalizar{
    width: 260px; 
  }
  .BtmRemover{
    width: 25px; 
  }
`


export default class Carrinho extends React.Component {

    render () {

        const {itensCarrinho} = this.props;

        return (
            <CarrinhoContainer>
                {itensCarrinho.length === 0 ? (
                    <div className="headerCarrinho">Carrinho Vazio</div>
                ):(
                    <div className="headerCarrinho">
                        Você tem {itensCarrinho.length} no carrinho {""}
                    </div>
                )}
                 <div>
                <div>
                    <ul>
                        {itensCarrinho.map(item => (
                            <li key={item.id}>
                                
                                <div>
                                    <div>{item.nome}</div>
                                    {formatoMoeda(item.value)} x {item.count} {" "}
                                    <div>
                                         <input 
                                         onClick={() => this.props.removerDoCarrinho(item)} 
                                         className="BtmRemover" 
                                         alt="Remover" 
                                         type="image" 
                                         src={BtmRemover} 
                                         title="Remover" 
                                         />  
                                    </div>
                                    
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                    {itensCarrinho.length !==0 && (
                    <div className="cart">
                             <div className="total">
                                <div>
                                Total: {" "}
                                {formatoMoeda(
                                    itensCarrinho.reduce((a, c) => a + c.valor * c.count, 0)
                                )}
                                </div>
                                <input className="BtmFinalizar" alt="Finalizar Compras" type="image" src={BtmFinalizar} />  
                            </div>
                    </div> )}
                </div>
            </CarrinhoContainer>
           
        )
    }
}

