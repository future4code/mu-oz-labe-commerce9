import React from 'react'

export default class Filtro extends React.Component {

    render () {
        return (
            <div className="Filtro"> 
                <div className = "resultadoFiltro">{this.props.count} Produtos</div>
                <div className = "tipoFiltro">
                    Order
                    <select value ={this.props.ordem} onChange={this.props.ordemProducts}>
                        <option>Latest</option>
                        <option value="Menor">Menor</option>
                        <option value="Maior">Maior</option>
                    </select>
                </div>
                <div className = "tipotamanho">
                    Filtro
                    <select value = {this.props.tamanho} onChange={this.props.filtroProducts}>
                        <option value="">Todos</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                    </select>
                </div>  
            </div>
        )
    }

}