export interface Auto {
    id: number;
    imageSrc: string;
    marca: string;
    modelo: string;
    version: string;
    precio: number;
    notes?: string;
    selected: boolean;
    starred: boolean;
}