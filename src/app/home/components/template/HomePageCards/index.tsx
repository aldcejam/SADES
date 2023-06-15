import IllustrationCourse from "public/illustrationsForCard/IllustrationCourse"
import IllustrationEdicoesDaSemadec from "public/illustrationsForCard/IllustrationEdicoesDaSemadec"
import IllustrationJogosDoSeuCurso from "public/illustrationsForCard/IllustrationJogosDoSeuCurso"
import IllustrationJogosEsportivos from "public/illustrationsForCard/IllustrationJogosEsportivos"
import IllustrationPublicacoesSobreSemadec from "public/illustrationsForCard/IllustrationPublicacoesSobreSemadec"
import IllustrationRecordesDestaEdicao from "public/illustrationsForCard/IllustrationRecordesDeTodosOsAnos"  
import { StyledHomePageCards } from "./styled"
import HomePageCard from '../../molecules/HomePageCards';
import { Routes } from "../../../../../../Routes"


const HomePageCards = () => {
    return (
        <StyledHomePageCards className="222">
            <div className="grid-top">
                <HomePageCard link='/' title='equipes por curso' illustration={<IllustrationCourse />} />
                <HomePageCard link='/' title='jogos esportivos' illustration={<IllustrationJogosEsportivos />} />
                <HomePageCard link={`${Routes.findGame}?curso=informatica`} title='jogos do seu curso' illustration={<IllustrationJogosDoSeuCurso />} />
            </div>
            <div className="grid-left">
                <HomePageCard link='/' title='recordes desta edição' illustration={<IllustrationEdicoesDaSemadec />} />
                <HomePageCard link='/' title='publicações sobre a semadec' illustration={<IllustrationPublicacoesSobreSemadec />} />
            </div>
            <div className="grid-right">
                <HomePageCard link='/' title='recordes de todos os anos' illustration={<IllustrationRecordesDestaEdicao />} />
                <HomePageCard link='/' title='Edições da semadec' illustration={<IllustrationRecordesDestaEdicao />} />
            </div>
        </StyledHomePageCards>
    )
}

export default HomePageCards