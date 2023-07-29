type GetUserDataProps = {
    tokenValue: string | undefined;
}

export const GetUserData = async ({ tokenValue }: GetUserDataProps) => {
    if (!tokenValue) {
        return;
    }

    const urlForGetUserData = process.env.NEXT_PUBLIC_SUAP_URL + "/api/v2/minhas-informacoes/meus-dados/";
    const scope = process.env.NEXT_PUBLIC_SUAP_SCOPE as string;

    const queryParams = new URLSearchParams({ scope }).toString();
    const url = `${urlForGetUserData}?${queryParams}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${tokenValue}`,
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        return null;
    }

    return await response.json();
};
