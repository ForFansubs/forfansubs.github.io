import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './overrides.scss'
import { SnackbarProvider } from 'notistack';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import themeObject from './config/theme/index'

const logList = [
    {
        title: "Front-end",
        link: "https://github.com/ForFansubs/front-end"
    },
    {
        title: "Front-end Admin",
        link: "https://github.com/ForFansubs/front-end-admin"
    },
    {
        title: "Back-end",
        link: "https://github.com/ForFansubs/node-server"
    }
]

function Mount() {
    if (process.env.NODE_ENV === "development") console.log(themeObject)
    window.theme = themeObject

    logList.map(l => console.log(`%c${l.title} Repo:%c ${l.link}`, "color: white; background-color: #000; font-size: 18px", "color:blue; font-size: 18px"))

    return (
        <>
            <StrictMode>
                <ThemeProvider theme={themeObject}>
                    <CssBaseline>
                        <SnackbarProvider maxSnack={3}>
                            <App />
                        </SnackbarProvider>
                    </CssBaseline>
                </ThemeProvider>
            </StrictMode>
        </>
    )
}

ReactDOM.render(<Mount />, document.getElementById('root'));