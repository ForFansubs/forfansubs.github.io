import React from 'react'
import { Grid } from '@material-ui/core'

import Header from '../header/index'
import Footer from '../footer/index'

export default props => {
    return (
        <>
            <Grid container justify="center">
                <Grid item md={11} xs={12}>
                    <Header />
                </Grid>
                {props.children}
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>

        </>
    )
}