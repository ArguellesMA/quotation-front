export interface Cotizacion {
    id: number;
    imageSrc: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    tipoCotizacion: string;
    idAuto: string;
    marca: string;
    modelo: string;
    version: string;
    plazo: number;
    precio: number;
    iva: number;
    total: number;
    baseCalculo : number;
    rentaInicial : number;
    comisionApertura : number;
    depositoGarantia : number;
    totalPagoInicial : number;
    rentasPosteriores : number;
    rentaMensual : number;
    gastosAdicionalesDeducibles : number;
    ivaDeducible : number;
    rentaTotalMensual : number;
    valorResidual: number; 
    notes?: string;
    selected: boolean;
    starred: boolean;
    
}