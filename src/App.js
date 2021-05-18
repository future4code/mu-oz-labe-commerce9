import React from 'react'
import Filtro from './components/filtro'
import Produtos from './components/produtos'



export default class App extends React.Component {

  state ={ products: [
    { id:1, valor:10, nome:"Foguete da Missão Apollo 11", img:"", tamanho:"G",ordem:""},
    { id:2, valor:50, nome:"Aerolito da vila do Chaves", img:"", tamanho:"P",ordem:""}
      ],
      tamanho:"",
      valor:"",
      nome:"",
      ordem:"",
    }

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

  return (

    <div className ="grid-container">
      <header>

      </header>
      <main>
        <div classname ="content">
          <div classname="main">
            <Filtro count ={this.state.products.length} 
            tamanho={this.state.tamanho} 
            ordem={this.state.ordem} 
            filtroProducts={this.filtrarProducts} 
            ordemProducts={this.ordenarProducts}>
            </Filtro>
            <Produtos produtos={this.state.products}></Produtos>
          </div>
          <div classname="sidebar">
            Carrinho de Compras
          </div>
        </div>
      </main>
      <button>Adicionar ao Carrinho</button>
    </div>
    
    );
  }

}

