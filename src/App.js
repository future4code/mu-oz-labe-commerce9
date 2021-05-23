import React from 'react'
import Filtro from './components/Filtros/filtro'
import Produtos from './components/Lista_Produtos/produtos'
import Carrinho from './components/Carrinho_Compras/carrinho'
import styled from 'styled-components'
import data from './Data.json'

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`


export default class App extends React.Component {

  


  state ={ 
      products: data.products,
      ordem:"",
      size:"",
      itensCarrinho:[],
      valorMin:10,
      valor:" ",  
    }


    filterProduct = (event) => {
      console.log(event.target.value)
      if(event.target.value ===" "){
        this.setState({size: event.target.value, products: data.products})
      } else {
        this.setState({
          size: event.target.value,
          products: data.products.filter(
             (product) => product.availableSizes.indexOf(event.target.value) >= 0
             )
        })
      }       
    }

   

   filterMin = (event) =>{

    this.setState({valor:event.target.value, 

    products: this.state.products.filter((products) => products.includes(this.state.valor))
  })
  }

    ordenarProducts = (event) =>  {
      const ordem = event.target.value
      this.setState({
        ordem: ordem,
        products: this.state.products
        .slice()
        .sort((a,b) => 
          ordem === "Menor" 
          ? a.price > b.price
            ? 1 
            : -1
          : ordem === "Maior"
          ? a.price < b.price
            ? 1 
            : -1
          : a.id < b.id
          ? 1 
          : -1
        ),
      });
    };

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


   

    
  
  render () {

  return ( <AppContainer>
            <Filtro count ={this.state.products.length}
            size={this.state.size}
            filterProduct={this.filterProduct} 
            ordem={this.state.ordem} 
            ordemProducts={this.ordenarProducts}
            // min={this.state.valor}
            // filterMin={this.filterMin}

            >  
            </Filtro>

            <Produtos produtos={this.state.products} 
            adiciorAoCarrinho={this.adiciorAoCarrinho}
            
            >
            </Produtos>
            
            <Carrinho itensCarrinho={this.state.itensCarrinho}
             removerDoCarrinho={this.removerDoCarrinho}>
            </Carrinho>
         </AppContainer>
     );
  }


    
      

      
     
}

