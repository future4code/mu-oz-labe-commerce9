



const votaNaoVota = (idade, anoAtual) => {
    
   const voto = anoAtual - idade <= 16 ? "Vota" : "Não Vota"

   return voto
     
}



const insiraIdade = prompt("Insira sua Idade")


votaNaoVota(insiraIdade,2021)