export const RemoveSlashIfLastLetter = ({authHost}:{
    authHost: string
}) => {
    const result = authHost.split("/");
    if (result[result.length - 1] === "") {
        result.pop();
        return result.join("/");
    }
    return authHost;
};