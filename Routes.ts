type RoutesProps = {
    home: string,
    login: string,
    buscarDisputa: string,
    listarDisputa: string,
    profile: string
    registrarDisputa: string
}

export const Routes:RoutesProps = {
    home: "/",
    login: "/login",
    buscarDisputa: "/disputa/buscar",
    listarDisputa: "/disputa/listar",    
    registrarDisputa: "/disputa/registrar",
    profile: "/perfil"
}