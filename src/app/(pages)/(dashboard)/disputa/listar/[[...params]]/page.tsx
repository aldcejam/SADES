import GameList from '../components/template/gameList';
import styled from './styled.module.scss';
import { LayoutDashboard } from '../../../layout.dash';

export default function Page({ params }: any) {
  const ListWeekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getCourse = params?.params?.[0];
  const getSport = params?.params?.[1];
  const getGenderCategory = params?.params?.[2];

  return (
    <LayoutDashboard 
      pageTitle={`Disputas de ${getCourse} | ${getGenderCategory} - ${getSport}`}
    >
      <div className={styled['page-disputa-listar']}>
        {ListWeekday.map((day) => (
          <GameList key={day} day={day} />
        ))}
      </div>
    </LayoutDashboard>
  );
}
