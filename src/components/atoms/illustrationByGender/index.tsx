import { GenderOptionsProps } from "src/defaultTypes/GendersProps";
import IllustrationFamale from "public/Illustration-gender/Famele";
import IllustrationMale from "public/Illustration-gender/Male";
import IllustrationMixed from "public/Illustration-gender/Mixed";

const IllustrationByGender = ({ gender }: { gender: GenderOptionsProps })=>{
    switch (gender) {
        case "female":
            return <IllustrationFamale />;
        case "male":
            return <IllustrationMale />;
        case "mixed":
            return <IllustrationMixed />;
        default:
            return null;
    }
}

export default IllustrationByGender;