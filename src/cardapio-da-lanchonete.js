class Cardapio {
    constructor(){
        this.itens=[]; 
    }
    inserirItemCardapio(codigo, descricao, valor){
        this.itens.push({ codigo, descricao, valor }); 
    }
    retornaProdutos(){
        return this.itens; 
    }
}

export {Cardapio};
