// Um array para armazenar os doadores
const doadores = [];

// Função para cadastrar um doador
function cadastrarDoador() {
  //armazena na const o nome do doador cadastrado
    const nome = prompt("Insira seu nome:")
    //armazena na const a idade do doador cadastrado
    const idade = prompt ("Insira sua idade:")
    //armazena na const o peso do doador cadastrado
    const peso = prompt ("Insira seu peso:")
    //armazena na const o tipo sanguíneo do doador cadastrado
    const tipoSanguineo = prompt ("Insira seu tipo sanguíneo:")
    //armazena na const a última data de doação do doador cadastrado
    const ultimaDoacao = prompt ("Insira a data da sua última doação:")

    //As informações de cada usuário vão ser armazenadas neste objeto
    const doador = {
        nome: nome,
        idade: idade,
        peso: peso, 
        tipoSanguineo: tipoSanguineo, 
        ultimaDoacao: ultimaDoacao
     
    };
    
    //Crie um código que adiciona o objeto doador ao array doadores

    doadores.push(doador)
    
    //Este código retorna uma mensagem. Deixe inalterado
    alert("Doador cadastrado com sucesso!");
  }
  
  // Função para listar os doadores
  function listarDoadores() {
    let resultado = "===== LISTAGEM DE DOADORES =====";
    
    //Aqui vai o código que lista todos os doadores
   //começo do while
  let posiçãoNoArray = 0
   //condição de continuação do while
  while (posiçãoNoArray < doadores.length) { 
   //ação repetida do while
      console.log( 
    `NOME: ${doadores[posiçãoNoArray].nome} 
    IDADE: ${doadores[posiçãoNoArray].idade} 
    PESO ${doadores[posiçãoNoArray].peso} 
    TIPO SANGUÍNEO:${doadores[posiçãoNoArray].tipoSanguineo} 
    ÚLTIMA DOAÇÃO: ${doadores[posiçãoNoArray].ultimaDoacao} 
    `)
    //incremento do while 
    posiçãoNoArray = posiçãoNoArray + 1 
  } //fim do while

    console.log(resultado);
  }
  
  // Função para buscar doadores por tipo sanguíneo
  function buscarPorTipoSanguineo() {
    const tipoSanguineo = prompt("Digite o tipo sanguíneo desejado: ");
    let resultado = `Digite o tipo sanguíneo desejado: ${tipoSanguineo}\n`;
  
    resultado += "========================\n";
    resultado += "RESULTADO DA BUSCA:\n";
    resultado += "========================\n";
    
    //Aqui vai o código que busca doadores por tipo sanguíneo
    //criada a variável que usaremos dentro do for para armazenar o doador certo
    let doadorEncontrado = null
    //esse comando faz com que a var i tenha o valor de todos os índices do array, ou seja, tenha o valor de todos os objetos do array
    for (let i=0; i < doadores.length; i++) { 
      //esse comando verifica se a propriedade do objeto indicado pelo índice i é igual ao tipoSanguineo procurado
      if (doadores[i].tipoSanguineo === tipoSanguineo) {
       //depois de encontrar o doador certo, com base no índice, ele o armazena dentro da var criada anteriormente 
        doadorEncontrado = doadores[i]; 
      } 
    } 
  
    console.log(doadorEncontrado) 
        
    console.log(resultado);
  }
  
  // Função para buscar doadores por data da última doação
  function buscarPorDataUltimaDoacao() {
    const dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa): ");
    let resultado = `Digite a data desejada: ${dataDesejada}\n`;
  
    resultado += "========================\n";
    resultado += "RESULTADO DA BUSCA:\n";
    resultado += "========================\n";
  
    //Aqui vai o código que busca os doadores por data da última doação
//criada a variável que usaremos dentro do for para armazenar o doador certo
    let doadorEncontrado = null
    
    //esse comando faz com que a var i tenha o valor de todos os índices do array, ou seja, tenha o valor de todos os objetos do array
    for (let i=0; i < doadores.length; i++) { 
         //esse comando verifica se a propriedade do objeto indicado pelo índice i é igual à data da última doação procurada
      if (doadores[i].ultimaDoacao === dataDesejada) {
         //depois de encontrar o doador certo, com base no índice, ele o armazena dentro da var criada anteriormente 
        doadorEncontrado = doadores[i]; 
      } 
    } 
    
    console.log(doadorEncontrado) 
        
    console.log(resultado);
  }
  
  // Função para executar a ação com base na opção selecionada no menu suspenso
  function executarAcao() {
    const opcoes = document.getElementById("opcoes");
    const opcaoSelecionada = opcoes.value;
  
    switch (opcaoSelecionada) {
      case "cadastrar":
        cadastrarDoador();
        break;
      case "listar":
        listarDoadores();
        break;
      case "buscarTipo":
        buscarPorTipoSanguineo();
        break;
      case "buscarData":
        buscarPorDataUltimaDoacao();
        break;
      case "sair":
        console.log("Encerrando o programa.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
  
