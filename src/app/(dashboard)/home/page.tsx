import PageTitle from 'components/atoms/pageTitle';
import ContentPage from '../layout-style/ContentPage';
import HomePageCards from './components/template/HomePageCards';

export default function Page() {
  return (
    <> 
      <PageTitle title='Pesquisar por jogo' />
      <ContentPage>
        <HomePageCards />
      </ContentPage>
    </>
  );
}
