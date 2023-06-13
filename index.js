//Questão 1

//Função lista de números primos de 1 até 1000
function N_Primos() {

    //Cria a constante primos que vai armazernar os números primos
    const primos = [];

    //Cria um loop entre os números 1 e 1000
    for (let x = 1; x <= 1000; x++) {
        let divisores = 0;
        
        //Verifica se o número é primo ou não
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i == 0) {
                divisores++;
                break;
            }
        }
        
        //Escreve os números primos na constante "primos" que sejam maiores que 1
        if (divisores == 0 && x > 1) {
            primos.push(x);
        }
    }

    //Mostra os números armazenados na constante "primos"
    return primos;
}

//Função lista de números primos
function N_Primos(inicio, fim) {

    //Cria a constante primos que vai armazernar os números primos
    const primos = [];

    //Cria um loop entre os números 1 e 1000
    for (let x = inicio; x <= fim; x++) {
        let divisores = 0;
        
        //Verifica se o número é primo ou não
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i == 0) {
                divisores++;
                break;
            }
        }
        
        //Escreve os números primos na constante "primos" que sejam maiores que 1
        if (divisores == 0 && x > 1) {
            primos.push(x);
        }
    }

    //Mostra os números armazenados na constante "primos"
    return primos;
}

//Questão 2

//Função de verificar a senha
function verificar_senha() {

    //Pede a senha
    senha = prompt('Digite a sua senha:')

    //Verifica se a senha é ou não válida
    if (senha.length >= 8 && /[a-z]/.test(senha) && /[A-Z]/.test(senha) && /\d/.test(senha)) {
      return true;
    }
    
    else {
        //Alerta na tela caso a senha não seja válida
      alert('A senha não é válida. Insira pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.');
      return false;
    }
  }

//Questão 3

//Função calcula a fatorial de cada número
  function fatorial(x) {

    //Verifica se é = 1 ou = 0
    if (x == 0 || x == 1) {
      return 1;
    }
    
    //Calcula a fatorial e a exibe na tela
    else {
      return x * fatorial(x - 1);
    }
  }

//Questão 4

//Função que verifica se o número é ou não um quadrado perfeito
  function quadrado(x) {
    
    //Verifica se é <0
    if (x < 0) {
      return false;
    }
    
    //Calcula a raiz e o quadrado do numero inserido
    else{
    var raiz = Math.floor(Math.sqrt(x));
    return raiz * raiz == x;
    }
  }
