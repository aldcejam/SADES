import { StyledTitle } from "./styled";

type TitleProps = {
    title: string[] | string | undefined,
}
const Title = ({ title }:TitleProps) => {
    return (
        <StyledTitle>
            <h2>{title}</h2>
            <h3>Clique para selecionar o Esporte</h3>
        </StyledTitle>
    );
}

export default Title