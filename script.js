
    let numeroAtual = 0;
    let resultado = 0;
    let operacaoPendente = null;

    function adicionarNumero(numero) {
      numeroAtual = numeroAtual * 10 + numero;
      atualizarVisor();
      reproduzirBip();
    }

    function somar() {
      executarOperacaoPendente();
      operacaoPendente = somarNumeros;
      resultado = numeroAtual;
      numeroAtual = 0;
      atualizarVisor();
      reproduzirBip();
    }

    function subtrair() {
      executarOperacaoPendente();
      operacaoPendente = subtrairNumeros;
      resultado = numeroAtual;
      numeroAtual = 0;
      atualizarVisor();
      reproduzirBip();
    }

    function multiplicar() {
      executarOperacaoPendente();
      operacaoPendente = multiplicarNumeros;
      resultado = numeroAtual;
      numeroAtual = 0;
      atualizarVisor();
      reproduzirBip();
    }

    function dividir() {
      executarOperacaoPendente();
      operacaoPendente = dividirNumeros;
      resultado = numeroAtual;
      numeroAtual = 0;
      atualizarVisor();
      reproduzirBip();
    }

    function calcularResultado() {
      executarOperacaoPendente();
      operacaoPendente = null;
      atualizarVisor();
      reproduzirBip();
    }

    function limpar() {
      numeroAtual = 0;
      resultado = 0;
      operacaoPendente = null;
      atualizarVisor();
      reproduzirBip();
    }

    function executarOperacaoPendente() {
      if (operacaoPendente && numeroAtual !== 0) {
        resultado = operacaoPendente(resultado, numeroAtual);
        numeroAtual = 0;
      }
    }

    function somarNumeros(a, b) {
      return a + b;
    }

    function subtrairNumeros(a, b) {
      return a - b;
    }

    function multiplicarNumeros(a, b) {
      return a * b;
    }

    function dividirNumeros(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        alert("Não é possível dividir por zero!");
        return a;
      }
    }

    function atualizarVisor() {
      document.getElementById("resultado").value = numeroAtual !== 0 ? numeroAtual : resultado;
    }

    function reproduzirBip() {
      const audio = new Audio('/audioeimg/beep-sound-8333.mp3'); // Substitua pelo caminho real do seu arquivo de som
      audio.play();
    }
  