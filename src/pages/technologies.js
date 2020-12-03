import { Technologies } from '../config/assets/index'
import { TechPanel } from '../components/technologies/index'
import { Grid } from '@material-ui/core'

export default function TechnologiesPage() {
    const TechList = [
        {
            title: "React",
            logo: Technologies,
            link: "https://reactjs.org/",
            offset: [0, 71]
        },
        {
            title: "Javascript",
            logo: Technologies,
            link: "https://developer.mozilla.org/tr/docs/Web/JavaScript",
            offset: [71, 135]
        }, {
            title: "NodeJS",
            logo: Technologies,
            link: "https://nodejs.org/",
            offset: [135, 237],
            invert: true
        }, {
            title: "ExpressJS",
            logo: Technologies,
            link: "https://expressjs.com/",
            offset: [237, 347],
            invert: true
        }, {
            title: "MariaDB",
            logo: Technologies,
            link: "https://mariadb.org/",
            offset: [347, 411]
        }, {
            title: "MaterialUI",
            logo: Technologies,
            link: "https://material-ui.com/",
            offset: [411, 492]
        }
    ]

    return (
        <>
            <Grid container spacing={4} justify="center">
                {TechList.map((t, i) => (
                    <TechPanel {...t} key={i + t.title} />
                ))}
            </Grid>
        </>
    )
}