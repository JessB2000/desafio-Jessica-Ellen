class MetodoDePagamento{
    constructor(){
        this.pagamentos = []; 
    }
    adicionarFormaDePagamento(nome){
        this.pagamentos.push(nome); 
    }
    retornarFormaPagamento(){
        return this.pagamentos; 
    }
}

export {MetodoDePagamento};