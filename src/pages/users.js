import React from 'react'

import { PuzzleSubsLogo, FGLLogo, AnimeWhoLogo } from '../config/assets/index'
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