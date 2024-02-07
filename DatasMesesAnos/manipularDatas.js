function manipulaDatas () {
  let diaMesAno = new Date();
  let ano = diaMesAno.getFullYear();
  let dia = diaMesAno.getDate();
  let mesNumero = 2;//diaMesAno.getMonth();
  Logger.log(`o valor ${mesNumero} é ${typeof(mesNumero)}`);
  let mesArray = [
    "Janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  let mes = mesArray[mesNumero].trim();
  let diaFormatado = new Intl.DateTimeFormat("pt-br", {
    dateStyle: "short",
    timeStyle: "short",
  }).format();

  return { ano, dia, mesNumero, mes, diaFormatado };
}