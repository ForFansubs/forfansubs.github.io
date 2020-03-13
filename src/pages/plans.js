import React from 'react'
import { Box } from '@material-ui/core'

import { PanelOne } from '../config/assets/index'
import { PlansPanel } from '../components/plans/index'

export default () => {
    const PanelList = [
        {
            image: PanelOne,
            title: "Self-hosted",
            description: "ForFansubs servisini sunucunuza/VPS'inize kurmak aslında çok basit ve kolay bir işlem.",
            price: 0,
            buttons: [
                {
                    title: "Hemen başla",
                    link: "https://forfansubs.github.io/docs/"
                }
            ]
        }
    ]

    return (
        <>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                {PanelList.map(p => (
                    <PlansPanel key={p.title} {...p} />
                ))}
            </Box>
        </>
    )
}