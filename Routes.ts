export type ListarDisputaProps = {
    curso: string,
    esporte: string,
    categoria_genero?: string,
    categoria_esportiva?: string
}

type RoutesProps = {
    home: string,
    login: string,
    buscarDisputa: ({ curso }: { curso: string }) => string,
    listarDisputa: (
        { categoria_esportiva, categoria_genero, curso, esporte }:
            ListarDisputaProps
    ) => string,
    profile: string
    registrarDisputa: string
}

export const Routes = (): RoutesProps => {
    return {
        home: "/",
        login: "/login",
        buscarDisputa: ({ curso }: { curso: string }) => {
            return `/disputa/buscar?curso=${curso}`
        },
        listarDisputa: (
            { curso, esporte, categoria_genero, categoria_esportiva }:
                ListarDisputaProps
        ) => {
            return "/disputa/listar" +
                `?curso=${curso}` +
                `&esporte=${esporte}` +
                `${categoria_genero ? `&categoria_genero=${categoria_genero}` : ""}` +
                `${categoria_esportiva ? `&categoria_esportiva=${categoria_esportiva}` : ""}`
        },
        registrarDisputa: "/disputa/registrar",
        profile: "/perfil"
    }
}