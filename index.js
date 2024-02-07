function start () {
  let dataModificacao = manipulaDatas();
  let blabla = listaDeFormularios(dataModificacao.mesNumero);
  let tabelaAtualizada = atualizarTabela();
  let atualizacao = consultarDadosTabela();
}

function envioEmailsMensal () {
  let data = manipulaDatas();
  let idFormulario = listaDeFormularios(data.mesNumero);
  emailMensal();
}

function envioEmailCadastro() {
  let data = manipulaDatas();
  let atualizacao = listaDeFormularios(data.mesNumero);
  novoUsuario(data.mes, data.ano);
  sendFormsNewParticipante(formPreFilled, data.mes, data.ano);
}

function atualizarRanking () {
  let datas = manipulaDatas();
  let atualizacao = consultarDadosTabela();
}
