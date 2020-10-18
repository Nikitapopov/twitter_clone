// @ts-nocheck

import {createMuiTheme} from '@material-ui/core';
import { red } from '@material-ui/core/colors'

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',
        ]
    },
    palette: {
        primary: {
            main: 'rgb(29, 161, 242)',
            dark: 'rgb(26, 145, 218)',
            contrastText: '#fff',
        },
        secondary: {
            main: 'rgb(26, 145, 218)',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        text: {
            primary: '#14171a',
        }
    },
    shadows: [],
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 40,
                fontWeight: 700,
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            MuiFilledInput: {
                underline: {
                    '&:after': {
                        borderBottomWidth: '2px',
                    },
                    '&:before': {
                        borderColor: '#000',
                        borderBottomWidth: '2px',
                    },
                },
                input: {
                    background: 'rgb(245, 248, 250)'
                },
                MuiDialog: {
                    paper: {
                        borderRaduis: 15,
                    },
                },
                MuiDialogActions: {
                    root: {
                        mardinBottom: 8,
                    },
                },
                MuiDialogTitle: {
                    root: {
                        borderBottom: '1px solid rgb(204, 230, 240)',
                        marginBottom: 10,
                        padding: '10px 15px', '& h2': {
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: 800,
                        },
                        '& button': {
                            padding: 8,
                            marginRight: 20,
                        },
                    },
                },
            }
        }
    }
});