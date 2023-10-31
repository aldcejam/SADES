import { LayoutDashboard } from 'app/(pages)/(dashboard)/layout.dash';
import { PartidaContent } from '../components/template/partidaContent';
import styled from './styled.module.scss';

export default function Page({ params }: any) {
  return (
    <LayoutDashboard>
      <div className={styled['container']}>
        <div className={styled['content']}>
          <PartidaContent display="page" />
        </div>
      </div>
    </LayoutDashboard>
  );
}
