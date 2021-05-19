import React from 'react';
import formatoMoeda from '../formatarMoeda'
import styled from 'styled-components'
// import {removerDoCarrinho} from './

const CarrinhoContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
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
                                    <img src={item.img} alt={item.nome}></img>
                                </div>
                                <div>
                                    <div>{item.nome}</div>
                                    {formatoMoeda(item.valor)} x {item.count} {" "}
                                    <div>
                                         <button onClick={() => this.props.removerDoCarrinho}>Remover</button>
                                    </div>
                                    
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </CarrinhoContainer>
           
        )
    }
}

