type RoutesProps = {
    home: string,
    login: string,
    findGame: string,
    gameList: string,
    profile: string
    registerGame: string
}

export const Routes:RoutesProps = {
    home: "/",
    login: "/login",
    findGame: "/disputa/buscar",
    gameList: "/disputa/listar",    
    registerGame: "/disputa/registrar",
    profile: "/perfil"
}