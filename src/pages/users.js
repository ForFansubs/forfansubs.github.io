import { PuzzleSubsLogo, FGLLogo, AnimeWhoLogo, ZeussLogo, NepentheLogo, NextLogo } from '../config/assets/index'
import { UsersPanel } from '../components/users/index'
import { Grid } from '@material-ui/core'

export default () => {
    const UsersList = [
        {
            title: "FGL Çeviri Topluluğu",
            logo: FGLLogo,
            link: "https://fgl.moe/"
        },
        {
            title: "PuzzleSubs",
            logo: PuzzleSubsLogo,
            link: "https://puzzlesubs.com/"
        },
        {
            title: "AnimeWho",
            logo: AnimeWhoLogo,
            link: "https://animewho.com/"
        },
        {
            title: "Zeuss Fansub",
            logo: ZeussLogo,
            link: "https://zeussfansub.com/"
        },
        {
            title: "NepentheSubs",
            logo: NepentheLogo,
            link: "https://nepenthesubs.com/"
        },
        {
            title: "Next Fansub",
            logo: NextLogo,
            link: "https://nextfansub.net/"
        }
    ]

    return (
        <>
            <Grid container spacing={4} justify="center">
                {UsersList.map((t, i) => (
                    <UsersPanel {...t} key={i + t.title} />
                ))}
            </Grid>
        </>
    )
}