function ajustarOrdemParticipantes () {
  let alcance = dataSheet.getRange(6, 1, 42, dataSheet.getLastColumn());
  alcance.sort({ column: 20, ascending: false });
}
