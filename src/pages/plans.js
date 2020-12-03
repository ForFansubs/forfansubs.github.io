import { Box, Divider, makeStyles, Typography } from '@material-ui/core'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSnackbar } from 'notistack';
import Tooltip from '../components/Tooltip'

import { PanelOne, PanelTwo } from '../config/assets/index'
import { PlansPanel } from '../components/plans/index'

const useStyles = makeStyles(theme => ({
    DiscordIDText: {
        margin: theme.spacing(0, 1),
        fontStyle: "italic",
        fontWeight: 600
    },
    Divider: {
        margin: theme.spacing(2, 0)
    }
}))

function TextBox() {
    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar();

    function _handleCopyIDClick() {
        enqueueSnackbar('ID başarıyla kopyalandı.', {
            variant: 'success',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            },
            autoHideDuration: 3500
        });
    }

    function _handleCopyMailClick() {
        enqueueSnackbar('Mail adresi başarıyla kopyalandı.', {
            variant: 'success',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            },
            autoHideDuration: 3500
        });
    }

    return (
        <>
            <Box>
                <Typography variant="body1">
                    Sistem grubunuza özel kurulup, hazır hale getirilecektir.
                    <br />
                    Herhangi bir sorun olduğunda, benimle direkt olarak iletişim kurabileceksiniz.
                    <br />
                    Fiyat ve diğer detaylar için lütfen bana ulaşın.
                </Typography>
            </Box>
            <div className={classes.Divider}>
                <Divider />
            </div>
            <Box textOverflow="wrap">
                <Typography variant="body2">
                    Bana
                    <span className={classes.DiscordIDText}>
                        <Tooltip aria-label="add" title="Mail adresini kopyalamak için tıklayın.">
                            <CopyToClipboard
                                text="ayberk.tandogan@outlook.com"
                                onCopy={_handleCopyMailClick}>
                                <span>
                                    ayberk.tandogan@outlook.com
                                </span>
                            </CopyToClipboard>
                        </Tooltip>
                    </span>mail adresinden ya da
                    <span className={classes.DiscordIDText}>
                        <Tooltip aria-label="add" title="ID'yi kopyalamak için tıklayın.">
                            <CopyToClipboard
                                text="163297307247378433"
                                onCopy={_handleCopyIDClick}>
                                <span>
                                    163297307247378433
                                </span>
                            </CopyToClipboard>
                        </Tooltip>
                    </span>
                    ID'li Discord hesabı üzerinden özel mesajla ulaşabilirsiniz.
                </Typography>
                <Typography variant="subtitle2" component="p">
                    <a href="https://discord.id/" target="_blank" rel="noreferrer">
                        Yukardaki ID'yi bu site üzerinde aratarak Discord adıma ulaşabilirsiniz.
                    </a>
                </Typography>
            </Box>
        </>
    )
}

export default function PanelPage() {
    const PanelList = [
        {
            image: PanelOne,
            title: "Kişisel",
            description: "ForFansubs servisini kişisel sunucunuza kurmak çok basit bir işlem. Aşağıdaki butona basarak dökümanlara ulaşabilirsiniz.\n\n(Özel kurulumlarda destek sağlamıyorum.)",
            price: 0,
            buttons: [
                {
                    title: "Hemen başla",
                    link: "https://forfansubs.github.io/docs/"
                }
            ]
        },
        {
            image: PanelTwo,
            title: "Benim İçin Kur",
            description: "ForFansubs servisini sizin için bir sunucuya kurayım, size sadece kullanması kalsın.",
            price: "İletişime geçin",
            buttons: [
                {
                    title: "Detaylar",
                    link: ""
                }
            ],
            textBox: <TextBox />
        }
    ]

    return (
        <>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                {PanelList.map((p, i) => (
                    <PlansPanel key={p.title} last={i === PanelList.length - 1 ? true : false} {...p} />
                ))}
            </Box>
        </>
    )
}