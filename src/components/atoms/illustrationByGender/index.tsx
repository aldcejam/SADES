import { GenderOptionsProps } from "defaultTypes/GendersProps";
import IllustrationFamale from "components/templates/modals/modalSelectCategories/illustrations/famale";
import IllustrationMale from "components/templates/modals/modalSelectCategories/illustrations/male";
import IllustrationMixed from "components/templates/modals/modalSelectCategories/illustrations/mixed";

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