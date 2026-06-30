import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Cria uma instância do tema para a aplicação
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f4f6f8',
    },
  },
});

export default theme;
