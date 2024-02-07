let dadosDosUsuarios

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createPersonalForm(colunaEmailsParaEnvio) {
  let ultimaLinha = colunaEmailsParaEnvio.getLastRow();
  let colunaEmailNomeCidade = colunaEmailsParaEnvio.getRange(`B2:E${ultimaLinha}`).getValues();
  dadosDosUsuarios = [];
  let inicioDaColetaDeDados = 0;
  for ( let dadoDoUsuario = inicioDaColetaDeDados; dadoDoUsuario < colunaEmailNomeCidade.length; dadoDoUsuario ++ ) {
    let usuario = {
      emailNaAbaParticipantes: colunaEmailNomeCidade[dadoDoUsuario][0],
      nomeNaAbaParticipantes: colunaEmailNomeCidade[dadoDoUsuario][1],
      cidadeNaAbaParticipantes: colunaEmailNomeCidade[dadoDoUsuario][2],
      estadoNaAbaParticipantes: colunaEmailNomeCidade[dadoDoUsuario][3],
    }

    let formulario = FormApp.openById(idFormularioGlobal);
    let formItem = formulario.getItems();
    let formResponse = formulario.createResponse();
    let nomeFormItem = formItem[1].asTextItem();
    let nomeResponse = nomeFormItem.createResponse(capitalizeFirstLetter(usuario.nomeNaAbaParticipantes));
    formResponse.withItemResponse(nomeResponse);
    
    let cityFormItem = formItem[2].asTextItem();
    let cityResponse = cityFormItem.createResponse(`${capitalizeFirstLetter(usuario.cidadeNaAbaParticipantes)}-${usuario.estadoNaAbaParticipantes.toUpperCase()}`);
    formResponse.withItemResponse(cityResponse);
    
    let formularioPersonalizado = formulario.setConfirmationMessage(
      `Obrigado pela resposta. Seu acumulado foi atualizado.`
    );
    formularioPersonalizado;
    let formPreFilled = formResponse.toPrefilledUrl();
      
    dadosDosUsuarios.push(usuario);
  }
    return usuario;
}

function emailMensal (usuario) {
  let planilha = SpreadsheetApp.openById(planilhaGlobal);
  let colunaEmailsParaEnvio = planilha.getSheetByName(AbaParticipantesGlobal);
  let usuarioEmailMensal = createPersonalForm(colunaEmailsParaEnvio);


}

function novoUsuario (usuario) {
  let planilha = SpreadsheetApp.openById(planilhaGlobal);
  let colunaEmailsParaEnvio = planilha.getSheetByName(abaParticipantesConfirmadosGlobal); 
  let usuarioNovoUsuario = createPersonalForm(colunaEmailsParaEnvio);
}