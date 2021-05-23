import React from 'react'
import styled from 'styled-components'

const FiltroContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`
const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;

`

export default class Filtro extends React.Component {

    render () {
        return (
            <FiltroContainer> 
                <div className = "resultadoFiltro">{this.props.count} Produtos</div>
                <div className = "tipoFiltro">
                    <InputContainer>
                    Ordem
                    <select value ={this.props.ordem} onChange={this.props.ordemProducts}>
                        <option>Ultimo</option>
                        <option value="Menor">Menor</option>
                        <option value="Maior">Maior</option>
                    </select>
                    </InputContainer>
                </div>
        
            <InputContainer>
                    Filtro { " " }
                    <select value = {this.props.size} onChange={this.props.filterProduct}>
                        <option value=" ">Todos</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                    </select>
                

                {/* <div>
                    Valor Mínimo:
                    <input
                    type="value"
                    value={this.props.size}
                    onChange={this.props.filterProduct}
                    
                     />
                </div> */}
            </InputContainer> 


            </FiltroContainer>
        )
    }

}