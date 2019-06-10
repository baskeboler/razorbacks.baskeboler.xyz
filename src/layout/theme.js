import {
    createMuiTheme
} from "@material-ui/core/styles";
import {
    red,
    grey
} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[900]
        },
        secondary: {
            main: red.A200
        },
        tertiary: {
            main: red[900]
        }
    }
});

export default theme;