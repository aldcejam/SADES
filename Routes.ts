type RoutesProps = {
    home: string,
    login: string,
    buscarDisputa: string,
    gameList: string,
    profile: string
    registerGame: string
}

export const Routes:RoutesProps = {
    home: "/",
    login: "/login",
    buscarDisputa: "/disputa/buscar",
    gameList: "/disputa/listar",    
    registerGame: "/disputa/registrar",
    profile: "/perfil"
}