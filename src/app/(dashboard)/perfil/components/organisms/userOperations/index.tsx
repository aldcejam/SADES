import ModifyUserData from "../../template/modifyUserData" 
import styled from "./styled.module.scss"

const UserOperations = () => {
    return (
        <div className={styled["user-operations"]}>
            <ModifyUserData />
            <ModifyUserData />
        </div>
    )
}

export default UserOperations