import { Cardapio } from "./cardapio-da-lanchonete";
import { MetodoDePagamento } from "./forma-de-pagamento";

class CaixaDaLanchonete {
    constructor() {
        this.inserirFormadePagamento();
        this.inserirItensCardapio();
    }

    inserirFormadePagamento() {
        this.metodosDePagamento = new MetodoDePagamento();
        this.metodosDePagamento.adicionarFormaDePagamento('dinheiro');
        this.metodosDePagamento.adicionarFormaDePagamento('credito');
        this.metodosDePagamento.adicionarFormaDePagamento('debito');
    }

    inserirItensCardapio() {
        this.cardapio = new Cardapio();
        this.cardapio.inserirItemCardapio('cafe', 'Café', '3.00');
        this.cardapio.inserirItemCardapio('chantily', 'Chantily (extra do Café)', '1.50');
        this.cardapio.inserirItemCardapio('suco', 'Suco Natural', '6.20');
        this.cardapio.inserirItemCardapio('sanduiche', 'Sanduíche', '6.50');
        this.cardapio.inserirItemCardapio('queijo', 'Queijo (extra do Sanduíche)', '2.00');
        this.cardapio.inserirItemCardapio('salgado', 'Salgado', '7.25');
        this.cardapio.inserirItemCardapio('combo1', '1 Suco e 1 Sanduíche', '9.50');
        this.cardapio.inserirItemCardapio('combo2', '1 Café e 1 Sanduíche', '7.50');
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        if (!this.metodosDePagamento.pagamentos.includes(formaDePagamento)) {
            return "Forma de pagamento inválida!";
        }
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let total = 0;
        const itensSelecionados = new Set();

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');

            const itemCardapio = this.cardapio.itens.find(itemCardapio => itemCardapio.codigo === codigo);

            if (!itemCardapio) {
                return "Item inválido!";
            }
            if (quantidade <= 0 || isNaN(quantidade)) {
                return "Quantidade inválida!";
            }

            if (itemCardapio.descricao.toLowerCase().includes('chantily')) {
                if (!itensSelecionados.has('cafe')) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
            if (itemCardapio.descricao.toLowerCase().includes('queijo')) {
                if (!itensSelecionados.has('sanduiche')) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }

            total += parseFloat(itemCardapio.valor) * parseInt(quantidade, 10);
            itensSelecionados.add(itemCardapio.codigo);
        }

        if (formaDePagamento === "dinheiro") {
            total *= 0.95;
        } else if (formaDePagamento === "credito") {
            total *= 1.03;
        }

        const totalBR = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return totalBR;
    }
}

export { CaixaDaLanchonete };
