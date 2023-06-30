import IllustrationEdicoesDaSemadec from "public/home-illustrations/illustrationEdicoesDaSemadec"
import IllustrationJogosDoSeuCurso from "public/home-illustrations/illustrationJogosDoSeuCurso"
import IllustrationJogosEsportivos from "public/home-illustrations/illustrationJogosEsportivos"
import IllustrationPublicacoesSobreSemadec from "public/home-illustrations/illustrationPublicacoesSobreSemadec"
import IllustrationRecordesDestaEdicao from "public/home-illustrations/illustrationRecordesDeTodosOsAnos"  
import { StyledHomePageCards } from "./styled"
import HomePageCard from '../../molecules/HomePageCards';
import { Routes } from "@base-project/Routes"
import IllustrationCourse from "public/home-illustrations/illustrationCourse"


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