const somaHorasExtras = (salario, valorHorasExtras) =>
  salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        throw {};
      }
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou nos testes`);
  } catch {
    console.error(`${titulo} não passou nos testes`);
  }
};

teste("somaHorasExtras", () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);
  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste("calculaDesconto", () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 300);
  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
