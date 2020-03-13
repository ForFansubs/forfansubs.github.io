import React from 'react'

import { IndexPage, EpisodePage, IndexTheme, SearchIndex, WebhookIndex, AdminIndexPage } from '../config/assets/index'
import { FeaturePanel } from '../components/features/index'
import { Grid } from '@material-ui/core'

export default () => {
    const FeatureList = [
        {
            title: "Yenilikçi Tasarım",
            description: "Mevcutta var olan kötü görünümlü, yavaş ve kullanışsız siteler/sistemler yerine yeni teknolojilerden yararlanan, hızlı, sade, istenileni istenildiği gibi yapan bir servis istiyordum. Bu yüzden ForFansubs'ı hem bu istekler ışığında, hem de bir çeviri grubunun istekleri ve ihtiyaçlarını düşünerek ve birebir görerek hazırladım.",
            image: IndexPage
        },
        {
            title: "İzleme Kısmı",
            description: "İzleyicilerinize sadece indirme linki değil, izleme linklerini de sunabilirsiniz!\nYetersizlikler yüzüden sitenizde sadece indirme linklerinin bulunmasından sıkılmadınız mı? Artık sitenizde izleme bölümü de var.",
            image: EpisodePage,
            duration: "2000ms"
        },
        {
            title: "Gece/Gündüz Modu",
            description: "Gözünüzü yakan ya da içinizi karartan sitelerden sıkıldınız mı?\nArtık seçenek sizde.",
            image: IndexTheme,
            duration: "0ms",
            disableAnimation: true
        },
        {
            title: "İstediğinizi Arayın",
            description: "\"Admin, türüne göre arama yok mu?\"\nNeden olmasın, o da var.",
            image: SearchIndex,
        },
        {
            title: "Discord'a Otomatik Bildirim",
            description: "Linki alıp kopyala/yapıştır yapmakla uğraşmak mı?\n2020'deyiz.",
            image: WebhookIndex,
        },
        {
            title: "İçerik Yönetim Paneli",
            description: "Sadece bir çeviri grubuna gereken şeyler. Ne bir eksiği ne bir fazlası.",
            image: AdminIndexPage,
            duration: "1500ms"
        }
    ]

    return (
        <>
            <Grid container spacing={4}>
                {FeatureList.map((f, i) => (
                    <FeaturePanel key={f.title} {...f} side={i % 2 === 0 ? "right" : "left"} end={i + 1 === FeatureList.length ? true : false} index={i + 1} />
                ))}
            </Grid>

        </>
    )
}