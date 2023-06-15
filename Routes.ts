type RoutesProps = {
    home: string,
    login: string,
    disputaBuscar: string,
    disputaListar: string,
    disputaRegistrar: string
    perfil: string
}

export const Routes: RoutesProps = {
    home: `/`,
    login: `/login`,
    disputaBuscar: `/disputa/buscar`,
    disputaListar: `/disputa/listar`,
    disputaRegistrar: `/disputa/registrar`,
    perfil: `/perfil`
}