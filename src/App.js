import React from 'react'
import Filtro from './components/Filtros/filtro'
import Produtos from './components/Lista_Produtos/produtos'
import Carrinho from './components/Carrinho_Compras/carrinho'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`


export default class App extends React.Component {

  state ={ products: [
    { id:1, valor:10, nome:"Foguete da Missão Apollo 11", img:"", tamanho:"G",ordem:""},
    { id:2, valor:50, nome:"Aerolito da vila do Chaves", img:"", tamanho:"P",ordem:""}
      ],
      tamanho:"",
      valor:"",
      nome:"",
      ordem:"",
      itensCarrinho:[],
    }

    removerDoCarrinho = (produto) => {
      const itensCarrinho = this.state.itensCarrinho.slice()
      this.setState({
        itensCarrinho: itensCarrinho.filter((x) => x.id !== produto.id)
      })
    }

    adiciorAoCarrinho = (produto) => {
      
      const itensCarrinho = this.state.itensCarrinho.slice()
      let itemNoCarrinho = false
      itensCarrinho.forEach((item)=> {
        if (item.id === produto.id) {
        item.count++
        itemNoCarrinho = true
        
        }
      })
      if (!itemNoCarrinho) {
        itensCarrinho.push({...produto, count: 1 });
      }
      this.setState({itensCarrinho})
      
    };

    filtrarProducts = (event) => {

    }

    ordenarProducts = (event) =>  {
      const ordem = event.target.value
      this.setState({
        ordem: ordem,
        products: this.state.products
        .slice()
        .sort((a,b) => 
          ordem === "Menor" 
          ? a.valor > b.valor
            ? 1 
            : -1
          : ordem === "Maior"
          ? a.valor < b.valor
            ? 1 
            : -1
          : a.id < b.id
          ? 1 
          : -1
        ),
      });
    };

    
  
  render () {

  return ( <AppContainer>
            <Filtro contador ={this.state.products.length} 
            tamanho={this.state.tamanho} 
            ordem={this.state.ordem} 
            filtroProducts={this.filtrarProducts}  
            ordemProducts={this.ordenarProducts} >  
            </Filtro>

            <Produtos produtos={this.state.products} 
            adiciorAoCarrinho={this.adiciorAoCarrinho} 
            removerDoCarrinho={this.removerDoCarrinho}>
            </Produtos>
          
            <Carrinho itensCarrinho={this.state.itensCarrinho}></Carrinho>
         </AppContainer>
     );
  }


    
      

      
     
}

