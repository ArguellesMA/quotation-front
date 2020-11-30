import Color from 'color';
import theme from '../@vex/utils/tailwindcss';

export const ventaLabels = [
  {
    text: 'Nuevo',
    backgroundColor: Color(theme.colors.green['500']).fade(0.9),
    color: theme.colors.green['500']
  },
  {
    text: 'Lead',
    backgroundColor: Color(theme.colors.cyan['500']).fade(0.9),
    color: theme.colors.cyan['500']
  },
  {
    text: 'En Proceso',
    backgroundColor: Color(theme.colors.teal['500']).fade(0.9),
    color: theme.colors.teal['500']
  },
  {
    text: 'Completo',
    backgroundColor: Color(theme.colors.purple['500']).fade(0.9),
    color: theme.colors.purple['500']
  },
];

export const ventaData = [
  {
    id: 0,
    imageSrc: 'assets/img/avatars/1.jpg',
    dcmTotal:'9302',
    Descripcion: 'fallido',
    dcmCantidad: '23',
    costo: '3123123',
    placa:'jjjs',
    ubicacion: 'dfsaasdf231',
    urlImage: 'Mendoza',
    pago: 'tarjeta',

    labels: [ventaLabels[0], ventaLabels[1]]
  },
]