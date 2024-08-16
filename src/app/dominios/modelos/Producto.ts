import { Categoria } from "./categoria";

export interface Producto {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    creationAt: string;
    category: Categoria;
}