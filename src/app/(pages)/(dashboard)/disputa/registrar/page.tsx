import styledPage from './styled.module.scss';

import ModalToConfigGame from './components/template/modalToConfigGame';

import { LayoutDashboard } from '../../layout.dash';
import ChooseDispute from './components/template/chooseDispute';
import { ModalSelectCategoriesInserted } from './components/template/modalSelectCategoriesInserted';
import { Client } from './client';

export default function Page() {
  return (
    <Client>
      <LayoutDashboard pageTitle="Registrar disputa">
        <div className={styledPage['page-diputa-registrar']}>
          <div className={styledPage['container']}>
            <ChooseDispute />
            <ModalSelectCategoriesInserted />
            <ModalToConfigGame />
          </div>
        </div>
      </LayoutDashboard>
    </Client>
  );
}
