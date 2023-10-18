// **Enunciado: Grande Corrida dos Piratas em One Piece**

// Neste desafio, você será o capitão de uma tripulação pirata em busca do One Piece,
//  o lendário tesouro no mundo de One Piece. Sua tripulação está prestes a participar da Grande Corrida dos Piratas,
//   uma competição mortal para alcançar o tesouro. Você deve criar um programa em JavaScript para simular a corrida
//    e determinar qual tripulação pirata alcançará o One Piece primeiro.

// O programa deve seguir as etapas a seguir:

// 1. Cadastre 5 tripulações piratas, solicitando o nome de cada uma por meio do prompt. 
// Cada tripulação terá um capitão e sua equipe.

// 2. A corrida consistirá em 10 etapas, e a cada etapa, as 
// tripulações se movem em direção ao One Piece. Utilize um loop para simular as etapas da corrida.

// 3. A cada etapa, role um dado virtual de 6 lados para determinar quantos metros cada tripulação avança.
//  O dado representa os ventos favoráveis e obstáculos no caminho.

// 4. Atualize a posição de cada tripulação a cada etapa e exiba a posição atual no final de cada etapa.

// 5. A tripulação que alcançar a posição 100 metros primeiro será a vencedora e encontrará o One Piece.

// 6. Exiba o nome da tripulação vencedora que encontrou o One Piece e parabenize o capitão por sua conquista lendária.

// Lembre-se de que no mundo de One Piece, 
//  sorte e a determinação podem fazer a diferença entre encontrar o tesouro ou ser derrotado
//  . Prepare-se para a Grande Corrida dos Piratas e que a tripulação mais astuta alcance o One Piece e
//   se torne lendária nos mares!


// DICA:



// 1. Cadastre 5 tripulações piratas, solicitando o nome de cada uma por meio do prompt. 
// Cada tripulação terá um capitão e sua equipe.

let tripulação1 = prompt("Insira o nome  da primeira tripulação a ser cadastrada:");
let tripulação2 = prompt("Insira o nome  da segunda tripulação a ser cadastrada:");
let tripulação3 = prompt('Insira o nome  da terceira tripulação a ser cadastrada:'); 
let tripulação4 = prompt('Insira o nome  da quarta tripulação a ser cadastrada:'); 
let tripulação5 = prompt('Insira o nome  da quinta tripulação a ser cadastrada:'); 

let arrayDeTripulaçôesECapitaes = [ 
    {tripulação1, capitão1: prompt(), equipe1: prompt()},
    {tripulação2, capitão2: prompt(), equipe2: prompt()},
    {tripulação3, capitão3: prompt(), equipe3: prompt()},
    {tripulação4, capitão4: prompt(), equipe4: prompt()},
    {tripulação5, capitão5: prompt(), equipe5: prompt()}
] 

let arrayDeTripulaçoes = [tripulação1, tripulação2, tripulação3, tripulação4, tripulação5]

// 2. A corrida consistirá em 10 etapas, e a cada etapa, as 
// tripulações se movem em direção ao One Piece. Utilize um loop para simular as etapas da corrida.


    for ( let i = 1; i < 10 ; i ++ ) { 

 function avançar { 
    

    for (let indiceDoArrayDeTripulações = 0; indiceDoArrayDeTripulações < 4; indiceDoArrayDeTripulações ++ ) {
        arrayDeTripulaçoes[indiceDoArrayDeTripulações] 
    }


 }


 function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

 }


    









// 3. A cada etapa, role um dado virtual de 6 lados para determinar quantos metros cada tripulação avança.
//  O dado representa os ventos favoráveis e obstáculos no caminho.