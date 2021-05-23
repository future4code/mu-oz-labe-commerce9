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

const products = [
  
  { id:1,
    value:10,
    nome:"Produto 1",
    img:"https://picsum.photos/200",
    tamanho:"G",
    ordem:""},
  { id:2, value:20, nome:"Produto 2", img:"https://picsum.photos/201", tamanho:"P",ordem:""},
  { id:3, value:30, nome:"Produto 3", img:"https://picsum.photos/202", tamanho:"P",ordem:""},
  { id:4, value:40, nome:"Produto 4", img:"https://picsum.photos/203", tamanho:"P",ordem:""},
]


export default class App extends React.Component {

  state ={ 
      products:products,
      tamanho:"",
      valor:"",
      nome:"",
      ordem:"",
      itensCarrinho:[],
      valorMin: 10,
      valorMax: 1000,
      valorNome: ""
    }

    // removerDoCarrinho = (produto) => {
    //   const itensCarrinho = this.state.itensCarrinho.slice()
    //   this.setState({
    //     itensCarrinho: itensCarrinho.filter((x) => x.id !== produto.id)
    //   })
    // }


    removerDoCarrinho = (produto) => {
      const itensCarrinho = this.state.itensCarrinho
      const existe = itensCarrinho.find((x) => x.id === produto.id)
      if(existe.count === 1) {
        this.setState({itensCarrinho: this.state.itensCarrinho.filter((x) => x.id !== produto.id)})
      } else {
        this.setState({itensCarrinho:this.state.itensCarrinho.map((x) => x.id === produto.id ? { ...existe, count: existe.count -1}: x)})
      }
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

    onChangeValorMin = (e) => {
      this.setState({valorMin: e.target.value})
    }
    
    onChangeValorMax = (e) => {
      this.setState({valorMax: e.target.value})
    }

    onChangeValorNome = (e) => {
      this.setState({valorNome: e.target.value})
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
            ordem={this.state.ordem}  
            ordemProducts={this.ordenarProducts}
            valorMin={this.state.valorMin}
            valorMax={this.state.valorMax}
            valorNome={this.state.valorNome}
            onChangeValorMin={this.onChangeValorMin}
            onChangeValorMax={this.onChangeValorMax}
            onChangeValorNome={this.onChangeValorNome}
            >  
            </Filtro>

            

            <Produtos produtos={this.state.products} 
            adiciorAoCarrinho={this.adiciorAoCarrinho}
            valorMin={this.state.valorMin}
            valorMax={this.state.valorMax}
            
            >
            
            </Produtos>
            
            <Carrinho itensCarrinho={this.state.itensCarrinho}
             removerDoCarrinho={this.removerDoCarrinho}>
            </Carrinho>
         </AppContainer>
     );
  }


    
      

      
     
}

