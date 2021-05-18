import React from 'react';



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
            </div>
        )
    }
}

