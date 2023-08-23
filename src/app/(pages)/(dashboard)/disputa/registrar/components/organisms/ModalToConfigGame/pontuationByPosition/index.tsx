import SelectPontuations from "../../../atoms/modalToConfigGame/SelectPontuations" 
import Pontuation from "../../../molecules/ModalToConfigGame/pontuation"
 
const PontuationByPosition = () => {

    return (
        <section>
            <SelectPontuations />
            <Pontuation />
        </section>
    )
}

export default PontuationByPosition