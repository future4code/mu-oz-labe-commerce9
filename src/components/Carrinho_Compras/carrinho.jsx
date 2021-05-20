import React from 'react';
import formatoMoeda from '../formatarMoeda'
// import {removerDoCarrinho} from './



export default class Carrinho extends React.Component {

    render () {

        const {itensCarrinho} = this.props;

        return (
            <div>
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
                                         <button onClick={() => this.props.removerDoCarrinho(item)}>Remover</button>
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
                            <button className="button primary">Prosseguir</button>
                        </div>
                    </div> )}
            </div>
            </div>
           
        )
    }
}

