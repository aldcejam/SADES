"use client"
import { Routes } from "@base-project/Routes"
import Cookies from "js-cookie"
import IllustrationCourse from "public/home-illustrations/illustrationCourse"
import IllustrationEdicoesDaSemadec from "public/home-illustrations/illustrationEdicoesDaSemadec"
import IllustrationJogosDoSeuCurso from "public/home-illustrations/illustrationJogosDoSeuCurso"
import IllustrationJogosEsportivos from "public/home-illustrations/illustrationJogosEsportivos"
import IllustrationPublicacoesSobreSemadec from "public/home-illustrations/illustrationPublicacoesSobreSemadec"
import IllustrationRecordesDestaEdicao from "public/home-illustrations/illustrationRecordesDeTodosOsAnos"
import HomePageCard from '../../molecules/HomePageCards'
import "./styled.scss"

const HomePageCards = () => {
    
    return (
        <div className={"home-page-cards"}>
            <div className={"home-page-cards__grid-top"}>
                <HomePageCard link='/' title='equipes por curso' illustration={<IllustrationCourse />} />
                <HomePageCard link='/' title='jogos esportivos' illustration={<IllustrationJogosEsportivos />} />
                <HomePageCard
                    link={Routes.buscarDisputa}
                    onClick={() => {
                        Cookies.set('ParametersToBuscarDisputa', `${JSON.stringify({ course: "Eletrônica"})}`)
                    }
                    }
                    title='jogos do seu curso'
                    illustration={<IllustrationJogosDoSeuCurso />} />
            </div>
            <div className={"home-page-cards__grid-left"}>
                <HomePageCard link='/' title='recordes desta edição' illustration={<IllustrationEdicoesDaSemadec />} />
                <HomePageCard link='/' title='publicações sobre a semadec' illustration={<IllustrationPublicacoesSobreSemadec />} />
            </div>
            <div className={"home-page-cards__grid-right"}>
                <HomePageCard link='/' title='recordes de todos os anos' illustration={<IllustrationRecordesDestaEdicao />} />
                <HomePageCard link='/' title='Edições da semadec' illustration={<IllustrationRecordesDestaEdicao />} />
            </div>
        </div >
    )
}

export default HomePageCards