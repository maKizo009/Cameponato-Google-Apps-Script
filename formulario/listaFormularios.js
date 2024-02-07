let idFormularioGlobal;
let colunaNaTabela;
let coletarRespostas;

function listaDeFormularios (mesNumero) {
  let mapFormularios = new Map();
  
  mapFormularios.set(0,
     {idFormulario: idFormularioJaneiro,
       coluna: 8,
       formRespostas: formularioColetaAcum[0]
      });

  mapFormularios.set(1,
     {idFormulario:
       idFormularioFevereiro,
       coluna: 9,
       formRespostas: formularioColetaAcum[1]
     });

  mapFormularios.set(2, 
    {idFormulario: idFormularioMarco, 
      coluna: 10, formRespostas: 
      formularioColetaAcum[2]
    });

  mapFormularios.set(3, 
    {idFormulario: idFormularioAbril, 
      coluna: 11, 
      formRespostas: 
      formularioColetaAcum[3]
    });

  mapFormularios.set(4, 
    {idFormulario: idFormularioMaio, 
      coluna: 12, 
      formRespostas: formularioColetaAcum[4]
    });

  mapFormularios.set(5, 
    {idFormulario: idFormularioJunho, 
      coluna: 13, 
      formRespostas: formularioColetaAcum[5]
    });

  mapFormularios.set(6, 
    {idFormulario: idFormularioJulho, 
      coluna: 14, 
      formRespostas: formularioColetaAcum[6]
    });

  mapFormularios.set(7, 
    {idFormulario: idFormularioAgosto, 
      coluna: 15, 
      formRespostas: formularioColetaAcum[7]
    });

  mapFormularios.set(8, 
    {idFormulario: idFormularioSetembro, 
      coluna: 16, 
      formRespostas: formularioColetaAcum[8]
    });

  mapFormularios.set(9, 
    {idFormulario: idFormularioOutubro, 
      coluna: 17, 
      formRespostas: formularioColetaAcum[9]
    });

  mapFormularios.set(10, 
    {idFormulario: idFormularioNovembro, 
      coluna: 18, 
      formRespostas: formularioColetaAcum[10]
     });
     
  mapFormularios.set(11, 
    {idFormulario: idFormularioDezembro, 
      coluna: 19, 
      formRespostas:formularioColetaAcum[11]
    });

  let formularioEColuna = mapFormularios.get(mesNumero);
  Logger.log(`Mapeando os formularios ${formularioEColuna}`);

  idFormularioGlobal = formularioEColuna.idFormulario;
  Logger.log(`Pegando o formulário ${idFormularioGlobal}`);

  colunaNaTabela = formularioEColuna.coluna;
  Logger.log(`E a coluna onde será adicionado os dados desse formulário será: ${colunaNaTabela}`);

  coletarRespostas = formularioEColuna.formRespostas;
  Logger.log(`A aba de respostas para pegar é ${coletarRespostas}`);

  return idFormularioGlobal;
}