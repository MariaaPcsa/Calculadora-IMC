
// Adiconando o escutador na página
document.addEventListener("DOMContentLoaded", function(){
  // Acessando os elemento pelo ID e armazenando na variável
  const formulario= document.getElementById("calc-form");
  const nomeInput = document.getElementById("nome");
  const moneError = document.getElementById("nome-error")

//Adiconando o escutador para o botão submit e 
  formulario.addEventListener("submit", function( event){
    event.preventDefault();
    
   
//Adicionando a bloco re reptição , para verificar se o valor do input for
//null epresente a mensagem de erro , ao ser preenchos retorne para neme (validando o nome)
    if(!nomeInput.value){
      moneError.style.display= "block";
      return;
    } else{
      moneError.style.display= "nome";
    }
    //
    //acessando os elemento pelo ID e armazenando na vaariável, e com o elemento "parseFloat"
    // alterá o value para ponto flutuante
    const nome = nomeInput.value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // Calculando o IMC
    const imc = peso/ (altura * altura);
    //Armazenado o resultado
    const resultadoElement = document.getElementById("resultado");
    
    
    
// Armazenando 
    let categoria;

    //Veruficando a categoria

    if (imc <18.5) {
      categoria = "Abaixo do pesso"
      resultadoElement.style.backgroundColor = "#ffff00";
    } else if ( imc < 25) { 
    categoria = "Peso normal"
    resultadoElement.style.backgroundColor = "#00ff00";
    } else if (imc <30) {
    categoria ="Sobrepeso"
    resultadoElement.style.backgroundColor = "#ffa500";
    } else {
    categoria ="Obesidade"
    resultadoElement.style.backgroundColor = "#ff0000";
    
  }


    // Adicionando o HTML no travez do js e usando o "toFixed" para determinar da casas descimais
    resultadoElement.innerHTML = `<p> ${nome}, Seu IMC é ${imc.toFixed(2)}.</p>
     <p> você está na categoria: ${categoria} </p>`;

     //Atualizando a categoria - input
     document.getElementById("categoria").value =categoria;

    //Simulando o envio de dados para o banco
    //criando o objeto FormData
     let dados = new FormData(formulario);
      for(let [chave, valor] of dados.entries())
        console.log(chave + ":" + valor);
      
      //limpando os dados apos serem enviado. 
      //acssando os elemento apos o envio de dados e atribuindo um novao valoe ""
      
      document.getElementById('nome').value = '';
      document.getElementById('altura').value = '';
      document.getElementById('peso').value = '';
  });
  

  });

  
