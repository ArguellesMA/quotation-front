import { Estatus } from './estatus'

export class Cotizacion {
    $key: string;
    id: number;
    folioCotizacion: number;
    folioFactura: number;
    cliente: string;
    importe: string;
    fechaPago: string;
    estatus: number//Estatus;
}