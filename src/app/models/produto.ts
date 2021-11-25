import { Categoria } from "./categoria";

export interface Produto {
  produtoId?: number;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  criadoEm?: Date;
  categoriaId: number;
  categoria?: Categoria;
}
