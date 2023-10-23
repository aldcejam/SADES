import { GenderOptionsProps } from 'defaultTypes/GendersProps';
import IllustrationFamale from './famale/index.illustration';
import IllustrationMale from './male/index.illustration';
import IllustrationMixed from './mixed/index.illustration';

export const IllustrationByGender = ({ gender }: { gender: GenderOptionsProps }) => {
  switch (gender) {
    case 'female':
      return <IllustrationFamale />;
    case 'male':
      return <IllustrationMale />;
    case 'mixed':
      return <IllustrationMixed />; 
  }
};
 
