type CheckUserAndUserDataProps = {
  userLogged: boolean;
  userData: any;
};
export const CheckUserAndUserData = ({
  userData,
  userLogged,
}: CheckUserAndUserDataProps) => {
  
  const userConnectedButDataUndefined = CheckUserConnectedButDataUndefined({
    userData,
    userLogged,
  });
  const userNotLogged = CheckIfUserLogged({ userLogged });
  const userDataNotExist = CheckIfUserDataExist({ userData });

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

type CheckUserConnectedButDataUndefinedProps = {
  userLogged: boolean;
  userData: any;
};
const CheckUserConnectedButDataUndefined = ({
  userData,
  userLogged,
}: CheckUserConnectedButDataUndefinedProps) => {
  if (userLogged && userData == undefined) {
    return "Carregando dados do usuário...";
  }
  return false;
};

type CheckIfUserLoggedProps = { userLogged: boolean };
const CheckIfUserLogged = ({ userLogged }: CheckIfUserLoggedProps) => {
  if (!userLogged) {
    return "Usuário não conectado";
  }
  return false;
};

type CheckIfUserDataExistProps = { userData: boolean };
const CheckIfUserDataExist = ({ userData }: CheckIfUserDataExistProps) => {
  if (userData != undefined) {
    return userData;
  }
  return false;
};
