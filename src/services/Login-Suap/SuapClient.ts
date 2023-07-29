import { TokenSuap } from "./TokenSuap";

import { ExtractToken } from "./SuapClient/StratifiedURLSpecification/ExtractToken";
import { ExtractScope } from "./SuapClient/StratifiedURLSpecification/ExtractScope";

import { GetUserData } from "./SuapClient/ManageUserData/FetchUserData";
import { GetLoginURL } from "./LoginURL";
import { LogoutSuap } from "./SuapClient/OptionsSuapClient/LogoutSuap";
import { ExtractDuration } from "./SuapClient/StratifiedURLSpecification/ExtractDuration";
import { CheckUserAndUserData } from "./SuapClient/CheckVariables/CheckUserAndUserData";

export const SuapClient = () => {
    const token = TokenSuap(
        {
            tokenValue: ExtractToken(),
            expirationTime: ExtractDuration(),
            scope: ExtractScope()
        }
    );

    const Login = () => {
        window.location.href = GetLoginURL();
    };
    const Logout = () => LogoutSuap({ token })

    const isAuthenticated = () => {
        return token.IsSuapTokenExist();
    };

    const userLogged = isAuthenticated();

    const userDataNotChecked = GetUserData({ tokenValue: token.GetValue() });
    const userData = CheckUserAndUserData({ userData: userDataNotChecked, userLogged });

    return {
        Login,
        Logout,
        token,
        userData,
        isAuthenticated,
    };
};
