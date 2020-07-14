import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {orange} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
            primary: purple[500],
            secondary: green[500],
        },
        status: {
            danger: orange[500],
        },
    },
});

export default theme;