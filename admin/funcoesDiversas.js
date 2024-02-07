
function simplificaNomes(texto) {
      texto = texto.toString().toUpperCase();
      texto = texto.replace(/[ÁÀÃÂÄ]/g, 'A');
      texto = texto.replace(/[ÉÈÊË]/g, 'E');
      texto = texto.replace(/[ÍÌÎÏ]/g, 'I');
      texto = texto.replace(/[ÓÒÕÔÖ]/g, 'O');
      texto = texto.replace(/[ÚÙÛÜ]/g, 'U');
      texto = texto.replace(/[Ç]/g, 'C');
      texto = texto.replace(/[^A-Z0-9]/g, '');

    return texto;
}
