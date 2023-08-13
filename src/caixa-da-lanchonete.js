import { Cardapio } from "./cardapio-da-lanchonete";
import { MetodoDePagamento } from "./forma-de-pagamento";

class CaixaDaLanchonete {
    constructor() {
        this.itensCardapio = [];
        this.formaPagamento = [];
    }

    colocarItemCardapio(item) {
        this.itensCardapio.push(item);
    }

    colocarFormaPagamento(forma) {
        this.formaPagamento.push(forma);
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = new Cardapio();
        const metodosDePagamento = new MetodoDePagamento();
        if (!this.formaPagamento.some(forma => forma === metodoDePagamento)){
            return "Forma de pagamento inválida!";
        }
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra"; 
        }

        let total = 0; 

        for (const item of itens){
            const [codigo, quantidade] = item.split(','); 

            const itemCardapio = this.itensCardapio.find(item => item.codigo === codigo); 

            if (!itemCardapio){
                return "Item inválido!";
            }

            total += itemCardapio.valor * parseInt(quantidade, 10); 
        }
        if (metodoDePagamento === "dinheiro"){
            total *= 0.95; 
        }
        else if (metodoDePagamento === "credito"){
            total *= 1.03; 
        }
        return `Total da compra (${metodoDePagamento}): R$ ${total.toFixed(2)}`;
    }
}

export { CaixaDaLanchonete };
