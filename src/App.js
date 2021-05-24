import React from 'react';
import Filtro from './components/Filtros/filtro';
import Produtos from './components/Lista_Produtos/produtos';
import Carrinho from './components/Carrinho_Compras/carrinho';
import styled from 'styled-components';
import Logo from './img/Logo.svg'
import Cart from './img/Cart.svg';


const AppContainer = styled.div`
  display: flex;
`

const Header = styled.header`
position: sticky;
top: 0;
display: flex;
align-items: center;
justify-content: space-between;
height: 100px;
background-color: #42A1CD;
padding: 0 2rem;
z-index: 1;
`
const ContCarrinho = styled.div`
  display: row;
  justify-content: center;
  align-items:center;

  .QtdItens{
  color: #CDD6CF;
  font-size: 20px;
}
`

const LogoCart =  styled.img`
  width: 60px;
  cursor: pointer;
  
`

const products = [
  
  { id:1,value:10,nome:"Camiseta Promoção",img:"https://bit.ly/2RJHnoR",tamanho:"G",ordem:""},
  { id:2, value:70, nome:"Camiseta Starter ", img:"https://bit.ly/3faxB8i", tamanho:"P",ordem:""},
  { id:3, value:80, nome:"Camiseta Especial Recorte", img:"https://bit.ly/3vg2hdW", tamanho:"P",ordem:""},
  { id:4, value:60, nome:"Camiseta Starter Recorte", img:"https://bit.ly/3fH8fOd", tamanho:"P",ordem:""},
  { id:5, value:40, nome:"Camiseta", img:"https://bit.ly/3vb3aV0", tamanho:"P",ordem:""},
  { id:6, value:4000, nome:"Roupa de Astronauta", img:"https://bit.ly/3fdTtzH", tamanho:"P",ordem:""},
  { id:7, value:80, nome:"Camisa Bebê Astronauta", img:"https://bit.ly/3wwviC6", tamanho:"P",ordem:""},
  { id:8, value:90, nome:"Pijama Astronauta Infantil", img:"https://bit.ly/3fzLz2w", tamanho:"P",ordem:""},
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
      valorNome: "",
      abreCarrinho: false,
    }

    mostraCarrinho = () => {
      return this.setState({ abreCarrinho: !this.state.abreCarrinho})
    }


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

  return ( 

<div>

       
<Header>
          <div>
            <img src={Logo} alt="Logo"/>
          </div>
          
          <div>
           <ContCarrinho>
            <span className="QtdItens"> Meu carrinho </span>
            <span className="QtdItens">{this.state.itensCarrinho.length} </span>
           </ContCarrinho>
            <LogoCart 
            src={Cart} 
            alt="Carrinho"
            onClick={this.mostraCarrinho} 
            mostrar={this.state.abreCarrinho}
            title={'Acesse seu carrinho'}
            />
          </div>
        </Header>
  
  
  <AppContainer>
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
            valorNome={this.state.valorNome}
            >
            </Produtos>         
            <Carrinho 
             mostrar={this.state.abreCarrinho}
             itensCarrinho={this.state.itensCarrinho}
             removerDoCarrinho={this.removerDoCarrinho}>
            </Carrinho>
   </AppContainer>
         </div>
     );
     
  }   
}


