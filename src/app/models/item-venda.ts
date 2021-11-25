import { Produto } from "./produto";

export interface ItemVenda {
    itemId?: number;
    produto: Produto;
    produtoId: number;
    quantidade: number;
    preco: number;
    carrinhoId: string;
    criadoEm?: Date;
}
