import { ManageSport } from "../../application/sport/ManageSport";

const PageFindStatesModifiers = () => {
    const { UpdateSport } = ManageSport();
    
    return {
        UpdateSport: UpdateSport,
    }
}

export { PageFindStatesModifiers }