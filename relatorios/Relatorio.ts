class Relatorio {
  private _top5: any;
  private _ultimos5: any;
  private _semDados: any;
  private planilha = new Planilha ();

  constructor () {
    this.planilha.planilhaUsuario(planilhaGlobal);
    this.planilha.abaUsuario(abaTabela);
    this.planilha.abaDestinoRelario(abaRelatorio);
    this.planilha.dados(abaTabela.getRange('D6:I38').getValues())
  }
  

  set top5 (top5: any) {
    this._top5 = this.top5;
  }
  get top5 () {
    return this._top5
  }
  set ultimos5 (ultimos5: any) {
    this._ultimos5 = this.ultimos5;
  }
  get ultimos5 () {
    return this._ultimos5;
  }
  set semDados (semDados: any) {
    this._semDados = this.semDados;
  }
  get semDados () {
    return this._semDados;
  }

  
  
}

class Planilha {
  private _planilhaUsuario: any;
  private _abaUsuario: any;
  private _dados: any;
  private _abaDestinoRelario: any;

  set planilhaUsuario(planilhaUsuario: any) {
    this._planilhaUsuario = this.planilhaUsuario;
  }
  get planilhaUsuario() {
    return this._planilhaUsuario;
  }
  set abaUsuario(abaUsuario: any) {
    this._abaUsuario = this.abaUsuario;
  }
  get abaUsuario() {
    return this._abaUsuario;
  }
  set dados(dados: any) {
    this._dados = this.dados;
  }
  get dados() {
    return this._dados;
  }
  set abaDestinoRelario (abaDestinoRelario: any) {
    this._abaDestinoRelario = this.abaDestinoRelario;
  };
  get abaDestinoRelario () {
    return this._abaDestinoRelario;
  }
}