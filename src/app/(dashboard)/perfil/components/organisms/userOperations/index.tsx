import ModifyUserData from "../../template/modifyUserData"
import UserResponsibilities from "../../template/userResponsibilities"
import { StyledUserOperations } from "./styled"

const UserOperations = () => {
    return (
        <StyledUserOperations>
            <ModifyUserData />
            <ModifyUserData />
        </StyledUserOperations>
    )
}

export default UserOperations