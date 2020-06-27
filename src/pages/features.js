import React from 'react'

import { IndexPage, EpisodePage, IndexTheme, SearchIndex, WebhookIndex, AdminIndexPage, MangaEpisodePage, MOTD, ResponsiveDesign } from '../config/assets/index'
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
            title: "Anime İzleme Özelliği",
            description: "İzleyicilerinize sadece indirme linki değil, izleme linklerini de sunabilirsiniz!\nYetersizlikler yüzüden sitenizde sadece indirme linklerinin bulunmasından sıkılmadınız mı? Artık sitenizde izleme bölümü de var.",
            image: EpisodePage,
            duration: "2000ms"
        },
        {
            title: "Manga Okuma Özelliği",
            description: "Manga çevirisi yapıyorsunuz ama mangalarınızı hep farklı sitelere yüklemeniz mi gerekiyor? Ya da yine kendiniz hostluyorsunuzdur ancak forum/blog yazılımınızın yanında ikinci bir yazılımla.\n\nBöyle şeylere gerek yok, çünkü her şey bir yerde olunca hayat daha kolay.",
            image: MangaEpisodePage,
            duration: "2000ms"
        },
        {
            title: "Duyuru Ekleme",
            description: "Ana sayfa, anime ve manga sayfaları, ayrıca anime ve manga bölümlerine özel duyurular ekleyebilirsiniz.",
            image: MOTD,
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
            image: SearchIndex
        },
        {
            title: "Responsive Tasarım",
            description: "\"Masaüstünde güzel duruyor da, mobilde durumlar nasıl?\" \n\n Responsive design kullanmayan siteler çok eskide kalmadı mı zaten?",
            subtitle: <>(<a href={ResponsiveDesign} target="_blank" rel="noopener noreferrer">Buraya tıklayarak resmin büyük halini görebilirsiniz.</a>)</>,
            image: ResponsiveDesign,
            duration: "20000ms"
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