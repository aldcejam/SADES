

export const CheckUserAndUserData = ({ userData, userLogged }: {
    userData: any,
    userLogged: any
}) => {
    const userConnectedButDataUndefined = CheckUserConnectedButDataUndefined({userData, userLogged});
    const userNotLogged = CheckIfUserLogged(userLogged);
    const userDataNotExist = CheckIfUserDataExist(userData);

    const Situation = () => {
        if (userConnectedButDataUndefined) {
            return userConnectedButDataUndefined;
        }
        if (userNotLogged) {
            return userNotLogged;
        }
        if (userDataNotExist) {
            return userDataNotExist;
        }
    };

    return Situation();
};

/*  ================================== */

const CheckIfUserLogged = ({ userLogged }: {
    userLogged: any
}) => {
    if (!userLogged) {
        return "Usuário não conectado";
    }
    return false;
};
const CheckUserConnectedButDataUndefined = ({userData, userLogged}: {
    userData: any,
    userLogged: any
}) => {
    if (userLogged && !userData) {
        window.location.reload()
    }
    return false;
};


const CheckIfUserDataExist = ({userData}:{
    userData: any
}) => {
    if (userData) {
        return userData;
    }
    return false;
};
