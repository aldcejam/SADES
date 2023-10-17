import { GenderOptionsProps } from 'defaultTypes/GendersProps';
import IllustrationFamale from './illustrations/famale';
import IllustrationMale from './illustrations/male';
import IllustrationMixed from './illustrations/mixed';

const IllustrationByGender = ({ gender }: { gender: GenderOptionsProps }) => {
  switch (gender) {
    case 'female':
      return <IllustrationFamale />;
    case 'male':
      return <IllustrationMale />;
    case 'mixed':
      return <IllustrationMixed />;
    default:
      return null;
  }
};

export default IllustrationByGender;
