function atualizarTabela() {
  let planilha = SpreadsheetApp.openById(planilhaGlobal);
  let formSheet = planilha.getSheetByName(coletarRespostas);
  let dataSheet = planilha.getSheetByName(abaTabela);

  let formRange = formSheet.getDataRange();
  let formValues = formRange.getValues();
  let nome, cidade;
  let data = manipulaDatas();

  for (
    let participantesAbaFormulario = formValues.length - 1;
    participantesAbaFormulario >= 1;
    participantesAbaFormulario --
  ) {
    nome = simplificaNomes(formValues[participantesAbaFormulario][3].trim());
    cidade = simplificaNomes(
      formValues[participantesAbaFormulario][4].trim().slice(0, -2)
    );
    let precipitacao = formValues[participantesAbaFormulario][2];
    let precipitacaoStr = precipitacao.toString().replace(".", ",");
    let range = dataSheet.getRange("E:F");
    let values = range.getValues();

    for (let participantesNaTabela = 0; participantesNaTabela < values.length; participantesNaTabela++) {
      let nomePlanilha = simplificaNomes(
        values[participantesNaTabela][0].trim()
      );
      let cidadePlanilha = simplificaNomes(
        values[participantesNaTabela][1].trim().toUpperCase()
      );

      if (nomePlanilha == nome && cidadePlanilha == cidade) {
        let row = range.getRow() + participantesNaTabela;
        dataSheet.getRange(row, colunaNaTabela).setValue(precipitacaoStr);

        formSheet.deleteRow(participantesAbaFormulario + 1);
        break;
      }
    }
  }

  let alcance = dataSheet.getRange(6, 1, 42, dataSheet.getLastColumn());
  alcance.sort({ column: 20, ascending: false });
  
  if (nome && cidade != 'undefined') {
    ultimaMudancaPlanilha = `Última adição: ${nome}, ${cidade},\n ${data.diaFormatado}`;
  } else {
    ultimaMudancaPlanilha = `Atualização manual em\n ${data.diaFormatado}`;
  }
  dataSheet.getRange('D3').setValue(ultimaMudancaPlanilha);
  dataSheet.getRange('G3').setValue(data.ano);}