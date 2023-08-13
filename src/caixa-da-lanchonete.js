import { Cardapio } from "./cardapio-da-lanchonete";
import { MetodoDePagamento } from "./forma-de-pagamento";

class CaixaDaLanchonete {
    constructor() {
        this.itensCardapio = [];
        this.formaPagamento = [];
      }
    
      colocarItemCardapio(item) {
        this.cardapio.push(item);
      }
    
      colocarFormaPagamento(forma) {
        this.formasPagamento.push(forma);
      }

    calcularValorDaCompra(metodoDePagamento, itens) {
        const caixa = new CaixaDaLanchonete(); 
        const cardapio = new Cardapio(); 
        const metodosDePagamento = new MetodoDePagamento();
        caixa.colocarItemCardapio(cardapio.inserirItemCardapio('cafe', 'Café', 'R$ 3,00'));
        caixa.colocarItemCardapio(cardapio.inserirItemCardapio('chantily', 'Chantily (extra no café)', 'R$ 1,50'));
        caixa.colocarItemCardapio(cardapio.inserirItemCardapio('suco', 'Suco Natural', 'R$ 6,20')); 
        caixa.colocarItemCardapio(cardapio.inserirItemCardapio('sanduiche', 'Sanduíche', 'R$ 6,50')); 
        caixa.colocarItemCardapio(cardapio.inserirItemCardapio('queijo', 'Queijo (extra no Sanduíche)', 'R$ 2,00'));
        caixa.colocarItemCardapio(cardapio.inserirItemCardapio('salgado', 'Salgado', 'R$ 7,50'));
        caixa.colocarItemCardapio(cardapio.inserirItemCardapio('combo1', '1 Suco e 1 Sanduíche', 'R$ 9,50'));
        caixa.colocarItemCardapio(cardapio.inserirItemCardapio('combo2', '1 Café e 1 Sanduíche', "R$ 7,50")); 
        caixa.colocarFormaPagamento(metodosDePagamento.adicionarFormaDePagamento('dinheiro'));
        caixa.colocarFormaPagamento(metodosDePagamento.adicionarFormaDePagamento('debito'));
        caixa.colocarFormaPagamento(metodosDePagamento.adicionarFormaDePagamento('credito'));  
     return "";
    }

}

export { CaixaDaLanchonete };
