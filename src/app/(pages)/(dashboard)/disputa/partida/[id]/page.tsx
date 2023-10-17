import { LayoutDashboard } from 'app/(pages)/(dashboard)/layout.dash';
import { PartidaContent } from '../components/template/partidaContent';
import styled from './styled.module.scss';

export default function Page({ params }: any) {
  return (
    <LayoutDashboard innerBoxShadow>
      <div className={styled['container']}>
        <PartidaContent display="page" />
      </div>
    </LayoutDashboard>
  );
}
