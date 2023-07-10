import { GenderOptionsProps } from "defaultTypes/GendersProps";
import IllustrationFamale from "@base-project/public/Illustration-gender/famale";
import IllustrationMale from "@base-project/public/Illustration-gender/male";
import IllustrationMixed from "@base-project/public/Illustration-gender/mixed";

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