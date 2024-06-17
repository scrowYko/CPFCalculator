let res1, res2, dv1, dv2;

function CpfCalc(cpf) {
  console.log(cpf.length);
  if (cpf.length != 11) {
    console.log("erro");
  } else {
    //declarando let's para os calculos de cpf
    let novePrimeirosDigitos = cpf.substring(0, 9);
    let dezPrimeirosDigitos = cpf.substring(0, 10);
    let soma1 = 0;
    let soma2 = 0;
    let mult1 = 2;
    let mult2 = 2;
    for (let i = 8; i >= 0; i--) {
      //soma e multiplica pra descobrir o primeiro verificador
      let digito = novePrimeirosDigitos.charAt(i);
      digito = parseInt(digito);
      soma1 += digito * mult1;
      mult1 += 1;
    }
    if (soma1 % 11 == 0 || soma1 % 11 == 1) {
      dv1 = 0;
    } else {
      dv1 = 11 - (soma1 % 11);
    }

    for (let i = 9; i >= 0; i--) {
      //soma e multiplica pra descobrir o segundo verificador
      let digito = dezPrimeirosDigitos.charAt(i);
      digito = parseInt(digito);
      soma2 += digito * mult2;
      mult2 += 1;
    }
    if (soma2 % 11 == 0 || soma2 % 11 == 1) {
      dv2 = 0;
    } else {
      dv2 = 11 - (soma2 % 11);
    }
    console.log(`${dv1}, ${dv2}`); //retorna os dois digitos verificadores

    //verificar se os digitos verificadores batem com os digitos verificadores digitados
    if (dv1 == cpf[9] && dv2 == cpf[10]) {
      console.log("Cpf válido");
    } else {
      console.log("Cpf inválido");
    }
  }
}

CpfCalc("13737477906");
