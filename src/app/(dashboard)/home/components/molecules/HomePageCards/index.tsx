import Link from "next/link"
import CardIllustration from "../../atoms/cardIllustration"
import { StyledHomePageCard } from "./styled"

type TypesHomePageCard = {
    illustration: any
    title: "equipes por curso" | "jogos esportivos" |
    "jogos do seu curso" | "recordes desta edição" | "recordes de todos os anos" |
    "publicações sobre a semadec" | "Edições da semadec"
    link: string
}

const HomePageCard = ({ illustration, title, link }: TypesHomePageCard) => {
    return (
        <StyledHomePageCard className="card">
            <Link href={link}>
                <CardIllustration illustration={illustration} />
                <div className="title">
                    <h2>{title}</h2>
                    <h3>clique para entrar</h3>
                </div>
            </Link>
        </StyledHomePageCard>
    )
}

export default HomePageCard