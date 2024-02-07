function sendFormsNewParticipante(formPreFilled, mes, ano) {
    let data = manipulaDatas();
    let usuarioNovoUsuario = novoUsuario(data.mes, data.ano);  
  let subject = subjectEmail;
  
  MailApp.sendEmail({
    to: usuarioNovoUsuario.emailNaAbaParticipantes,
    subject: subject,
    htmlBody: templateEmail
  });
    let abaConfirmados = planilha.getSheetByName(abaParticipantesConfirmadosGlobal);
    abaConfirmados.appendRow(dadosDoUsuario); // Adiciona o usuário na aba "Participantes Confirmados"

    let dadosDoUsuario = colunaEmailsParaEnvio.getRange(linha, 1, 1, 4).getValues()[0]; // Obtém os dados do usuário
    colunaEmailsParaEnvio.deleteRow(linha); // Remove a linha do usuário na aba "Participantes"
}
