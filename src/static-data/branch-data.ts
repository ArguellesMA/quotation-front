import Color from 'color';
import theme from '../@vex/utils/tailwindcss';

export const branchLabels = [
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

export const branchData = [
  {
    id: 0,
    code: 'tostitos',
    nameBranch: 'sabritas',
    type: '3123123',
    mail: 'dfsaasdf231',
    phoneNumber: 'Mendoza',
    razonSocial: '312',
    rfc: 'totopos',
    street: 'totopos',
    labels: [branchLabels[0], branchLabels[1]]
  },
];