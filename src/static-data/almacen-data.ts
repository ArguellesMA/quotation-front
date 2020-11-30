import Color from 'color';
import theme from '../@vex/utils/tailwindcss';

export const almacenLabels = [
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

export const almacenData = [
  {
    id: 0,
    code: '9',
    producto: 'tostitos',
    labels: [almacenLabels[0], almacenLabels[1]]
  },
]