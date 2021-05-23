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
                <div className = "resultadoFiltro">{this.props.contador} Produtos</div>
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
                    Filtro
                    <select value = {this.props.tamanho} onChange={this.props.filtroProducts}>
                        <option value="">Todos</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                    </select>
                </InputContainer>

                <InputContainer>
                    Valor mínimo:
                    <input
                    type= "number"
                    value={this.props.valorMin}
                    onChange={this.props.onChangeValorMin}
                    />
                </InputContainer>

                <InputContainer> 
                   Valor máximo:
                   <input
                    type= "number"
                    value={this.props.valorMax}
                    onChange={this.props.onChangeValorMax}
                   />
                </InputContainer>

                <InputContainer>
                  Busca por nome:
                  <input
                    type= "text"
                    value={this.props.valorNome}
                    onChange={this.props.onChangeValorNome}
                  />
                </InputContainer>
                
            </FiltroContainer>
        )
    }

}